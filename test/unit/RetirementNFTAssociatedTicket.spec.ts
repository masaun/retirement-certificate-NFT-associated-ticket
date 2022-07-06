import { numToBytes32 } from "@chainlink/test-helpers/dist/src/helpers"
import { assert, expect } from "chai"
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { network, deployments, ethers, run } from "hardhat"
import { developmentChains } from "../../helper-hardhat-config"
import { RetirementNFTAssociatedTicket, RetirementNFTAssociatedTicketFactory, LinkToken, MockOracle } from "../../typechain"


/**
 * @title - Unit test of the RetirementNFTAssociatedTicket.sol
 */ 
!developmentChains.includes(network.name)
    ? describe.skip
    : describe("RetirementNFTAssociatedTicket Unit Tests", async function () {
          let retirementNFTAssociatedTicket: RetirementNFTAssociatedTicket
          let retirementNFTAssociatedTicketFactory: RetirementNFTAssociatedTicketFactory
          let linkToken: LinkToken
          let mockOracle: MockOracle

          beforeEach(async () => {
              //@dev - Below is for just checking owner address out.
              const [owner, addr1] = await ethers.getSigners()
              console.log(`owner address: ${ owner.address }`)

              //@dev - This is using "hardhat-deploy" module
              await deployments.fixture(["mocks", "api"])

              linkToken = await ethers.getContract("LinkToken")
              const linkTokenAddress: string = linkToken.address

              mockOracle = await ethers.getContract("MockOracle")

              //@dev - Create the contract instance of the RetirementNFTAssociatedTicketFactory.sol
              retirementNFTAssociatedTicketFactory = await ethers.getContract("RetirementNFTAssociatedTicketFactory")
              console.log(`##### Deployed-contract address of the RetirementNFTAssociatedTicketFactory.sol: ${ retirementNFTAssociatedTicketFactory.address } ######`)

              //await run("fund-link", { contract: retirementNFTAssociatedTicket.address, linkaddress: linkTokenAddress })
          })

          it(`Should be successful that a new RetirementNFTAssociatedTicket is minted`, async () => {
              //@dev - A new RetirementNFTAssociatedTicket is minted
              const to = "0xb794F5eA0ba39494cE839613fffBA74279579268"
              const ticketType = 0 
              const mintAmount = 100  // Number of tickets to be minted (ERC1155)
              const retirementNFT = "0x343c43A37D37dfF08AE8C4A11544c718AbB4fCF8"
              const uri = "https://gateway.pinata.cloud/ipfs/QmPK1s3pNYLi9ERiq3BDxKa4XosgWwFRQUydHUtz4YgpqB"
              let tx = await retirementNFTAssociatedTicketFactory.mintRetirementNFTAssociatedTicket(to, ticketType, mintAmount, retirementNFT, uri)
              let txReceipt = await tx.wait()
          })

      })