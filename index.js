
// supported protocols
export const protocols = {
  compound: {
    name: "Compound",
    isEnabled: true,
    isCompoundish: true,
    iconUrl: "https://i.ibb.co/rFTM5hw/comp-96x96-3x.png",
    path: "compound",
    needsStakeToVote: false,
    isHybrid: false,
    isCouncil: false,
    description:
      "Compound is a decentralized money market protocol to borrow and lend assets. This Ethereum protocol establishes markets with algorithmically set interest rates.",
    suffix: "COMP",
    invalidSnapshots: [],
    hasDelegation: true,
    canPropose: false,
    hasOnchain: true,
    hasSnapshot: false,
    logoImageName: "compound",
    headerImageName: "compound",
  },
  uniswap: {
    name: "Uniswap",
    isEnabled: true,
    autonomousProposalContract: "0x76f54Eeb0D33a2A2c5CCb72FE12542A56f35d67C",
    iconUrl: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
    isCompoundish: true,
    path: "uniswap",
    needsStakeToVote: false,
    invalidSnapshots: [
      "QmNWZDogjnEMoi8hDFrK7MNmWeAeXnGJjmf5c8nTHfj9K7",
      "QmUPcp66S7CqhTFZeszUG7azrZzNNtGx2uqTvaWGqMfLCB",
      "QmeNU8EeLygjwkwBmPMVhY1fhohWFtzJx9ee8sePkhmrJz",
      "QmXGfbsH7Qt19zzuDDmX1WxnehfEi9K9zNGsQAGuBgyXE3",
      "QmTgW3QTYZhfW5Zu7j1Xewy8NQgh2Ga618BkPAPAfmzGcN",
      "QmQJuW88TbKzMLtEhWC7HkSrUWdF5FVsdsLvhfAogkzyqn", 
      "QmU5sggJNTQmSQtxecdsAJxXn9fgSwYz1dXpSpDcgwAqqy"
    ],
    isCouncil: false,
    isHybrid: true,
    description: "Uniswap is a decentralized protocol for automated liquidity provision on Ethereum. The introduction of UNI (ERC-20) serves to foster community-led growth, development, and self-sustainability, enabling shared community ownership and a vibrant, diverse, and dedicated governance system, which will actively guide the protocol towards the future.",
    suffix: "UNI",
    hasDelegation: true,
    canPropose: false,
    hasOnchain: true,
    hasSnapshot: true,
    logoImageName: "uniswap",
    headerImageName: "uniswap",
  },
  synthetix: {
    name: "Synthetix",
    isEnabled: true,
    isCompoundish: false,
    iconUrl: "https://media.discordapp.net/attachments/781278808262049803/781609154992144404/SNX.png",
    path: "synthetix",
    needsStakeToVote: false,
    invalidSnapshots: [],
    isHybrid: false,
    isCouncil: true,
    description:
      "Synthetix is a decentralised synthetic asset issuance protocol built on Ethereum. These synthetic assets are collateralized by the Synthetix Network Token (SNX) which when locked in the contract enables the issuance of synthetic assets (Synths). Spartan Council members, who vote on SCCP's, are voted in by staked SNX holders via a continuous nomination proposal.",
    suffix: "SNX",
    hasDelegation: false,
    hasOnchain: false,
    canPropose: false,
    hasSnapshot: true,
    logoImageName: "synthetix",
    headerImageName: "synthetix",
  },
  yearn: {
    name: "Yearn",
    isEnabled: false,
    isCompoundish: false,
    iconUrl: "https://pbs.twimg.com/profile_images/1286204702338813952/X8fdf5p-_400x400.png",
    path: "yearn",
    isHybrid: false,
    isCouncil: false,
    needsStakeToVote: true,
    stakingContract: "yearn-gov-v2",
    invalidSnapshots: [
      "QmSQqxzChmTf25fGtMtXDpzfzC6DPPbEF7bq3jCL3R1KtS",
      "QmPvovfoE9sYRNXSZmFu9htywwCtqvAYAzkdJPpN52e5tW",
      "QmZR9xYfp6N35xat7Lzv6DPamahys7rrjMxNL9FLSN8pix",
      "QmPnGpgkXDyZg2RJda8UazVyyW6QXTeKdwCZz3s6Fp55ES",
      "QmWorSkqryWMkJRi2qZ17djdsyaKowX2ZHrTS3eYirkANZ",
      "QmegM7tWoysSPxo4NuSyPVfCtZ9QePJ5ZQoM9tTTHYZ6WU",
      "Qmb4HbWHGTaBg6xBiEGbkeZWRv6GCHZCMEkTgYRfBm8XVQ",
      "QmSGdznAukV9w88e4T3sSAFSAGdRHFgWpFCmehuQfSNdt2",
      "QmdEVNm5auGGUXhkzSHJarDNMujs2r9uxwmmTQ1AXpjVvv",
      "QmaW3NWB3WXRKhTQXCtMoHgAX3jeo7qNwgrArWiUpiC2Qe",
      "QmUr6jtzRrjYQQ8XsiipqB5vRsCgrWJhAsGo98BM4cRE8h",
      "QmTwxRLsd4DYZEzDuYHZmYq5BxhfsA7phMn3nun9tCcaXs",
      "QmQFrtuFaMf3C9i8T8VVzTuMZMLSvUAfFr9jc5i4miHLxc",
      "QmRdRPDABGH7z2ctDow43FuiSn5jfqDgBcwWkCgifTR5qQ",
      "QmY2yoYQPjEzi7ruJ6W5QEJiqgP3kBN8VMk1nftHR5xXXL",
      "QmUKfPe4KWzYSmZuR5dTf9Wmp46QvBcW94yupAZF7GoM9U",
      "QmYpnQjX9oCvSQhdm8dFys9Bza9ULwJ2LoWg8d3L51k7fD",
      "QmUk3wSecphvCpsKfzfdJTNCTKA24hRZCXET4epZ9Vvsxo",
      "QmPRYLzXuzCLE39ibvMQSMUzhT7d4FREynMK41KowjgZfB",
      "QmYbHfPHjTDfkwLzHz2XoFoAqPHQCZ6H8NbUcxn76q7Gky",
      "QmSzZ1aS5VmEqW77DLFDk8ReDw9V1y2325QsnK3ug45NtC",
      "QmUnbAd6zDgxaCJA1eNBB7yJcNBXPSkpAqJsmAa9qtgqUc",
      "QmT1qdYTPuiAzU9swiWrcQqw1F4uyN2P9Nn2iUMGSBF6AW",
      "QmaHdavqGZzDpD6FuTKkAhj15YCna8V6oPVgNMCMSv8tGV",
      "QmamcXSvaEvt2PMJMtMQoDutc99b2LwZmZbLVxSyd8SbvU",
      "QmUaT3QxokDFW7BsvzGwZwatypjJkuqu86vCxXPhXkA86W",
    ],
    description:
      "yEarn is an automated liquidity aggregator offering a number of yield farming opportunities. In order for a proposal to pass or fail, more than 20% of the total staked YFI tokens (Quorum) have to vote. The Majority threshold currently stands at 50%. \n Anyone can stake their YFI in to vote on proposals - once you vote, your YFI will lock for 3 days.",
    suffix: "YFI",
    hasDelegation: false,
    hasOnchain: true,
    canPropose: true,
    hasSnapshot: true,
    logoImageName: "compound",
    headerImageName: "compound",
  },
  powerpool: {
    name: "Powerpool",
    isEnabled: false,
    isCompoundish: true,
    iconUrl: "https://powerpool.finance/images/logotype_black.svg",
    iconWhite: "https://powerpool.finance/images/logotype_white.svg",
    path: "powerpool",
    isCouncil: false,
    isHybrid: false,
    invalidSnapshots: [],
    description:
      "PowerPool is a cross-chain lending protocol for governance tokens, including COMP, BAL, LEND, YFI, BZRX, AKRO, and others. It enables the pooling of the tokens by allowing any holder to supply liquidity into a contract and receive an interest rate if there is enough demand. This, in turn, enables any market participant to borrow governance tokens by placing allowed digital assets as collateral.",
    suffix: "CVP",
    hasDelegation: true,
    hasOnchain: true,
    canPropose: false,
    hasSnapshot: false,
        logoImageName: "compound",
    headerImageName: "compound",
  },
  rarible: {
    name: "Rarible",
    isEnabled: true,
    iconUrl: "https://i.ibb.co/RhyD2Q4/logo-rarible-512.png",
    isCompoundish: false,
    path: "rarible",
    needsStakeToVote: false,
    invalidSnapshots: [
      "QmSgtwCz33ub4BXYZCfdZHAdWSNAPhaTZUU94VJzGYFCXi",
      "QmNg7ZNi8xb7kBBMHPxvSHUYUcm28UeAkfkjAeRejG5LGy",
      "QmaV43F4RRX2GYc42dwV7esTvVmp6Mb4pi5uZfKjgFxcn3",
      "QmXUVjiANVc7cYdioyMvk4T9wandAFUfmdHAQov5Xhfra1",
      "QmYjtVqeL7adETmmLqeefsasFRk4WZk4eZZjWJAgfsRxdz",
    ],
    isCouncil: false,
    isHybrid: false, // NB they are actively working to become hybrid
    description:
      "Rarible is the premiere NFT marketplace where you can mint, buy and sell digital collectibles without any coding skills. As we are growing in numbers and expanding our presence on the market, Rarible is taking a shift towards a becoming a fully Decentralized Autonomous Organization.",
    suffix: "RARI",
    hasDelegation: false,
    canPropose: false,
    hasOnchain: false,
    hasSnapshot: true,
    logoImageName: "rarible",
    headerImageName: "rarible",
  },
  pooltogether: {
    name: "PoolTogether",
    isEnabled: true,
    iconUrl: "https://avatars2.githubusercontent.com/u/52546024?s=200&v=4",
    isCompoundish: false,
    path: "pooltogether",
    needsStakeToVote: false,
    invalidSnapshots: [],
    isCouncil: false,
    isHybrid: false,
    description:
      "PoolTogether is a protocol for no-loss prize games on Ethereum. The protocol enables developers to build their own no-loss prize games and also offers governance-managed no-loss prize games. Prize games are pools of funds whose accrued interest is distributed as prizes.",
    suffix: "PcDAI",
    hasDelegation: false,
    canPropose: false,
    hasOnchain: false,
    hasSnapshot: true,
    logoImageName: "pooltogether",
    headerImageName: "pooltogether",
  },
  gnosis: {
    name: "Gnosis",
    isEnabled: true,
    isCompoundish: false,
    iconUrl: "https://assets.coingecko.com/coins/images/662/small/gnosis-logo.png?1547034401",
    path: "gnosis",
    needsStakeToVote: false,
    invalidSnapshots: ["Qmey2pnp3wMctMBBiG4QgSdKejmgyXNAady5ZCZQKQKnKF", "QmaGQ3K3PkjUakoyR127dbym8ESsruXg4dyeKKQxxRdPgA", "QmcERezRFobLTWGqYw47t9NZtWVsiW791rVeqHvPTBs8gW"],
    isCouncil: false,
    isHybrid: false,
    description:
      "Gnosis builds new market mechanisms for decentralized finance. Our three interoperable product lines allow you to securely create, trade, and hold digital assets on Ethereum.",
    suffix: "GNO",
    hasDelegation: false,
    hasOnchain: false,
    canPropose: false,
    hasSnapshot: true, 
    logoImageName: "gnosis",
    headerImageName: "gnosis",
  },
  defidollar: {
    name: "Defi Dollar",
    isEnabled: true,
    iconUrl: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2830ef67-02a2-4370-85de-e1a7d592e1d9%2FDefidollar_Logo_Symbol.png?table=block&id=eb26274a-6771-43f0-a824-aa7d86c23fcf&width=600&userId=8877e717-b6d3-4249-ace7-46614b8caf2c&cache=v2",
    isCompoundish: false,
    path: "defidollar",
    needsStakeToVote: false,
    isCouncil: false,
    invalidSnapshots: [
      "QmZUUs11CVfwPapHMs53N1ZbmeAzu3bhkfZJFRyENS9kGf",
      "QmQG2ppd3TwTGK87KAX7rgyWVEkKo31tXCKw9f6GFQrhHA",
      "QmYRKXzmqLVSD9ao3Sba3EsJcAbD3spG58Cg5wznVrnMUM",
      "QmehCJcrywhtgU93vFu1AoeVPSzzYf8jBUEED7mBx15U4R",
      "QmYRKXzmqLVSD9ao3Sba3EsJcAbD3spG58Cg5wznVrnMUM"
    ],
    isHybrid: false,
    description:
      "DeFi Dollar is a stablecoin that uses the primitives of DeFi to stay close to the Dollar, protecting users from counterparty risk, holdings seizure risk, bank run risk, etc. DUSD offers investors an opportunity to index varying stablecoins in its single token. This invariably protects such users from any underlying risks that may be attached with such tokens.",
    suffix: "DFD",
    hasDelegation: false,
    canPropose: false,
    hasOnchain: false,
    hasSnapshot: true,
    logoImageName: "defidollar",
    headerImageName: "defidollar",
  },
  siren: {
    name: "Siren",
    isEnabled: false,
    isCompoundish: true,
    iconUrl: "https://pbs.twimg.com/profile_images/1321849237240451074/VjJauAOJ_400x400.jpg",
    path: "siren",
    needsStakeToVote: false,
    isCouncil: false,
     invalidSnapshots: [],
   isHybrid: false,
    description:
      "Siren is a distributed protocol for creating, trading, and redeeming fully-collateralized options contracts for any ERC-20 token on Ethereum.",
    suffix: "SI",
    hasDelegation: true,
    hasOnchain: true,
    canPropose: false,
    hasSnapshot: false, 
    logoImageName: "compound",
    headerImageName: "compound",
  },
  aave: {
    name: "Aave",
    isEnabled: false,
    isCompoundish: false,
    iconUrl: "https://cryptologos.cc/logos/aave-lend-logo.png?v=003",
    path: "aave",
    needsStakeToVote: false,
   isHybrid: false,
    isCouncil: false,
    invalidSnapshots: [
      "Qmf1MJC4AFs7ozGP23wzJrY3RYippiUH1EqNCzxiKXw9YD",
      "QmTUmaKjgYmpKHeBCG77ztTRKXo7sfLe3VDcSZr8s5Z1L2",
      "QmYcwqV3F3yHkNozG96FSPH2tvomysusXVmJr2G9mw94K4",
      "QmU3aQNMDS1wjUqQSjexY2UtYSoGobPxjxVcNKg7gv57wb",
      "QmTGWaXtVN7JrhAFMDfmC9QTM7mYtoAPy6e6gwRxn3Zdf5"
    ],
    description:
      "Aave is an open source and non-custodial protocol enabling the creation of money markets. Users can earn interest on deposits and also borrow assets.",
    suffix: "LEND",
    canPropose: false,
    hasSnapshot: true,
    hasDelegation: true,
    hasOnchain: false,
    logoImageName: "compound",
    headerImageName: "compound",
  },
  yamv2: {
    name: "Yam",
    isEnabled: false,
    iconUrl: "https://miro.medium.com/max/256/1*W-EWFFVKoE3GCuvykIQ7pQ.png",
    isCompoundish: false,
    path: "yamv2",
    needsStakeToVote: true,
   isHybrid: true,
    isCouncil: false,
    description:
      "YAM Finance is a new elastic supply token where the supply of the token expands and contracts in response to the token price – with the ultimate aim of stabilizing to a $1 USD PEG. A 12 hour “Rebase” will increase/decrease the total supply of the token depends on its price.",
    suffix: "YAM",
    hasDelegation: true,
    canPropose: false,
    hasOnchain: false,
    hasSnapshot: true,
    logoImageName: "compound",
    headerImageName: "compound",
    invalidSnapshots: [
      "Qmcij6T4qXom3aVYPewBj9oJEbqrwq9Xt63tsJUKmbNs4p",
      "QmfS9Td2Butihi8JZvZxSFMiWynpRoqFpSNBhEJ2m6C2DV",
      "QmaV43F4RRX2GYc42dwV7esTvVmp6Mb4pi5uZfKjgFxcn3",
      "QmWFPdTZMcxXhQfRepCN44g9cUuxyyHpzuRuiXoaBhY5rMz",
      "QmWFPdTZMcxXhQfRepCN44g9cUuxyyHpzuRuiXoaBhY5rM",
      "QmXRepiAZnLSzMfhb3SA5YfHGDKnBYxitHkw8NcVedYkPL",
      "QmXFLRWg5SrqKHb21j81iSBUpUn3uRSb8AfEqgSiyBpkDq",
      "QmXvokmPsjwyoV4L4qf9kzD9pQR3765tXWbEcT54Um8mEC",
      "QmPEY1iTqjKJurU1c8EaPkXruU3tCm88D1Ur9bVN7RFoDB",
      "QmUF8bkwrnxVY94w6NPPF7NKvZMT92F45oH3gp6GgqRidN",
      "QmTW1Xf1zuG1rLguc8PcdpScYzAE73x4zvs784wVigbw3s",
      "QmRm2raWEnpTyrTggTzeHheKkSp3HV49MX5Kp5BbN5rFqb",
      "QmVZh396eZEZ2QLdoL2c39v2UbD9L93jamjwLXHqXZhdeQ",
      "QmUbV7sQYep7yZnB3iNZ9ykArsEdBjG1zjXdrYvNkrDSaz",
      "QmaZV3xnYuHqyi3oXFfBdV8F4CN7SPUpXUaKVctb22Qee3",
      "QmVPZc6Q1HFqiYcMJs8kcsHjNKQarppDjAMozPfsonQ1XE",
      "QmNvATiSgHPcLzqA8Mp6JNfu4mxfS9azSvtrQf1SABqHu1",
      "QmUQbN5JivkNBiK7NquAJRLU6m6Vd1be3z9vhcNSBxm7bt",
      "QmPTK7t8n6xEc4E3g5x33Jmjv6q2CWcLoc3ufmR1NaEiTk",
      "Qmcur1jhdiEuzryQvoWfFv5TQsLkDoHaTMqPH8EzVpBoB8",
      "QmfXaaDuyfGi5kbDwE5exP3g8was5B2DjnQ4ZmMjMfmPNr",
      "Qmek4U45XoQtm2vXA4hG4rB9xHZN9aRHkyd6sijKApiPGP",
      "QmPqrLyb1RxHLe9T6XoiAzUDkL8ajZkkkj9PvcrrKTEkEc",
      "QmaifNEzQ9F93ivNaZ6SRJei9QHrxoJpUTKucehHSYL7Sx",
      "QmQww7LQBqyPotZFe4pKAGo2yLGEtL5Sjb2WzKjzVQKpGe",
      "QmQgsKr4yyV9iWKFZhLD1eXWmZkZW5SCMhgZXkmnXoxE8k",
      "QmNXZJ2dDDP7meuzQQRnJoQAAFGsyUMzhwuZZwwz6Lw5LB",
      "QmVPZc6Q1HFqiYcMJs8kcsHjNKQarppDjAMozPfsonQ1XE",
      "QmfNyNy72CTEDZL4d38vxhEcMuoVSPqZYigSWCPShCyXu6",
      "QmYGwg7yWJddFb85gdxt16CAeNthVecoYMe18zVFaGuMas",
      "QmaaHZwX3VbefNjr51oB3YUCBPUCJE1eatga5AVHygmqDW",
      "QmPVbErQ9Au7Q3RJ88FuvjKWgD42FWPJrMpVVuNQvC9PFe",
      "QmY1Cpe2NhRSon4iVe8pZBGUg23brFPPyPMeT6gRiFZY3r",
      "QmcdFBNaFQ6XPdYoCSHZDvUM3u5bkHTVweRkdBeg6YkkCt",
      "QmSHZshfwsvHpLV8ZcMBPB69a5eKKe7yAkqJ4sRBAoWnzK",
      "QmVrPxf79DCHBrLiS3G5KS8X5oqwXDq17arLsDdmuCjuwW",
      "Qmc2DtjuN1vHthAiiiQwPRYoboPAL3A3wiVS2kpCC6RqRN",
      "QmeLDhzXycwe2Rq81g6ry5QNsNh5sYUo3s4sn4ythUS1nD",
      "QmWMSzR2q1uGDunRDoD1aQmgb7SFKDbDxie6RoroLgThx8",
      "QmR4wBSLPBjHbXBPnqPNg6UUezxDsc1CkTBhC7AzdpppRS",
      "QmXqBiYPUH7MY1vvGrpFtZhxsYBZH7qryoVEgWZi6iGjfn",
      "QmZMw25zkUjPunrAbNXHjumadHUQpdaNweabJoAuoSSoEy",
      "QmT5mL65fGkyrusCqgkFdt3jWygmkwkgRCHaBAaAPp4wEa",
      "QmVik1ZErwPt7Cyi8GKeFnyovf9yeM82dGcYjkif2XwRCt",
      "QmQ1FmUbTVpFDrbw9aymVvjDocvggeDkDaej1Lios2fxqg",
      "QmXxeHtsquFDpWGUYGnbCrn6H6xo1m8RsLWmssg9azp1bn",
    ],
  },
  index: {
    name: "Index",
    isEnabled: true,
    iconUrl: "https://pbs.twimg.com/profile_images/1313562166616707073/c7w3TmXs.jpg",
    isCompoundish: false,
    path: "index",
    needsStakeToVote: false,
    isHybrid: false,
    isCouncil: false,
    invalidSnapshots: [
    ],
    description:
      "Index Coop creates and maintains the world's best crypto index products. Index Coop is a Decentralized and Autonomous Asset Manager governed, maintained, and upgraded by INDEX token holders. All index products are always fully collateralized.",
    suffix: "$INDEX",
    canPropose: false,
    hasSnapshot: true,
    hasDelegation: false,
    hasOnchain: false,
    logoImageName: "indexCoop",
    headerImageName: "indexCoop",
  },
  balancer: {
    name: "Balancer",
    isEnabled: false,
    iconUrl: "https://cryptologos.cc/logos/balancer-bal-logo.png",
    isCompoundish: false,
    path: "balancer",
    needsStakeToVote: false,
    isCouncil: false,
    invalidSnapshots: [
      "QmYYHb5U6MTyoQU99SLQAGa7HTvqp4ZKZjLrJ29d8hA5pQ",
      "QmWdDUxnhUS5pUCY4PwLG97zUwkrgkFwab6nNEs3u25hCR",
      "QmcDLVRoz3GwvHqa563gJr1uztHzqyL2Qubt7B7qbBThKM",
      "QmPQE2jueu8n2BB87DWZS6yaTSAs1YMufrcJdczJeU8Qdv",
      "QmNUbyxyY4uYiYWKMYCNwQaRX5tP8i7c4LC3BjsemNCFzW",
      "QmerfaLQdduNTmmxCYtVjurH14vPzJWZHFe54YfcuGojqm",
      "QmXdzBtPprrdBrQGfKixhXGjAbPQaw2aN6djoXmrgicSVD",
      "QmVQC2MHPixaXpshgbyBC7C9mPbwbatuW96JNDnxAWhjKg",
      "QmUTTf9Du9gzE8jNE8jGsny7nRRqAchftP8vCPuNCafrsR",
      "QmStCzK1MvFRQtaxxMr9xyCHmaSfPwXRMxsLFSBnWENzAs",
      "QmXWvzCPyPDcryaBC5Qwov9vtyzUoQ2ZrGQaippTFHZpJJ",
      "QmXvWANQQSFpKaZxv1sXq2QfskxXiYgkLgh69VH8CN9w11",
      "QmSLGcJ1FVexbZkfyuhkomVjHgkcYEz37eHs9NWkRxFGm2",
      "QmPDkzumiCeCabyouCvahiFgrm4LwpG7R1yNMigxGfjwp6",
      "QmNxFAdwgEtn1FxjUXBiwKytaE9Kq8iK5kLRBdMjMKUsVs",
    ],
   isHybrid: false,
    description:
      "Balancer is an automated portfolio manager, liquidity provider, and price sensor. Users collect fees from traders who rebalance portfolios following arb opportunities",
    suffix: "BAL",
    canPropose: false,
    hasSnapshot: true,
    hasDelegation: false,
    hasOnchain: false,
        logoImageName: "compound",
    headerImageName: "compound",
  }
};

