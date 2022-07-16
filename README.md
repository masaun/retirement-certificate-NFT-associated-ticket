# Retirement Certificate NFT-associated Ticket 🎫
### Overview
- This is the smart contract that associate Retirement Certificate NFTs with special tickets that includes special privilege as `"Retirement Certificate NFT-associated Ticket"`
  - ERC-1155 type of NFT is used for this Retirement Certificate NFT-associated Ticket.

  - This ticket is in order to incentivize people who try to offset carbons as individual climate action and increase these people in the Voluntary Carbon Market (VCM).
    - For example of individual climate action, people calculate carbon that they are emitted when they travel to foreign countries and they try to offset its carbon calculated with $BCT tokens on Toucan Protocol.
      https://medium.com/@ToucanProtocol/how-to-retire-nature-based-carbon-credits-with-toucan-7f69d4474a8a

  - Retirement Certificate NFT are minted via existing ReFi protocols such as Toucan Protocol when user offset carbon with carbon reference tokens (eg. $BCT Token of Toncan Protocol).  
    - An example of Retirement Certificate NFT (=ERC-721) that is minted via Toucan Protocol: https://polygonscan.com/token/0x5e377f16e4ec6001652befd737341a28889af002 
    - NOTE: This time, I use mock of Retirement Certificate NFT instead of Toucan Protocol's one above because of limitation of time to implement this smart contract. Ideally, Retirement Certificate NFT on ReFi protocols (such as Toucan Protocol) is better in the future. 

<br>

- Random Number generated via Chainlink VRF is associated with each Retirement Certificate NFT-associated Tickets as kind of serial number of tickets in order to avoid that fraud tickets are used in secondry market. (It's also in order to prevent being manipulated by any single entity including oracle operators, miners, users, or smart contract developers)
  - Random Number is called via Chainlink VRF and saved as a metadata in the RetirementCertificateNFTAssociatedTicket.sol

<br>

- Retirement Certificate NFT-associated Ticket holders are able to access special contents, events, etc as privilege. (This is like `"Retirement NFT-associated Ticket-gated access"` )
  - In this repo, `"Retirement NFT-associated Ticket-gated access"` is tested by using `accessSpecialContent()` method defined in the mock of RetirementCertificateNFTAssociatedTicketGatedService contract. 
    https://github.com/masaun/retirement-certificate-NFT-associated-ticket/blob/main/contracts/mock/MockRetirementNFTAssociatedTicketGatedService.sol#L35-L37

<br>

### Use case of Retirement Certificate NFT-associated Ticket
- Ticket sales of professional sports teams
  - Retirement Certificate NFT-associated Ticket gated access 
    - eg). Only Retirement Certificate NFT-associated Ticket holders can access special space or events in their home stadium.

<br>

- Ticket sales of music concerts
  - Retirement Certificate NFT-associated Ticket gated access
    - eg). Only Retirement Certificate NFT-associated Ticket holders can access special space or events in their music concert hall.

<br>

### Workflow
- Diagram of workflow
  ![diagram_retirement-certificate-NFT-associated-ticket](https://user-images.githubusercontent.com/19357502/178716431-e1281060-87f3-492c-87d3-14d450b4c3fe.jpeg)

<br>

### Test
- Scenario test
```
yarn test-scenario:retirement-certificate-NFT-associated-ticket
```

<br>

- Unit test
```
yarn test-unit:retirement-certificate-NFT-associated-ticket
```

<br/>

### Deployment files (for using `hardhat-deploy` module)
- https://github.com/masaun/retirement-certificate-NFT-associated-ticket/tree/main/deploy

<br>

### Technical Stack
- Solidity
- ethers.js (v5)
- Hardhat
  - Modules:
    - hardhat-deploy, etc
- TypeChain

<br>

### References
- Chainlink:
  - Chainlink Documentation: https://docs.chain.link/
    - Chainlink VRF: https://docs.chain.link/docs/chainlink-vrf/ 
  - Chainlink prize in the Sustainable Blockchain Hackathon. (Best Use Of Chainlink In A Sustainability Project)
  https://gitcoin.co/issue/29019

<br>

- Toucan Protocol:  
  - Retirement on Verra: https://docs.toucan.earth/protocol/bridge/carbon-bridge/retire-on-verra
  - Workflow of Carbon Pools: https://docs.toucan.earth/protocol/pool/key-concepts  
  - How to retire nature-based carbon credits with Toucan  
    https://medium.com/@ToucanProtocol/how-to-retire-nature-based-carbon-credits-with-toucan-7f69d4474a8a
  - Example of Carbon Retirement Certificate (for ETH Amsterdam)  
    https://medium.com/@ToucanProtocol/toucan-offset-ethamsterdam-emissions-506df8223c84  
    https://blog.toucan.earth/content/files/2022/05/Certificate_ETHAms_220429-1400.pdf  

<br>

- KlimaDAO  
  - The offsetting page (as retirement aggregator): https://app.klimadao.finance/#/offset  
  - Retirement Aggregator Contracts: https://docs.klimadao.finance/references/developers/retirement-aggregator-contracts  
  - Polygon goes carbon neutral via KlimaDAO - The Green Manifesto in action: https://www.klimadao.finance/blog/  polygon-goes-carbon-neutral-via-klimadao
  - Mark Cuban is placing $150K of carbon offsets on the blockchain every month: https://www.banklesstimes.com/news/2021/11/16/mark-cuban-is-placing-150k-of-carbon-offsets-on-the-blockchain-every-month/

<br>

- Mark Cuban says he is locking $50K in tokenized carbon offsets every 10 days
  https://cointelegraph.com/news/mark-cuban-says-he-is-locking-50k-in-tokenized-carbon-offsets-every-10-days

- The Voluntary Carbon Market (VCM)
  https://docs.toucan.earth/protocol/introduction/carbon-markets