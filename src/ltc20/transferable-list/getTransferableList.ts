import api from '../../api';

/**
 * Takes address and ticker and returns a list of transferable ltc20 inscriptions
 * @param address (string)
 * @param ticker (string)
 * @returns list of transferable ltc20 inscriptions
 */
export const getTransferableList = async (address: string, ticker: string) => {
  const uri = `/brc20/transferable-list?address=${address}&ticker=${ticker}`;
  const response = await api.get(uri);

  return response.data;
};
