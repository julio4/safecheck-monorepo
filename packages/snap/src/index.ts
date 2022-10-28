import { OnTransactionHandler } from "./types"

export const onTransaction: OnTransactionHandler = async ({ transaction, chainId }) => {
  const insights = {
    "State": "WIP"
  }
  return { insights } 
};
