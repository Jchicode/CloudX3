// 合约相关的配置

type ChainName = "Optimism Goerli Testnet" | "Sepolia" | "opBNB Testnet";

export type Chain = {
  chainId: string;
  chainName: ChainName;

  chainlistUrl?: string;
  nativeCurrency?: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls?: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[];

  oracle: string;

  podContract: string; // 新建 pod
  podJobId: string;

  deploymentContract: string; // 新建 deployment
  deploymentJobId: string;

  nodeContract: string; // 新建 node
  nodeJobId: string;
  nodeOracle: string;

  zeroTrustContract: string; //  mesh 菜单中的切换网络状态和证书监听状态
  meshContract: string; // 服务熔断限流
  codContract: string; // 函数运算

  stcMarketContract: string;
  stcMarketTokenContract: string;

  userHubContract: string;
};

const chains: Chain[] = [
  {
    chainId: "0x15eb",
    chainName: "opBNB Testnet",
    // chainlistUrl: "https://chainlist.org/chain/420",
    nativeCurrency: {
      name: "tBNB",
      symbol: "tBNB",
      decimals: 18
    },
    rpcUrls: ["https://opbnb-testnet-rpc.bnbchain.org/"],
    blockExplorerUrls: ["https://mainnet.opbnbscan.com/"],
    iconUrls: ["https://docs.bnbchain.org/opbnb-docs/img/logo.svg"],

    oracle: "0xB27A3b7272c1b7c6f195e3066c144B18a33ce522", //

    podContract: "0x139E7c9ADfee9682E7997eb736F48f98B8821774", //
    podJobId: "c1efad95d1b34cc9b3e2ee06802a2a6d", //

    deploymentContract: "0xC217097F4fe4640BcD541B09bDFaCc8e200cEa37", //
    deploymentJobId: "d61b61a4e6684116be70d6ec6e58b52e", //

    nodeContract: "0x962E121f6067B0dA6F90D07d565ba21004922B9d", //
    nodeJobId: "aa7198c0190f4cc29d4e4470c08f6391",
    nodeOracle: "0x248E10ec1C54CB570F7A15933286BAa1D59B70c0",

    zeroTrustContract: "0xd72E21A51594f1Cacf5F1231bA432c392323Fd8c", //

    meshContract: "0x73Cb12189FCAcDE3d742E2ad0ABD2068011F56Ac", //

    codContract: "0x0A873038d29bf16871232f59D589deA2B849C846", //

    stcMarketContract: "0xBd0F68775aA77288Ea2083D7d7776D2D0C3bf0Ee", //
    stcMarketTokenContract: "0x5d3c43875589f4881E769f4b46cFf6257dC5Ad1C", //

    userHubContract: "0xbE5b30a59cdA47d40A0a15830a31aCA00b8af983" //
  }
];

let currentChain: ChainName = "opBNB Testnet";
export function setCurrentChain(name: ChainName) {
  currentChain = name;
}

export function getCurrentChain() {
  return chains.find(i => i.chainName === currentChain);
}
