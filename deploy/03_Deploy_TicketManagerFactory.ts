import { DeployFunction } from "hardhat-deploy/types"
import { network, ethers, run } from "hardhat"
import {
  networkConfig,
  developmentChains,
  VERIFICATION_BLOCK_CONFIRMATIONS,
} from "../helper-hardhat-config"
import { autoFundCheck, verify } from "../helper-functions"

const deployFunction: DeployFunction = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log, get } = deployments

  const { deployer } = await getNamedAccounts()
  const chainId: number | undefined = network.config.chainId
  if (!chainId) return

  const waitBlockConfirmations: number = developmentChains.includes(network.name)
    ? 1
    : VERIFICATION_BLOCK_CONFIRMATIONS

  //@dev - Deploy the TicketManagerFactory contract
  const args: any = []  // [NOTE]: Argument values for constructor
  const ticketManagerFactory = await deploy(`TicketManagerFactory`, {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: waitBlockConfirmations,
  })

  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    log("Verifying...")
    await verify(ticketManagerFactory.address, args)
  }

  
  log(`Run TicketManagerFactory contract with following command:`)
  const networkName: string = network.name == "hardhat" ? "localhost" : network.name
  log(`yarn hardhat request-data --contract ${ ticketManagerFactory.address } --network ${networkName}`)
  log(`----------------------------------------------------`)
}

export default deployFunction
deployFunction.tags = [`all`, `api`, `main`]
