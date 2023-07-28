import api from '../../api';

/**
 * Takes address and ticker and returns a summary for the queried token ticker of an address
 * @param address (string)
 * @param ticker (string)
 * @returns summary for the queried token ticker of an address
 */
export const getTokenSummary = async (address: string, ticker: string) => {
  const uri = `/brc20/token-summary?address=${address}&ticker=${ticker}`;
  const response = await api.get(uri);

  return response.data;
};
