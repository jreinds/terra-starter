//Load the correct contract address based on the network

import config from "../refs.terrain.json"

export const contractAddress = (wallet) => config[wallet.network.name].clicker.contractAddresses.default