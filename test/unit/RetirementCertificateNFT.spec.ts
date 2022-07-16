import { numToBytes32 } from "@chainlink/test-helpers/dist/src/helpers"
import { assert, expect } from "chai"
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { network, deployments, ethers, run } from "hardhat"
import { developmentChains } from "../../helper-hardhat-config"
import { RetirementCertificateNFT, LinkToken, MockOracle } from "../../typechain"


/**
 * @title - Unit test of the RetirementCertificateNFT.sol
 */ 
!developmentChains.includes(network.name)
    ? describe.skip
    : describe("\n RetirementCertificateNFT Unit Tests", async function () {
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
          let linkToken: LinkToken
          let mockOracle: MockOracle

          //@dev - Variables for assigning deployed-addresses
          let RETIREMENT_CERTIFICATE_NFT: string

          beforeEach(async () => {
              //@dev - Get signers and wallet addresses for this tests 
              [deployer, ticketHolder1, ticketHolder2, ...addrs] = await ethers.getSigners()
              ticketCreator = deployer  // [NOTE]: In this test, a deloyer is also role of a ticket creator
              DEPLOYER = deployer.address
              TICKET_CREATOR = deployer.address
              TICKET_HOLDER_1 = ticketHolder1.address
              TICKET_HOLDER_2 = ticketHolder2.address
              console.log(`\n deployer: ${ DEPLOYER } \n ticketCreator: ${ TICKET_CREATOR } \n ticketHolder1: ${ TICKET_HOLDER_1 } \n ticketHolder2: ${ TICKET_HOLDER_2 } \n`)

              //@dev - This is using "hardhat-deploy" module
              await deployments.fixture(["mocks", "api"])

              linkToken = await ethers.getContract("LinkToken")
              const linkTokenAddress: string = linkToken.address
              retirementCertificateNFT = await ethers.getContract("RetirementCertificateNFT")
              mockOracle = await ethers.getContract("MockOracle")

              await run("fund-link", { contract: retirementCertificateNFT.address, linkaddress: linkTokenAddress })
          })

          it(`Should be successful to mint a RetirementCertificateNFT`, async () => {
              const to: string = TICKET_HOLDER_1
              const tokenId: number = 0
              let tx = await retirementCertificateNFT.connect(deployer).mintNewRetirementCertificateNFT(to, tokenId)
              let txReceipt = await tx.wait()
          })

      })