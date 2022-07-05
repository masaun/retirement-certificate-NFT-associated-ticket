import { numToBytes32 } from "@chainlink/test-helpers/dist/src/helpers"
import { assert, expect } from "chai"
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { network, deployments, ethers, run } from "hardhat"
import { developmentChains } from "../../helper-hardhat-config"
import { RetirementNFTAssociatedTicketFactory, LinkToken, MockOracle } from "../../typechain"


/**
 * @title - Unit test of the RetirementNFTAssociatedTicketFactory.sol
 */ 
!developmentChains.includes(network.name)
    ? describe.skip
    : describe("RetirementNFTAssociatedTicketFactory Unit Tests", async function () {
          let retirementNFTAssociatedTicketFactory: RetirementNFTAssociatedTicketFactory
          let linkToken: LinkToken
          let mockOracle: MockOracle

          beforeEach(async () => {
              await deployments.fixture(["mocks", "api"])
              linkToken = await ethers.getContract("LinkToken")
              const linkTokenAddress: string = linkToken.address
              retirementNFTAssociatedTicketFactory = await ethers.getContract("RetirementNFTAssociatedTicketFactory")
              mockOracle = await ethers.getContract("MockOracle")

              await run("fund-link", { contract: retirementNFTAssociatedTicketFactory.address, linkaddress: linkTokenAddress })
          })

          it(`Should successfully make an something request`, async () => {
              // [TODO]: 
          })

      })