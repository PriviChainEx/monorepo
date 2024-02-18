import {solidityPackedKeccak256} from "ethers";
import {BytesLike} from "ethers";

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

  calculateRoot(): BytesLike {
    return solidityPackedKeccak256(
      ["uint256", "uint256"], 
      [this.transport.totalAssets.collateralAssets, this.transport.totalAssets.chainIDs.length]
    );
  }
}

export const registrySTF: STF<CentralRegistryRollup, RegistryActionInput> = {
  identifier: "registrySTF",

  apply(inputs: RegistryActionInput, state: CentralRegistryRollup): void {
    let newState = state.getState();
    const chainIndex = newState.chainIDs.indexOf(inputs.chainId);
    let balances = newState.tokenisedAssets.get(inputs.assetId);
    if(balances != undefined) {
      let currentBalance = 0;
      currentBalance = balances[chainIndex];
      if (inputs.type === "increment") {
        currentBalance += inputs.amount;
      } else if (inputs.type === "decrement") {
        currentBalance -= inputs.amount;
      }
      balances[chainIndex] = currentBalance;
      newState.tokenisedAssets.set(inputs.assetId, balances);
    }
    state.transport.totalAssets = newState;
  },
};