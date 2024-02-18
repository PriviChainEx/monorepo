#  PrivchainEx: Redefining the Future of Finance

## Bringing blockchain solutions to Traditional Finance
Our platform facilitates trading between tokenized assets using interoperable private chains with a ZK bridge, paving the way for a new era of secure and efficient financial transactions.

## Demo video:- 
[![IMAGE ALT TEXT HERE](https://github.com/PriviChainEx/.github/assets/101273941/12cd4d1c-e93f-4019-8619-4da0bb2bbfee)](https://www.youtube.com/watch?v=0PkmqRYKp_k)
## Why PrivchainEx?

### Addressing Traditional Finance Drawbacks
While DeFi presents an attractive alternative, it currently only holds around $72 billion in Total Value Locked (TVL), a fraction of traditional finance's trillions. Institutions hesitate to adopt DeFi due to privacy concerns. PrivchainEx addresses this by prioritizing data privacy through zero-knowledge proofs (zkp) and verifiable computation.

### Advantages of Interoperable Private Chains
#### 1. Accelerated Trading:- 
Tokenizing assets enables faster transactions, reducing processing time from days to minutes.

#### 2. Enhanced Privacy: 
Institutions can establish private blockchains inaccessible to unauthorized parties, safeguarding sensitive financial information.

#### 3. Interoperability: 
Our private interoperable framework allows different private chains to seamlessly exchange assets, ensuring liquidity and efficiency.

#### 4. Tailored Solutions: 
Leveraging frameworks like Stackr and DA solutions such as Avail, we customize app-chains for each client, enhancing operational efficiency.

## Link to the Repositories
- [Frontend](https://github.com/PriviChainEx/Frontend)
- [Rollup](https://github.com/PriviChainEx/CentralRegistry_Rollup)
- [Private Chain 1](https://github.com/PriviChainEx/Private_chain1)
- [Private Chain 2](https://github.com/PriviChainEx/Private_chain2)
- [Circuits1](https://github.com/PriviChainEx/Circuit_Sindri1)
- [Circuit2](https://github.com/PriviChainEx/Circuit_Sindri2)

## Architecture
![Untitled-2024-02-17-1704](https://github.com/PriviChainEx/.github/assets/101273941/ccf14db6-5607-4350-bce8-5c490d265769)

The technical architecture of our platform is designed to facilitate secure and efficient trading between institutions like JP Morgan Chase (JPMC) and Goldman Sachs. Each of these entities operates its own private blockchain. Within these private chains, we have integrated Avail for the data availability layer. These private chains are tailored to specific applications and are constructed using Stackr, which also utilizes Avail for data availability.

A central authority is responsible for overseeing and validating the trading process. For example, if JPMC wishes to purchase Apple stocks and Goldman Sachs intends to sell them, both parties generate zero-knowledge proofs (ZK proofs) to authenticate the transaction. These proofs are then submitted to the central authority, whose verifier contract is deployed on Scroll. Utilizing the Sindri API, we provide real-time confirmation in the browser that the transaction has been successfully verified using ZK proofs.

#### Zk Implementation:- 
Both the Seller and Buyer sides have integrated and deployed Zero-Knowledge Proofs and validation contracts on the Scroll platform :- 
- 0xA2776632E9B9555B5aCFcd7e9bb543Aa4bd71ABB
- 0x1e888A5312C5830b1804baf120Fe0b1061cfa287





