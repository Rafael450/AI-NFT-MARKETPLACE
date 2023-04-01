import DappkitReactProvider from "./lib/DappkitReactProvider";
import React from 'react';

import { chainDict } from "./constants/networks";
import { dappConfig } from "./config";

export const defaulDappkitProvider = new DappkitReactProvider(
    // dappConfig.chainId,
    1313161555,
    // chainDict[dappConfig.chainId].rpc,
    "https://testnet.aurora.dev",
    {
        autonnect: false,
        switchNetwork: true,
        addNewortk: true,
        disconnectOnSwitchAccount: false,
        disconnectOnChangeNetwork: false,
    }
)


export const DappkitProviderCtx = React.createContext(defaulDappkitProvider);

