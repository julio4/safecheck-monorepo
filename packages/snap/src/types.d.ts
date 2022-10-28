// import { OnTransactionHandler } from "@metamask/snap-types";
import { OnTransactionResponse } from "@metamask/snap-types";

// We're redefining tx type for ethereum (EIP-1559 only)
export interface TransactionObject {
  from: string;
  to: string;
  nonce: string;
  value: string;
  data: string;
  gas: string;
  maxFeePerGas: string;
  maxPriorityFeePerGas: string;
  type: string;
  estimateSuggested: string;
  estimateUsed: string;
}

export type ChainId = `${string}:${string | number}`;

export type Insights = Record<string, any>;

export type OnTransactionHandler = (args: {
  transaction: TransactionObject;
  chainId: ChainId;
}) => Promise<OnTransactionResponse>;
