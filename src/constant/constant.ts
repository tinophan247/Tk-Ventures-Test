import { BCOption, GenresOption, dataType } from "./interface";

export const blockChainOpt: BCOption[] = [
  {
    Name: "Ethereum",
    Code: "ethereum",
    ExtendValue:
      "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/ethereum_20220613095445.png",
  },
  {
    Name: "Solana",
    Code: "solana",
    ExtendValue:
      "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/solana_20220613095447.png",
  },
  {
    Name: "BNB Chain",
    Code: "bsc",
    ExtendValue:
      "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/bsc_20220613095442.png",
  },
  {
    Name: "Immutable-X",
    Code: "immutable-x",
    ExtendValue:
      "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/immutablex_20220613095446.png",
  },
  {
    Name: "Other",
    Code: "other",
    ExtendValue:
      "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/other_20220613095443.png",
  },
  {
    Name: "Polygon",
    Code: "polygon",
    ExtendValue:
      "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/polygon_20220613095444.png",
  },
  {
    Name: "NEO",
    Code: "neo",
    ExtendValue:
      "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/neo_20220613095450.png",
  },
  {
    Name: "Avalanche",
    Code: "avalanche",
    ExtendValue:
      "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/avalanche_20220613095455.png",
  },
  {
    Name: "Harmony",
    Code: "harmony",
    ExtendValue:
      "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/harmony_20220613095457.png",
  },
];

export const genresOpt: BCOption[] = [
  {
    "Name": "Metaverse",
    "Code": "metaverse"
  },
  {
    "Name": "Breeding",
    "Code": "breeding"
  },
  {
    "Name": "Card Game",
    "Code": "card-game"
  },
  {
    "Name": "Collectible",
    "Code": "collectible"
  },
  {
    "Name": "Move To Earn",
    "Code": "move-to-earn"
  },
  {
    "Name": "Other",
    "Code": "other"
  },
  {
    "Name": "RPG",
    "Code": "rpg"
  },
  {
    "Name": "Auto Battler",
    "Code": "auto-battler"
  },
  {
    "Name": "Simulation",
    "Code": "simulation"
  },
  {
    "Name": "PVP",
    "Code": "pvp"
  },
  {
    "Name": "Adventure",
    "Code": "adventure"
  },
  {
    "Name": "Space Game",
    "Code": "space-game"
  },
  {
    "Name": "Strategy",
    "Code": "strategy"
  },
  {
    "Name": "VR",
    "Code": "vr"
  },
  {
    "Name": "Virtual-World",
    "Code": "virtual-world"
  }
];

export const platformOpt: BCOption[] = [
  {
    "Name": "Windows",
    "Code": "windows"
  },
  {
    "Name": "Browser",
    "Code": "browser"
  },
  {
    "Name": "Android",
    "Code": "android"
  },
  {
    "Name": "iOS",
    "Code": "ios"
  },
  {
    "Name": "Mobile",
    "Code": "mobile"
  },
  {
    "Name": "Mac",
    "Code": "mac"
  },
  {
    "Name": "PC",
    "Code": "pc"
  },
  
];

export const defaultBlockChain : BCOption = {
  Name : '',
  Code : '',
  ExtendValue : null
}

export const defaultGenres : GenresOption = {
  Name : '',
  Code : '',
}

export const defaultPlatforms : GenresOption = {
  Name : '',
  Code : '',
}


export const defaultGame : dataType = {
  Code : '',
  Name : '',
  ImageUrl : '',
  Symbol: '',
  BlockChains : [defaultBlockChain],
  Genres : [defaultGenres],
  Platforms : [defaultPlatforms],
  Price : 0
}

