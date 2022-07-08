import { numToBytes32 } from "@chainlink/test-helpers/dist/src/helpers"
import { assert, expect } from "chai"
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { network, deployments, ethers, run } from "hardhat"
import { developmentChains } from "../../helper-hardhat-config"
import { RetirementNFTAssociatedTicket, RetirementNFTAssociatedTicketFactory, LinkToken, MockOracle } from "../../typechain"

//@dev - Helper of ethers.js for retrieving eventLogs emitted, etc.
import { getEventLog } from "../ethersjs-helper/ethersjsHelper"
//import { convertHexToString, convertStringToHex, toWei, fromWei, getEventLog, getCurrentBlock, getCurrentTimestamp } from "../ethersjs-helper/ethersjsHelper"


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

              //@dev - Mint a new RetirementNFTAssociatedTicket
              const to: string = "0xb794F5eA0ba39494cE839613fffBA74279579268"
              const ticketType: number = 0 
              const mintAmount: number = 100  // Number of tickets to be minted (ERC1155)
              const retirementNFT: string = "0x343c43A37D37dfF08AE8C4A11544c718AbB4fCF8"
              const uri: string = "https://gateway.pinata.cloud/ipfs/QmPK1s3pNYLi9ERiq3BDxKa4XosgWwFRQUydHUtz4YgpqB"
              let tx: any = await retirementNFTAssociatedTicketFactory.mintRetirementNFTAssociatedTicket(to, ticketType, mintAmount, retirementNFT, uri)
              let txReceipt: any = await tx.wait()

              //@dev - Retrieve an eventLog emitted (NOTE: Event name is "RetirementNFTAssociatedTicketMinted")
              const eventName: string = "RetirementNFTAssociatedTicketMinted"
              let eventLog: any = await getEventLog(txReceipt, eventName)
              console.log(`Emitted-EventLog of "RetirementNFTAssociatedTicketMinted": ${ JSON.stringify(eventLog, null, 2) }`)

              //@dev - Create a RetirementNFTAssociatedTicket instance by assigning contract address retrieved above
              const RETIREMENT_NFT_ASSOCIATED_TICKET: string = eventLog[0]
              retirementNFTAssociatedTicket = await ethers.getContractAt("RetirementNFTAssociatedTicket", RETIREMENT_NFT_ASSOCIATED_TICKET)
              console.log(`Deployed-address of RetirementNFTAssociatedTicket: ${ RETIREMENT_NFT_ASSOCIATED_TICKET }`)

              await run("fund-link", { contract: retirementNFTAssociatedTicket.address, linkaddress: linkTokenAddress })
          })


      })