const networkConfig = {
  5611: {
    name: "opbnb",
    // Deploy Operator contract parameters
    owner: "0x72Cd49C4434b583a5f09d10FCe91443554706316",

    // linkToken address
    linkToken: "0x9F9C503c6e1889C9c0bCAed75ED0a5F68828EE9A",

    // Oracle contract address
    oracle: "0xB27A3b7272c1b7c6f195e3066c144B18a33ce522",

    // Serverless Oracle contract address
    ZtControl: "0xd72E21A51594f1Cacf5F1231bA432c392323Fd8c",
    mesh: "0x73Cb12189FCAcDE3d742E2ad0ABD2068011F56Ac",
    cod: "0x0A873038d29bf16871232f59D589deA2B849C846",
    // Container contract
    pod: "0x139E7c9ADfee9682E7997eb736F48f98B8821774",
    deployment: "0x139E7c9ADfee9682E7997eb736F48f98B8821774",
    cluster: "0xcfB3900Aa34b1584229fb06f405D7691910d1980",
    node: "0x962E121f6067B0dA6F90D07d565ba21004922B9d",
    // ApiMarket
    STCMarket: "0xBd0F68775aA77288Ea2083D7d7776D2D0C3bf0Ee",
    STCMarketToken: "0x5d3c43875589f4881E769f4b46cFf6257dC5Ad1C",

    //Serverless Site Info
    sitename: "gw105",
    sitehost: "http://192.168.103.113:4441",
    ztMeshJob: "84981edb58a2455aade2e9d797ae86f1",
    codjob: "3c09c86cffbd4563a3c0b2b97f411aec",
    deploymentJobId: "d61b61a4e6684116be70d6ec6e58b52e",
    podJobId: "c1efad95d1b34cc9b3e2ee06802a2a6d",
    nodeJobId: "aa7198c0190f4cc29d4e4470c08f6391",

    // Parameters for calling the setAuthorizedSenders method in the Operator contract
    authorizedSenders: "0x609d4643c8eaFC079B74d524d7e942D088d47fD6",

    fee: "0.1",
    fundAmount: "100", // 100
    automationUpdateInterval: "30"
  }
};
const developmentChains = ["hardhat", "localhost"];
const VERIFICATION_BLOCK_CONFIRMATIONS = 6;

module.exports = {
  networkConfig,
  developmentChains,
  VERIFICATION_BLOCK_CONFIRMATIONS
};
