import { numToBytes32 } from "@chainlink/test-helpers/dist/src/helpers"
import { assert, expect } from "chai"
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { network, deployments, ethers, run } from "hardhat"
import { developmentChains } from "../../helper-hardhat-config"
import { RetirementNFT, RetirementNFTAssociatedTicket, RetirementNFTAssociatedTicketFactory, MockRetirementNFTAssociatedTicketGatedService, LinkToken, MockOracle } from "../../typechain"

//@dev - Helper of ethers.js for retrieving eventLogs emitted, etc.
import { getEventLog } from "../ethersjs-helper/ethersjsHelper"
//import { convertHexToString, convertStringToHex, toWei, fromWei, getEventLog, getCurrentBlock, getCurrentTimestamp } from "../ethersjs-helper/ethersjsHelper"


/**
 * @title - Unit test of the RetirementNFTAssociatedTicket.sol
 */ 
!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Scenario Tests", async function () {
          //@dev - Variables for assigning contract instances
          let retirementNFT: RetirementNFT
          let retirementNFTAssociatedTicket: RetirementNFTAssociatedTicket
          let retirementNFTAssociatedTicketFactory: RetirementNFTAssociatedTicketFactory
          let retirementNFTAssociatedTicketGatedService: MockRetirementNFTAssociatedTicketGatedService
          let linkToken: LinkToken
          let mockOracle: MockOracle

          //@dev - Variables for assigning deployed-addresses
          let RETIREMENT_NFT: string
          let RETIREMENT_NFT_ASSOCIATED_TICKET: string
          let RETIREMENT_NFT_ASSOCIATED_TICKET_FACTORY: string
          let RETIREMENT_NFT_ASSOCIATED_TICKET_GATED_SERVICE: string

          let tx: any
          let txReceipt: any

          before(async () => {
              await deployments.fixture(["mocks", "api"])
              linkToken = await ethers.getContract("LinkToken")
              const linkTokenAddress: string = linkToken.address

              //@dev - Create the contract instance of the RetirementNFT.sol
              retirementNFT = await ethers.getContract("RetirementNFT")
              RETIREMENT_NFT = retirementNFT.address
              console.log(`##### Deployed-contract address of the RetirementNFT.sol: ${ RETIREMENT_NFT } ######`)

              //@dev - Create the contract instance of the RetirementNFTAssociatedTicketFactory.sol
              retirementNFTAssociatedTicketFactory = await ethers.getContract("RetirementNFTAssociatedTicketFactory")
              RETIREMENT_NFT_ASSOCIATED_TICKET_FACTORY = retirementNFTAssociatedTicketFactory.address
              console.log(`##### Deployed-contract address of the RetirementNFTAssociatedTicketFactory.sol: ${ RETIREMENT_NFT_ASSOCIATED_TICKET_FACTORY } ######`)

              //@dev - Create the contract instance of the MockRetirementNFTAssociatedTicketGatedService.sol
              retirementNFTAssociatedTicketGatedService = await ethers.getContract("MockRetirementNFTAssociatedTicketGatedService")
              RETIREMENT_NFT_ASSOCIATED_TICKET_GATED_SERVICE = retirementNFTAssociatedTicketGatedService.address
              console.log(`##### Deployed-contract address of the MockRetirementNFTAssociatedTicketGatedService.sol: ${ RETIREMENT_NFT_ASSOCIATED_TICKET_GATED_SERVICE } ######`)

              await run("fund-link", { contract: retirementNFTAssociatedTicketFactory.address, linkaddress: linkTokenAddress })
          })

          it(`Should be successful that a new RetirementNFTAssociatedTicket is created`, async () => {
              //@dev - A new RetirementNFTAssociatedTicket is minted
              const to: string = "0xb794F5eA0ba39494cE839613fffBA74279579268"
              const ticketType: number = 0 
              const mintAmount: number = 100  // Number of tickets to be minted (ERC1155)
              const uri: string = "https://gateway.pinata.cloud/ipfs/QmPK1s3pNYLi9ERiq3BDxKa4XosgWwFRQUydHUtz4YgpqB"
              tx = await retirementNFTAssociatedTicketFactory.createRetirementNFTAssociatedTicket(to, ticketType, mintAmount, RETIREMENT_NFT, uri)
              txReceipt = await tx.wait()
          })

          it(`Should be successful to retrieve an emitted-event log of "RetirementNFTAssociatedTicketCreated"`, async () => {
              const eventName: string = "RetirementNFTAssociatedTicketCreated"
              let eventLog: any = await getEventLog(txReceipt, eventName)
              console.log(`Emitted-EventLog of "RetirementNFTAssociatedTicketCreated": ${ eventLog }`)

              //@dev - Create a RetirementNFTAssociatedTicket instance by assigning contract address retrieved above
              RETIREMENT_NFT_ASSOCIATED_TICKET = eventLog[0]
              retirementNFTAssociatedTicket = await ethers.getContractAt("RetirementNFTAssociatedTicket", RETIREMENT_NFT_ASSOCIATED_TICKET)
              console.log(`Deployed-address of RetirementNFTAssociatedTicket: ${ RETIREMENT_NFT_ASSOCIATED_TICKET }`)
          })

          it(`getRetirementNFTAssociatedTicketMetadata() - Should be successful that retrieve a metadata of the RetirementNFTAssociatedTicket specified`, async () => {
              let RetirementNFTAssociatedTicketMetadata: any = await retirementNFTAssociatedTicket.getRetirementNFTAssociatedTicketMetadata(RETIREMENT_NFT)
              console.log(`RetirementNFTAssociatedTicketMetadata retrieved: ${ RetirementNFTAssociatedTicketMetadata }`)
          })

          it(`mint() - Should be successful that a RetirementNFTAssociatedTicket is minted`, async () => {
              const to: string = "0xb794F5eA0ba39494cE839613fffBA74279579268"
              const ticketType: number = 0    // Ticket type 0
              const mintAmount: number = 100  // Number of tickets to be minted (ERC1155)

              let tx: any = await retirementNFTAssociatedTicket.mint(to, ticketType, mintAmount)
              let txReceipt: any = await tx.wait()
          })

          it(`mintBatch() - Should be successful that RetirementNFTAssociatedTickets are batch minted`, async () => {
              const to: string = "0xb794F5eA0ba39494cE839613fffBA74279579268"
              const ticketTypes: Array<number> = [0, 1, 2]        // Ticket type 0 and 1 and 2
              const mintAmounts: Array<number> = [100, 150, 200]  // Number of tickets to be minted for each ticket types (ERC1155)

              let tx: any = await retirementNFTAssociatedTicket.mintBatch(to, ticketTypes, mintAmounts)
              let txReceipt: any = await tx.wait()
          })

          

      })