import { numToBytes32 } from "@chainlink/test-helpers/dist/src/helpers"
import { assert, expect } from "chai"
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { network, deployments, ethers, run } from "hardhat"
import { developmentChains } from "../../helper-hardhat-config"
import { RetirementCertificateNFT, RetirementCertificateNFTAssociatedTicket, RetirementCertificateNFTAssociatedTicketFactory, TicketManager, TicketManagerFactory,MockRetirementCertificateNFTAssociatedTicketGatedService, LinkToken, MockOracle, RandomNumberGeneratorV2, VRFCoordinatorV2Mock } from "../../typechain"

//@dev - Helper of ethers.js for retrieving eventLogs emitted, etc.
import { getEventLog } from "../ethersjs-helper/ethersjsHelper"
import { toWei } from "../ethersjs-helper/ethersjsHelper"
import { fromWei } from "../ethersjs-helper/ethersjsHelper"
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
          let ticketManager: TicketManager
          let ticketManagerFactory: TicketManagerFactory
          let retirementCertificateNFTAssociatedTicketGatedService: MockRetirementCertificateNFTAssociatedTicketGatedService          
          let linkToken: LinkToken
          let mockOracle: MockOracle
          let randomNumberGeneratorV2: RandomNumberGeneratorV2
          let vrfCoordinatorV2Mock: VRFCoordinatorV2Mock

          //@dev - Variables for assigning deployed-addresses
          let RETIREMENT_CERTIFICATE_NFT: string
          let RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET: string
          let RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET_FACTORY: string
          let TICKET_MANAGER: string
          let TICKET_MANAGER_FACTORY: string
          let RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET_GATED_SERVICE: string
          let RANDOM_NUMBER_GENERATOR_V2: string
          let VRF_COORDINATOR_V2_MOCK: string

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

              randomNumberGeneratorV2 = await ethers.getContract("RandomNumberGeneratorV2")
              RANDOM_NUMBER_GENERATOR_V2 = randomNumberGeneratorV2.address
              console.log(`\n##### Deployed-contract address of the RandomNumberGeneratorV2.sol: ${ RANDOM_NUMBER_GENERATOR_V2 } ######`)

              vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
              VRF_COORDINATOR_V2_MOCK = vrfCoordinatorV2Mock.address
              console.log(`\n##### Deployed-contract address of the VRFCoordinatorV2Mock.sol: ${ VRF_COORDINATOR_V2_MOCK } ######`)

              //@dev - Create the contract instance of the TicketManagerFactory.sol
              ticketManagerFactory = await ethers.getContract("TicketManagerFactory")
              TICKET_MANAGER_FACTORY = ticketManagerFactory.address
              console.log(`\n##### Deployed-contract address of the TicketManagerFactory.sol: ${ TICKET_MANAGER_FACTORY } ######`)

              //@dev - Create the contract instance of the RetirementCertificateNFTAssociatedTicketFactory.sol
              retirementCertificateNFTAssociatedTicketFactory = await ethers.getContract("RetirementCertificateNFTAssociatedTicketFactory")
              RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET_FACTORY = retirementCertificateNFTAssociatedTicketFactory.address
              console.log(`##### Deployed-contract address of the RetirementCertificateNFTAssociatedTicketFactory.sol: ${ RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET_FACTORY } ######`)

              //@dev - Create the contract instance of the RetirementCertificateNFT.sol
              retirementCertificateNFT = await ethers.getContract("RetirementCertificateNFT")
              RETIREMENT_CERTIFICATE_NFT = retirementCertificateNFT.address
              console.log(`\n##### Deployed-contract address of the RetirementCertificateNFT.sol: ${ RETIREMENT_CERTIFICATE_NFT } ######`)

              //@dev - Create the contract instance of the MockRetirementCertificateNFTAssociatedTicketGatedService.sol
              retirementCertificateNFTAssociatedTicketGatedService = await ethers.getContract("MockRetirementCertificateNFTAssociatedTicketGatedService")
              RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET_GATED_SERVICE = retirementCertificateNFTAssociatedTicketGatedService.address
              console.log(`##### Deployed-contract address of the MockRetirementCertificateNFTAssociatedTicketGatedService.sol: ${ RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET_GATED_SERVICE } ###### \n`)
          })

          it(`Should be successful to mint a RetirementCertificateNFT to user1 (after this part, use1 will become RetirementCertificateNFT_holder_1)`, async () => {
              const to: string = TICKET_HOLDER_1
              const tokenId: number = 0
              retirementCertificateNFT.connect(deployer).mintNewRetirementCertificateNFT(to, tokenId)
          })

          it(`Should be successful that 1 LINK Token is funded into the RetirementCertificateNFTAssociatedTicketFactory.sol in order to call Chainlink VRF for generating random number and retrieve it`, async () => {
              const linkTokenAddress: string = linkToken.address
              await run("fund-link", { contract: retirementCertificateNFTAssociatedTicketFactory.address, linkaddress: linkTokenAddress })
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
              console.log(`\n Emitted-EventLog of "RetirementCertificateNFTAssociatedTicketCreated": ${ eventLog }`)

              //@dev - Create a RetirementCertificateNFTAssociatedTicket instance by assigning contract address retrieved above
              RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET = eventLog[0]
              retirementCertificateNFTAssociatedTicket = await ethers.getContractAt("RetirementCertificateNFTAssociatedTicket", RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET)
              console.log(`\n Deployed-address of RetirementCertificateNFTAssociatedTicket: ${ RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET }`)

              //@dev - TicketManager contract instance (deployed-address) by assigning contract address retrieved above
              TICKET_MANAGER = eventLog[6]
              console.log(`\n Deployed-address of TicketManager: ${ TICKET_MANAGER }`)
              ticketManager = await ethers.getContractAt("TicketManager", TICKET_MANAGER)
          })

          // it(`Should be successful to retrieve an emitted-event log of "TicketManagerCreated"`, async () => {
          //     const eventName: string = "TicketManagerCreated"
          //     let eventLog: any = await getEventLog(txReceipt, eventName)
          //     console.log(`\n Emitted-EventLog of "TicketManagerCreated": ${ eventLog }`)

          //     //@dev - Create a TicketManager contract instance by assigning contract address retrieved above
          //     TICKET_MANAGER = eventLog[0]
          //     ticketManager = await ethers.getContractAt("TicketManager", TICKET_MANAGER)
          //     console.log(`\n Deployed-address of TicketManager contract: ${ TICKET_MANAGER }`)
          // })

          it(`getRetirementCertificateNFTAssociatedTicketMetadata() - Should be successful that retrieve a metadata of the RetirementCertificateNFTAssociatedTicket specified`, async () => {
              let retirementCertificateNFTAssociatedTicketMetadata: any = await retirementCertificateNFTAssociatedTicket.getRetirementCertificateNFTAssociatedTicketMetadata(RETIREMENT_CERTIFICATE_NFT)
              console.log(`\n RetirementCertificateNFTAssociatedTicketMetadata retrieved: ${ retirementCertificateNFTAssociatedTicketMetadata }`)
          })



          ///------------------------------------------------------------------------------------------
          /// mint() method - Mint a single type of RetirementCertificateNFTAssociatedTickets
          ///------------------------------------------------------------------------------------------

          it(`\n mint() - Should be successful that 100 RetirementCertificateNFTAssociatedTickets are minted to the TicketManager contract. [NOTE]: This tickets minted are signle type of ticket`, async () => {
              const to: string = TICKET_MANAGER
              //const to: string = TICKET_HOLDER_1
              const ticketType: number = 0    // Ticket type 0
              const mintAmount: number = 100  // Number of tickets to be minted (ERC1155)

              let tx: any = await retirementCertificateNFTAssociatedTicket.connect(ticketCreator).mint(to, ticketType, mintAmount)
              let txReceipt: any = await tx.wait()
          })

          it(`retirementCertificateNFTAssociatedTicketBalanceOf() - TicketManager contract should has 100 RetirementCertificateNFTAssociatedTickets of ticket type 1`, async () => {
              const walletAddress: string = TICKET_MANAGER
              const ticketType: number = 0    // Ticket type 0

              let numberOfRetirementCertificateNFTAssociatedTickets: BigNumber = await retirementCertificateNFTAssociatedTicket.retirementCertificateNFTAssociatedTicketBalanceOf(walletAddress, ticketType)
              console.log(`\n Number of RetirementCertificateNFTAssociatedTickets in the TicketManager contract: ${ numberOfRetirementCertificateNFTAssociatedTickets }`)
          })

          it(`claimRetirementCertificateNFTAssociatedTicket() - Should be successful that RetirementCertificateNFT holder 1 claim a single type of RetirementCertificateNFTAssociatedTicket`, async () => {
              const tokenIdOfRetirementCertificateNFT: number = 0
              const ticketType: number = 0
              let tx: any = await ticketManager.connect(ticketHolder1).claimRetirementCertificateNFTAssociatedTicket(RETIREMENT_CERTIFICATE_NFT, tokenIdOfRetirementCertificateNFT, ticketType)
              let txReceipt: any = await tx.wait()
          })

          it(`A RetirementCertificateNFT holder who are claimed should received 1 RetirementCertificateNFTAssociatedTicket`, async () => {
              const walletAddress: string = TICKET_HOLDER_1
              const ticketType: number = 0    // Ticket type 0

              let numberOfRetirementCertificateNFTAssociatedTickets: BigNumber = await retirementCertificateNFTAssociatedTicket.retirementCertificateNFTAssociatedTicketBalanceOf(walletAddress, ticketType)
              console.log(`\n Number of RetirementCertificateNFTAssociatedTickets in the wallet of RetirementCertificateNFT_holder_1 who has already claimed: ${ numberOfRetirementCertificateNFTAssociatedTickets }`)
          })



          ///------------------------------------------------------------------------------------------
          /// mint() method - Mint multi-type of RetirementCertificateNFTAssociatedTickets
          ///------------------------------------------------------------------------------------------

          it(`Should be successful to mint 3 RetirementCertificateNFTs to user2 (after this part, use2 will become RetirementCertificateNFT_holder_2)`, async () => {
              const to: string = TICKET_HOLDER_2
              const tokenId_1: number = 1
              retirementCertificateNFT.connect(deployer).mintNewRetirementCertificateNFT(to, tokenId_1)

              const tokenId_2: number = 2
              retirementCertificateNFT.connect(deployer).mintNewRetirementCertificateNFT(to, tokenId_2)

              const tokenId_3: number = 3
              retirementCertificateNFT.connect(deployer).mintNewRetirementCertificateNFT(to, tokenId_3)
          })

          it(`mintBatch() - Should be successful that RetirementCertificateNFTAssociatedTickets are batch minted. [NOTE]: This tickets minted are multi-type of ticket`, async () => {
              const to: string = TICKET_MANAGER
              const ticketTypes: Array<number> = [0, 1, 2]        // Ticket type 0 and 1 and 2
              const mintAmounts: Array<number> = [100, 150, 200]  // Number of tickets to be minted for each ticket types (ERC1155)

              let tx: any = await retirementCertificateNFTAssociatedTicket.connect(ticketCreator).mintBatch(to, ticketTypes, mintAmounts)
              let txReceipt: any = await tx.wait()
          })

          it(`claimBatchRetirementCertificateNFTAssociatedTicket() - Should be successful that RetirementCertificateNFT_holder_2 claim multi-type of RetirementCertificateNFTAssociatedTicket`, async () => {
              const tokenIdOfRetirementCertificateNFTs: Array<number> = [1, 2, 3]
              const ticketTypes: Array<number> = [0, 1, 2]      // Ticket type 0 and 1 and 2
              const numberOfTickets: Array<number> = [1, 1, 1]  

              let tx: any = await ticketManager.connect(ticketHolder2).claimBatchRetirementCertificateNFTAssociatedTicket(RETIREMENT_CERTIFICATE_NFT, tokenIdOfRetirementCertificateNFTs, ticketTypes, numberOfTickets)
              let txReceipt: any = await tx.wait()
          })

          // it(`balance() - Wallet address of "TICKET_HOLDER_1" should has each 1 RetirementCertificateNFTAssociatedTicket of each ticket type 1, 2, 3`, async () => {
          //     const walletAddresses: Array<string> = [TICKET_HOLDER_2, TICKET_HOLDER_2, TICKET_HOLDER_2]
          //     const ticketTypes: Array<number> = [0, 1, 2]      // Ticket type 0 and 1 and 2
          //     const numberOfTickets: Array<number> = [1, 1, 1]  // 

          //     let numberOfEachRetirementCertificateNFTAssociatedTickets: Array<BigNumber> = await retirementCertificateNFTAssociatedTicket.connect(ticketHolder2).claimBatchRetirementCertificateNFTAssociatedTicket(RETIREMENT_CERTIFICATE_NFT, tokenIdOfRetirementCertificateNFT, ticketTypes)
          //     console.log(`\n Number of each RetirementCertificateNFTAssociatedTickets (that are batch minted): ${ numberOfEachRetirementCertificateNFTAssociatedTickets }`)
          // })



          ///------------------------------------------------------------------------------------------
          /// Test of a RetirementCertificateNFT-Associated Ticket gated access
          ///------------------------------------------------------------------------------------------

          it(`\n accessSpecialContent() - Should be successful to access a special content that only a RetirementCertificateNFT-Associated Ticket holder can access.`, async () => {
              const ticketType: number = 0

              let tx: any = await retirementCertificateNFTAssociatedTicketGatedService.connect(ticketHolder1).accessSpecialContent(RETIREMENT_CERTIFICATE_NFT_ASSOCIATED_TICKET, ticketType)
              let txReceipt = await tx.wait() 
          })

      })