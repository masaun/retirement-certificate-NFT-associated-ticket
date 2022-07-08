import { numToBytes32 } from "@chainlink/test-helpers/dist/src/helpers"
import { assert, expect } from "chai"
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { network, deployments, ethers, run } from "hardhat"
import { developmentChains } from "../../helper-hardhat-config"
import { RetirementNFTAssociatedTicketFactory, LinkToken, MockOracle } from "../../typechain"

//@dev - Helper of ethers.js for retrieving eventLogs emitted, etc.
import { getEventLog } from "../ethersjs-helper/ethersjsHelper"
//import { convertHexToString, convertStringToHex, toWei, fromWei, getEventLog, getCurrentBlock, getCurrentTimestamp } from "../ethersjs-helper/ethersjsHelper"


/**
 * @title - Unit test of the RetirementNFTAssociatedTicketFactory.sol
 */ 
!developmentChains.includes(network.name)
    ? describe.skip
    : describe("RetirementNFTAssociatedTicketFactory Unit Tests", async function () {
          let retirementNFTAssociatedTicketFactory: RetirementNFTAssociatedTicketFactory
          let linkToken: LinkToken
          let mockOracle: MockOracle

          let tx: any
          let txReceipt: any

          beforeEach(async () => {
              await deployments.fixture(["mocks", "api"])
              linkToken = await ethers.getContract("LinkToken")
              const linkTokenAddress: string = linkToken.address
              retirementNFTAssociatedTicketFactory = await ethers.getContract("RetirementNFTAssociatedTicketFactory")
              mockOracle = await ethers.getContract("MockOracle")

              await run("fund-link", { contract: retirementNFTAssociatedTicketFactory.address, linkaddress: linkTokenAddress })
          })

          it(`Should be successful that a new RetirementNFTAssociatedTicket is minted`, async () => {
              //@dev - A new RetirementNFTAssociatedTicket is minted
              const to: string = "0xb794F5eA0ba39494cE839613fffBA74279579268"
              const ticketType: number = 0 
              const mintAmount: number = 100  // Number of tickets to be minted (ERC1155)
              const retirementNFT: string = "0x343c43A37D37dfF08AE8C4A11544c718AbB4fCF8"
              const uri: string = "https://gateway.pinata.cloud/ipfs/QmPK1s3pNYLi9ERiq3BDxKa4XosgWwFRQUydHUtz4YgpqB"
              tx = await retirementNFTAssociatedTicketFactory.mintRetirementNFTAssociatedTicket(to, ticketType, mintAmount, retirementNFT, uri)
              txReceipt = await tx.wait()
          })

          it(`Should be successful to retrieve an emitted-event log of "RetirementNFTAssociatedTicketMinted"`, async () => {
              const eventName: string = "RetirementNFTAssociatedTicketMinted"
              let eventLog: any = await getEventLog(txReceipt, eventName)
              console.log(`Emitted-EventLog of "RetirementNFTAssociatedTicketMinted": ${ eventLog }`)
          })

      })