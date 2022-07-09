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
 * @title - Unit test of the RetirementNFTAssociatedTicketFactory.sol
 */ 
!developmentChains.includes(network.name)
    ? describe.skip
    : describe("RetirementNFTAssociatedTicketFactory Unit Tests", async function () {
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

          let tx: any
          let txReceipt: any

          beforeEach(async () => {
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

              await run("fund-link", { contract: retirementNFTAssociatedTicketFactory.address, linkaddress: linkTokenAddress })
          })

          it(`Should be successful that a new RetirementNFTAssociatedTicket is minted`, async () => {
              //@dev - A new RetirementNFTAssociatedTicket is minted
              const to: string = "0xb794F5eA0ba39494cE839613fffBA74279579268"
              const ticketType: number = 0 
              const mintAmount: number = 100  // Number of tickets to be minted (ERC1155)
              const uri: string = "https://gateway.pinata.cloud/ipfs/QmPK1s3pNYLi9ERiq3BDxKa4XosgWwFRQUydHUtz4YgpqB"
              tx = await retirementNFTAssociatedTicketFactory.mintRetirementNFTAssociatedTicket(to, ticketType, mintAmount, RETIREMENT_NFT, uri)
              txReceipt = await tx.wait()
          })

          it(`Should be successful to retrieve an emitted-event log of "RetirementNFTAssociatedTicketMinted"`, async () => {
              const eventName: string = "RetirementNFTAssociatedTicketMinted"
              let eventLog: any = await getEventLog(txReceipt, eventName)
              console.log(`Emitted-EventLog of "RetirementNFTAssociatedTicketMinted": ${ eventLog }`)

              //@dev - Create a RetirementNFTAssociatedTicket instance by assigning contract address retrieved above
              RETIREMENT_NFT_ASSOCIATED_TICKET = eventLog[0]
              retirementNFTAssociatedTicket = await ethers.getContractAt("RetirementNFTAssociatedTicket", RETIREMENT_NFT_ASSOCIATED_TICKET)
              console.log(`Deployed-address of RetirementNFTAssociatedTicket: ${ RETIREMENT_NFT_ASSOCIATED_TICKET }`)
          })

          it(`getRetirementNFTAssociatedTicketMetadata() - Should be successful that retrieve a metadata of the RetirementNFTAssociatedTicket specified`, async () => {
              let RetirementNFTAssociatedTicketMetadata: any = await retirementNFTAssociatedTicket.getRetirementNFTAssociatedTicketMetadata(RETIREMENT_NFT)
              console.log(`RetirementNFTAssociatedTicketMetadata retrieved: ${ RetirementNFTAssociatedTicketMetadata }`)
          })

      })