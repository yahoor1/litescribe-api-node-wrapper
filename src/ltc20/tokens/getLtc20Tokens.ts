import api from '../../api';

/**
 * Takes address and returns a list of all ltc20 token balances held by an address
 * @param address (string)
 * @returns all ltc20 token balances held by an address
 */
export const getLtc20Tokens = async (address: string) => {
  const uri = `/brc20/tokens?address=${address}`;
  const response = await api.get(uri);

  return response.data;
};
