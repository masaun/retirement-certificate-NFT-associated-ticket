import { numToBytes32 } from "@chainlink/test-helpers/dist/src/helpers"
import { assert, expect } from "chai"
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { network, deployments, ethers, run } from "hardhat"
import { developmentChains } from "../../helper-hardhat-config"
import { RetirementCertificateNFT, RetirementCertificateNFTAssociatedTicket, RetirementCertificateNFTAssociatedTicketFactory, MockRetirementCertificateNFTAssociatedTicketGatedService, LinkToken, MockOracle } from "../../typechain"

//@dev - Helper of ethers.js for retrieving eventLogs emitted, etc.
import { getEventLog } from "../ethersjs-helper/ethersjsHelper"
//import { convertHexToString, convertStringToHex, toWei, fromWei, getEventLog, getCurrentBlock, getCurrentTimestamp } from "../ethersjs-helper/ethersjsHelper"


/**
 * @title - Unit test of the RetirementCertificateNFTAssociatedTicket.sol
 */ 
!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Scenario Tests", async function () {
          //@dev - Signer of wallet addresses
          let deployer: any
          let ticketCreator: any
          let ticketHolder1: any
          let ticketHolder2: any
          let addrs: any

          //@dev - wallet addresses
          let DEPLOYER: string
          let TICKET_CREATOR: string
          let TICKET_HOLDER_1: string
          let TICKET_HOLDER_2: string

          //@dev - Variables for assigning contract instances
          let retirementCertificateNFT: RetirementCertificateNFT
          let retirementCertificateNFTAssociatedTicket: RetirementCertificateNFTAssociatedTicket
          let retirementCertificateNFTAssociatedTicketFactory: RetirementCertificateNFTAssociatedTicketFactory
          let retirementCertificateNFTAssociatedTicketGatedService: MockRetirementCertificateNFTAssociatedTicketGatedService
          let linkToken: LinkToken
          let mockOracle: MockOracle

          //@dev - Variables for assigning deployed-addresses
          let RETIREMENT_CERTIFICATE_NFT: string
          let RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET: string
          let RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET_FACTORY: string
          let RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET_GATED_SERVICE: string

          let tx: any
          let txReceipt: any

          before(async () => {
              //@dev - Get signers and wallet addresses for this tests 
              [deployer, ticketHolder1, ticketHolder2, ...addrs] = await ethers.getSigners()
              ticketCreator = deployer  // [NOTE]: In this test, a deloyer is also role of a ticket creator
              DEPLOYER = deployer.address
              TICKET_CREATOR = deployer.address
              TICKET_HOLDER_1 = ticketHolder1.address
              TICKET_HOLDER_2 = ticketHolder2.address
              console.log(`\n deployer: ${ DEPLOYER } \n ticketCreator: ${ TICKET_CREATOR } \n ticketHolder1: ${ TICKET_HOLDER_1 } \n ticketHolder2: ${ TICKET_HOLDER_2 } \n`)

              //@dev - Using "hardhat-deploy" module
              await deployments.fixture(["mocks", "api"])

              linkToken = await ethers.getContract("LinkToken")
              const linkTokenAddress: string = linkToken.address

              //@dev - Create the contract instance of the RetirementCertificateNFT.sol
              retirementCertificateNFT = await ethers.getContract("RetirementCertificateNFT")
              RETIREMENT_CERTIFICATE_NFT = retirementCertificateNFT.address
              console.log(`##### Deployed-contract address of the RetirementCertificateNFT.sol: ${ RETIREMENT_CERTIFICATE_NFT } ######`)

              //@dev - Create the contract instance of the RetirementCertificateNFTAssociatedTicketFactory.sol
              retirementCertificateNFTAssociatedTicketFactory = await ethers.getContract("RetirementCertificateNFTAssociatedTicketFactory")
              RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET_FACTORY = retirementCertificateNFTAssociatedTicketFactory.address
              console.log(`##### Deployed-contract address of the RetirementCertificateNFTAssociatedTicketFactory.sol: ${ RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET_FACTORY } ######`)

              //@dev - Create the contract instance of the MockRetirementCertificateNFTAssociatedTicketGatedService.sol
              retirementCertificateNFTAssociatedTicketGatedService = await ethers.getContract("MockRetirementCertificateNFTAssociatedTicketGatedService")
              RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET_GATED_SERVICE = retirementCertificateNFTAssociatedTicketGatedService.address
              console.log(`##### Deployed-contract address of the MockRetirementCertificateNFTAssociatedTicketGatedService.sol: ${ RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET_GATED_SERVICE } ######`)

              await run("fund-link", { contract: retirementCertificateNFTAssociatedTicketFactory.address, linkaddress: linkTokenAddress })
          })

          it(`Should be successful to mint a RetirementCertificateNFT`, async () => {
              const to: string = TICKET_HOLDER_1
              const tokenId: number = 0
              retirementCertificateNFT.connect(deployer).mintNewRetirementCertificateNFT(to, tokenId)
          })

          it(`Should be successful that a new RetirementCertificateNFTAssociatedTicket is created`, async () => {
              //@dev - A new RetirementCertificateNFTAssociatedTicket is minted
              const to: string = TICKET_HOLDER_1
              const ticketType: number = 0 
              const mintAmount: number = 100  // Number of tickets to be minted (ERC1155)
              const uri: string = "https://gateway.pinata.cloud/ipfs/QmPK1s3pNYLi9ERiq3BDxKa4XosgWwFRQUydHUtz4YgpqB"
              tx = await retirementCertificateNFTAssociatedTicketFactory.connect(ticketCreator).createRetirementCertificateNFTAssociatedTicket(to, ticketType, mintAmount, RETIREMENT_CERTIFICATE_NFT, uri)
              txReceipt = await tx.wait()
          })

          it(`Should be successful to retrieve an emitted-event log of "RetirementCertificateNFTAssociatedTicketCreated"`, async () => {
              const eventName: string = "RetirementCertificateNFTAssociatedTicketCreated"
              let eventLog: any = await getEventLog(txReceipt, eventName)
              console.log(`Emitted-EventLog of "RetirementCertificateNFTAssociatedTicketCreated": ${ eventLog }`)

              //@dev - Create a RetirementCertificateNFTAssociatedTicket instance by assigning contract address retrieved above
              RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET = eventLog[0]
              retirementCertificateNFTAssociatedTicket = await ethers.getContractAt("RetirementCertificateNFTAssociatedTicket", RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET)
              console.log(`Deployed-address of RetirementCertificateNFTAssociatedTicket: ${ RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET }`)
          })

          it(`getRetirementCertificateNFTAssociatedTicketMetadata() - Should be successful that retrieve a metadata of the RetirementCertificateNFTAssociatedTicket specified`, async () => {
              let retirementCertificateNFTAssociatedTicketMetadata: any = await retirementCertificateNFTAssociatedTicket.getRetirementCertificateNFTAssociatedTicketMetadata(RETIREMENT_CERTIFICATE_NFT)
              console.log(`RetirementCertificateNFTAssociatedTicketMetadata retrieved: ${ retirementCertificateNFTAssociatedTicketMetadata }`)
          })

          it(`mint() - Should be successful that a RetirementCertificateNFTAssociatedTicket is minted`, async () => {
              const to: string = TICKET_HOLDER_1
              const ticketType: number = 0    // Ticket type 0
              const mintAmount: number = 100  // Number of tickets to be minted (ERC1155)

              let tx: any = await retirementCertificateNFTAssociatedTicket.connect(ticketCreator).mint(to, ticketType, mintAmount)
              let txReceipt: any = await tx.wait()
          })

          it(`retirementCertificateNFTAssociatedTicketBalanceOf() - Wallet address of "TICKET_HOLDER_1" should has 1 RetirementCertificateNFTAssociatedTicket of ticket type 1`, async () => {
              const walletAddress: string = TICKET_HOLDER_1
              const ticketType: number = 0    // Ticket type 0

              let numberOfRetirementCertificateNFTAssociatedTickets: BigNumber = await retirementCertificateNFTAssociatedTicket.retirementCertificateNFTAssociatedTicketBalanceOf(walletAddress, ticketType)
              console.log(`Number of RetirementCertificateNFTAssociatedTickets: ${ numberOfRetirementCertificateNFTAssociatedTickets }`)
          })

          it(`mintBatch() - Should be successful that RetirementCertificateNFTAssociatedTickets are batch minted`, async () => {
              const to: string = TICKET_HOLDER_1
              const ticketTypes: Array<number> = [1, 2, 3]        // Ticket type 0 and 1 and 2
              const mintAmounts: Array<number> = [100, 150, 200]  // Number of tickets to be minted for each ticket types (ERC1155)

              let tx: any = await retirementCertificateNFTAssociatedTicket.connect(ticketCreator).mintBatch(to, ticketTypes, mintAmounts)
              let txReceipt: any = await tx.wait()
          })

          it(`retirementCertificateNFTAssociatedTicketBalanceOfBatch() - Wallet address of "TICKET_HOLDER_1" should has each 1 RetirementCertificateNFTAssociatedTicket of each ticket type 1, 2, 3`, async () => {
              const walletAddresses: Array<string> = [TICKET_HOLDER_1, TICKET_HOLDER_1, TICKET_HOLDER_1]
              const ticketTypes: Array<number> = [1, 2, 3]    // Ticket type 1 and 2 and 3

              let numberOfEachRetirementCertificateNFTAssociatedTickets: Array<BigNumber> = await retirementCertificateNFTAssociatedTicket.retirementCertificateNFTAssociatedTicketBalanceOfBatch(walletAddresses, ticketTypes)
              console.log(`Number of each RetirementCertificateNFTAssociatedTickets: ${ numberOfEachRetirementCertificateNFTAssociatedTickets }`)
          })

          it(`accessSpecialContent() - Should be successful to access a special content that only only a Retirement NFT Associated Ticket holder can access.`, async () => {
              //[TODO]: 
              const ticketType: number = 0

              let tx: any = await retirementCertificateNFTAssociatedTicketGatedService.connect(ticketHolder1).accessSpecialContent(RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET, ticketType)
              let txReceipt = await tx.wait() 
          })

      })