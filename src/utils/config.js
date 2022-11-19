function environment(env){
    if(env==="testnet"){
        return {
            networkId:"testnet",
            nodeUrl:"https://rpc.testnet.org",
            contractName:""
        }
    }
}