import { RollupState, STF } from "@stackr/stackr-js/execution";
import { ethers } from "ethers";

export type StateVariable = {
  collateralAssets: number;
  chainID: number;
  tokenisedAssets: Map<number, number[]>;
};

interface StateTransport {
  totalAssests: StateVariable;
  
}

export interface privchain1ActionInput {
  chainId: number;
  assetId: number;
  amount: number;
}

export class Privchain1sell extends RollupState<StateVariable, StateTransport> {
  constructor(assets: StateVariable) {
    super(assets);
  }

  createTransport(state: StateVariable): StateTransport {
    return { totalAssests: state };
  }

  getState(): StateVariable {
    return this.transport.totalAssests;
  }

  calculateRoot(): ethers.BytesLike {
    return ethers.solidityPackedKeccak256(
      ["uint256"],
      [this.transport.totalAssests.collateralAssets, this.transport.totalAssests.chainID]
    );
  }
}

export const privchain1STF: STF<Privchain1sell, privchain1ActionInput> = {
  identifier: "privchain1STF",

  apply(inputs: privchain1ActionInput, state: Privchain1sell): void {
    let newState = state.getState();
    const chainIndex = newState.chainID;
    let balances =newState.tokenisedAssets.has(inputs.assetId) ? newState.tokenisedAssets.get(inputs.assetId) :new Array(chainIndex).fill(0);
    console.log(`Processing ${inputs.type} for asset ${inputs.assetId} on chain ${inputs.chainId}`);

    if (chainIndex !== -1) {

      let currentBalance = balances && balances.length > chainIndex ? balances[chainIndex] : 0;


      console.log(`Initial balance for asset ${inputs.assetId}: ${currentBalance}`);


     
          currentBalance += inputs.amount;
       

      balances[chainIndex] = currentBalance;

      console.log(`Updated balance for asset ${inputs.assetId}: ${currentBalance}`);


      


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


