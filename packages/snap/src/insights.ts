import { Insights, TransactionObject } from "./types";
import { apiOptions } from "../snap.config";

export const getInsights = async (tx: TransactionObject) => {

  let response = undefined;
  try {
    response = await fetch(apiOptions.endpoint, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tx),
    });
  } catch(err) {
    return {
      "insights": {
        "Status": "Failed to fech API. Try again...",
      }
    }
  }

  let insights: Insights = await response.json();
  return { insights };
}
