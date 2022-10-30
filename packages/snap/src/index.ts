import { OnTransactionHandler } from "./types"
import { getInsights } from "./insights"

export const onTransaction: OnTransactionHandler = async ({ transaction, chainId }) => {
  // We only support ethereum mainnet for now
  // We could add support with chainId
  const insights_data = await getInsights(transaction)
  return { insights: insights_data }
};

export const onRpcRequest = async () => {}
