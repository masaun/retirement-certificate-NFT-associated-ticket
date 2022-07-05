import { numToBytes32 } from "@chainlink/test-helpers/dist/src/helpers"
import { assert, expect } from "chai"
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { network, deployments, ethers, run } from "hardhat"
import { developmentChains } from "../../helper-hardhat-config"
import { RetirementNFT, LinkToken, MockOracle } from "../../typechain"


/**
 * @title - Unit test of the RetirementNFT.sol
 */ 
!developmentChains.includes(network.name)
    ? describe.skip
    : describe("RetirementNFT Unit Tests", async function () {
          let retirementNFT: RetirementNFT
          let linkToken: LinkToken
          let mockOracle: MockOracle

          beforeEach(async () => {
              await deployments.fixture(["mocks", "api"])
              linkToken = await ethers.getContract("LinkToken")
              const linkTokenAddress: string = linkToken.address
              retirementNFT = await ethers.getContract("RetirementNFT")
              mockOracle = await ethers.getContract("MockOracle")

              await run("fund-link", { contract: retirementNFT.address, linkaddress: linkTokenAddress })
          })

          it(`Should successfully make an something request`, async () => {
              // [TODO]: 
          })

      })