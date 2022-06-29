/* eslint-disable no-process-exit */
// yarn hardhat node
// yarn hardhat run scripts/readPrice.ts --network localhost
import { ethers } from "hardhat"
import { BigNumber } from "ethers"
import { PriceConsumerV3 } from "../typechain"

let priceConsumerV3: PriceConsumerV3
let PRICE_CONSUMER_V3: string


async function readPrice(): Promise<void> {
    //const priceConsumerV3: PriceConsumerV3 = await ethers.getContract("PriceConsumerV3")

    PRICE_CONSUMER_V3 = "0x2a8449b788a8f5EB07f348927210771a50f4840a"  // Deployed-address on Kovan
    priceConsumerV3 = await ethers.getContractAt("PriceConsumerV3", PRICE_CONSUMER_V3)
    console.log("Deployed-address of the PriceConsumerV3.sol on Kovan", priceConsumerV3.address) 

    const price: BigNumber = await priceConsumerV3.getLatestPrice()
    console.log(`Price retrieved via Chainlink: ${ price.toString()}`)  // eg). result: 113117000000 
}

readPrice()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
