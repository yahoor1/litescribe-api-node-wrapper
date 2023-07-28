import api from '../../api';

/**
 * Takes LTC address and returns balance
 * @param address (string)
 * @returns the LTC address balance
 */
export const getAddressBalance = async (address: string) => {
  const uri = `/address/balance?address=${address}`;
  const response = await api.get(uri);

  return response.data;
};
