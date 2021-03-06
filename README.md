# SmartContracts
This repository is a skeleton for the development of smart contracts. It contains some tools like linting, testing,
code coverage, and more.

## Linting
This repo is setup with auto lint pre-commit hook. It can also be run manually using:
`npm run linter`


## Tests
Tests can be run using:
`npm test`


## code coverage
Coverage report can be generated by running:
`npm run coverage`

### codecov configurations
use the .codecov.yml to configure codecov for your repo
set the token `CODECOV_TOKEN` in your forked repo settings.
`https://docs.codecov.com/docs`
## Local deployment

In order to deploy this code first run
`npm i`

to install dependencies
### compile and deploy
1. `npm run compile`
2. `npx hardhat node`
3. In a new terminal `npm run localDeploy`

## Deploy to testnet or mainnet

1. `npm run compile`
2. `npx hardhat run --network $network scripts/factory-deploy.js`