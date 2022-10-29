import { OnTransactionHandler } from "./types"
import { getInsights } from "./insights"

export const onTransaction: OnTransactionHandler = async ({ transaction, chainId }) => {
  return await getInsights(transaction)
};
