import { DeployFunction } from "hardhat-deploy/types"
import { network, ethers, run } from "hardhat"
import {
  networkConfig,
  developmentChains,
  VERIFICATION_BLOCK_CONFIRMATIONS,
} from "../helper-hardhat-config"
import { autoFundCheck, verify } from "../helper-functions"
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { VRFCoordinatorV2Mock } from "../typechain"


/**
 * @notice - Deployment
 */
const deployFunction: DeployFunction = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log, get } = deployments

  const { deployer } = await getNamedAccounts()
  const chainId: number | undefined = network.config.chainId
  if (!chainId) return


  //@dev - Deploy the RandomNumberGeneratorV2 contract
  let linkTokenAddress: string | undefined
  let vrfCoordinatorAddress: string | undefined
  let subscriptionId: BigNumber

  if (chainId === 31337) {
    const linkToken = await get("LinkToken")
    const VRFCoordinatorV2Mock: VRFCoordinatorV2Mock = await ethers.getContract(
      "VRFCoordinatorV2Mock"
    )

    vrfCoordinatorAddress = VRFCoordinatorV2Mock.address
    linkTokenAddress = linkToken.address

    const fundAmount: BigNumber = networkConfig[chainId].fundAmount
    const transaction: ContractTransaction = await VRFCoordinatorV2Mock.createSubscription()
    const transactionReceipt: ContractReceipt = await transaction.wait(1)
    if (!transactionReceipt.events) return
    subscriptionId = ethers.BigNumber.from(transactionReceipt.events[0].topics[1])
    await VRFCoordinatorV2Mock.fundSubscription(subscriptionId, fundAmount)
  } else {
    subscriptionId = BigNumber.from(process.env.VRF_SUBSCRIPTION_ID)
    linkTokenAddress = networkConfig[chainId].linkToken
    vrfCoordinatorAddress = networkConfig[chainId].vrfCoordinator
  }

  const keyHash: string | undefined = networkConfig[chainId].keyHash
  const waitBlockConfirmations1: number = developmentChains.includes(network.name)
    ? 1
    : VERIFICATION_BLOCK_CONFIRMATIONS

  const args1 = [subscriptionId, vrfCoordinatorAddress, linkTokenAddress, keyHash]
  const randomNumberGeneratorV2 = await deploy("RandomNumberGeneratorV2", {
    from: deployer,
    args: args1,
    log: true,
    waitConfirmations: waitBlockConfirmations1,
  })

  //@dev - Deploy the RetirementNFTAssociatedTicketFactory contract
  const waitBlockConfirmations2: number = developmentChains.includes(network.name)
    ? 1
    : VERIFICATION_BLOCK_CONFIRMATIONS

  const args2: any = [randomNumberGeneratorV2.address]  // [NOTE]: Argument values for constructor
  const retirementNFTAssociatedTicketFactory = await deploy(`RetirementNFTAssociatedTicketFactory`, {
    from: deployer,
    args: args2,
    log: true,
    waitConfirmations: waitBlockConfirmations2,
  })

  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    log("Verifying...")
    await verify(retirementNFTAssociatedTicketFactory.address, args2)
  }

  
  log(`Run RetirementNFTAssociatedTicketFactory contract with following command:`)
  const networkName: string = network.name == "hardhat" ? "localhost" : network.name
  log(`yarn hardhat request-data --contract ${retirementNFTAssociatedTicketFactory .address} --network ${networkName}`)
  log(`----------------------------------------------------`)
}

export default deployFunction
deployFunction.tags = [`all`, `api`, `main`]
