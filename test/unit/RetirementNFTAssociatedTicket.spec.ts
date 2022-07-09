import { numToBytes32 } from "@chainlink/test-helpers/dist/src/helpers"
import { assert, expect } from "chai"
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { network, deployments, ethers, run } from "hardhat"
import { developmentChains } from "../../helper-hardhat-config"
import { RetirementNFT, RetirementNFTAssociatedTicket, RetirementNFTAssociatedTicketFactory, LinkToken, MockOracle } from "../../typechain"

//@dev - Helper of ethers.js for retrieving eventLogs emitted, etc.
import { getEventLog } from "../ethersjs-helper/ethersjsHelper"
//import { convertHexToString, convertStringToHex, toWei, fromWei, getEventLog, getCurrentBlock, getCurrentTimestamp } from "../ethersjs-helper/ethersjsHelper"


/**
 * @title - Unit test of the RetirementNFTAssociatedTicket.sol
 */ 
!developmentChains.includes(network.name)
    ? describe.skip
    : describe("RetirementNFTAssociatedTicket Unit Tests", async function () {
          //@dev - Variables for assigning contract instances
          let retirementNFT: RetirementNFT
          let retirementNFTAssociatedTicket: RetirementNFTAssociatedTicket
          let retirementNFTAssociatedTicketFactory: RetirementNFTAssociatedTicketFactory
          let linkToken: LinkToken
          let mockOracle: MockOracle

          //@dev - Variables for assigning deployed-addresses
          let RETIREMENT_NFT: string
          let RETIREMENT_NFT_ASSOCIATED_TICKET: string
          let RETIREMENT_NFT_ASSOCIATED_TICKET_FACTORY: string

          beforeEach(async () => {
              //@dev - Below is for just checking owner address out.
              const [owner, addr1] = await ethers.getSigners()
              console.log(`owner address: ${ owner.address }`)

              //@dev - This is using "hardhat-deploy" module
              await deployments.fixture(["mocks", "api"])

              linkToken = await ethers.getContract("LinkToken")
              const linkTokenAddress: string = linkToken.address

              mockOracle = await ethers.getContract("MockOracle")

              //@dev - Create the contract instance of the RetirementNFT.sol
              retirementNFT = await ethers.getContract("RetirementNFT")
              RETIREMENT_NFT = retirementNFT.address
              console.log(`##### Deployed-contract address of the RetirementNFT.sol: ${ RETIREMENT_NFT } ######`)

              //@dev - Create the contract instance of the RetirementNFTAssociatedTicketFactory.sol
              retirementNFTAssociatedTicketFactory = await ethers.getContract("RetirementNFTAssociatedTicketFactory")
              RETIREMENT_NFT_ASSOCIATED_TICKET_FACTORY = retirementNFTAssociatedTicketFactory.address
              console.log(`##### Deployed-contract address of the RetirementNFTAssociatedTicketFactory.sol: ${ RETIREMENT_NFT_ASSOCIATED_TICKET_FACTORY } ######`)

              //@dev - Mint a new RetirementNFTAssociatedTicket
              const to: string = "0xb794F5eA0ba39494cE839613fffBA74279579268"
              const ticketType: number = 0 
              const mintAmount: number = 100  // Number of tickets to be minted (ERC1155)
              const uri: string = "https://gateway.pinata.cloud/ipfs/QmPK1s3pNYLi9ERiq3BDxKa4XosgWwFRQUydHUtz4YgpqB"
              let tx: any = await retirementNFTAssociatedTicketFactory.mintRetirementNFTAssociatedTicket(to, ticketType, mintAmount, RETIREMENT_NFT, uri)
              let txReceipt: any = await tx.wait()

              //@dev - Retrieve an eventLog emitted (NOTE: Event name is "RetirementNFTAssociatedTicketMinted")
              const eventName: string = "RetirementNFTAssociatedTicketMinted"
              let eventLog: any = await getEventLog(txReceipt, eventName)
              console.log(`Emitted-EventLog of "RetirementNFTAssociatedTicketMinted": ${ eventLog }`)

              //@dev - Create a RetirementNFTAssociatedTicket instance by assigning contract address retrieved above
              RETIREMENT_NFT_ASSOCIATED_TICKET = eventLog[0]
              retirementNFTAssociatedTicket = await ethers.getContractAt("RetirementNFTAssociatedTicket", RETIREMENT_NFT_ASSOCIATED_TICKET)
              console.log(`Deployed-address of RetirementNFTAssociatedTicket: ${ RETIREMENT_NFT_ASSOCIATED_TICKET }`)

              await run("fund-link", { contract: retirementNFTAssociatedTicket.address, linkaddress: linkTokenAddress })
          })

          it(`getRetirementNFTAssociatedTicketMetadata() - Should be successful that retrieve a metadata of the RetirementNFTAssociatedTicket specified`, async () => {
              let RetirementNFTAssociatedTicketMetadata: any = await retirementNFTAssociatedTicket.getRetirementNFTAssociatedTicketMetadata(RETIREMENT_NFT)
              console.log(`RetirementNFTAssociatedTicketMetadata retrieved: ${ RetirementNFTAssociatedTicketMetadata }`)
          })

          it(`mint() - Should be successful that a RetirementNFTAssociatedTicket is minted`, async () => {
              const to: string = "0xb794F5eA0ba39494cE839613fffBA74279579268"
              const ticketType: number = 0    // Ticket type 0
              const mintAmount: number = 100  // Number of tickets to be minted (ERC1155)
              const data: string = ""

              let tx: any = await retirementNFTAssociatedTicket.mint(to, ticketType, mintAmount, data)
              let txReceipt: any = await tx.wait()
          })

          it(`mintBatch() - Should be successful that RetirementNFTAssociatedTickets are batch minted`, async () => {
              const to: string = "0xb794F5eA0ba39494cE839613fffBA74279579268"
              const ticketTypes: Array<number> = [0, 1]      // Ticket type 0 and 1
              const mintAmounts: Array<number> = [100, 150]  // Number of tickets to be minted for each ticket types (ERC1155)
              const data: string = ""

              let tx: any = await retirementNFTAssociatedTicket.mintBatch(to, ticketTypes, mintAmounts, data)
              let txReceipt: any = await tx.wait()
          })

      })