import { RollupState, STF } from "@stackr/stackr-js/execution";
import { ethers } from "ethers";

export type StateVariable = {
  collateralAssets: number;
  chainIDs: number[];
  tokenisedAssets: Map<number, number[]>;
};

interface StateTransport {
  totalAssets: StateVariable;
}

export interface RegistryActionInput {
  type: "increment" | "decrement";
  chainId: number;
  assetId: number;
  amount: number;
}

export class CentralRegistryRollup extends RollupState<StateVariable, StateTransport> {
  constructor(assets: StateVariable) {
    super(assets);
  }

  createTransport(state: StateVariable): StateTransport {
    return { totalAssets: state };
  }

  getState(): StateVariable {
    return this.transport.totalAssets;
  }

  calculateRoot(): ethers.BytesLike {
    return ethers.solidityPackedKeccak256(
      ["uint256", "uint256"], 
      [this.transport.totalAssets.collateralAssets, this.transport.totalAssets.chainIDs.length]
    );
  }
}

export const registrySTF: STF<CentralRegistryRollup, RegistryActionInput> = {
  identifier: "registrySTF",

  apply(inputs: RegistryActionInput, state: CentralRegistryRollup): void {
    let newState = state.getState();
    const chainIndex = newState.chainIDs.findIndex((id) => id === inputs.chainId);
    let balances = newState.tokenisedAssets.has(inputs.assetId) ? newState.tokenisedAssets.get(inputs.assetId) : new Array(newState.chainIDs.length).fill(0);
   console.log(`Processing ${inputs.type} for asset ${inputs.assetId} on chain ${inputs.chainId}`);

  if (chainIndex !== -1) {
  
    let currentBalance = balances && balances.length > chainIndex ? balances[chainIndex] : 0;

 
    console.log(`Initial balance for asset ${inputs.assetId}: ${currentBalance}`);

    
    switch (inputs.type) {
      case "increment":
        currentBalance += inputs.amount;
        break;
      case "decrement":
    
        if (currentBalance >= inputs.amount) {
          currentBalance -= inputs.amount;
        } else {
          console.warn(`Attempt to decrement beyond 0 for asset ${inputs.assetId}`);
       
        }
        break;
      default:
        console.error(`Unknown operation type: ${inputs.type}`);
       
        return; 
    }

    
    balances[chainIndex] = currentBalance;

    console.log(`Updated balance for asset ${inputs.assetId}: ${currentBalance}`);

   
    newState.tokenisedAssets.set(inputs.assetId, balances);

  
    let updatedTotalAssets = Object.assign({}, newState, {
      tokenisedAssets: newState.tokenisedAssets
    });
    state.transport.totalAssets = updatedTotalAssets;

   
    console.log(`State updated for asset ${inputs.assetId}`);
  } else {
    console.error(`Invalid chain index for chain ID: ${inputs.chainId}`);
  
  }
},
};
