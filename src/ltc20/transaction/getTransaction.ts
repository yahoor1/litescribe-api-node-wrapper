import api from '../../api';

/**
 * Takes transaction ID and returns a single LTC20 transaction details
 * @param txId (string)
 * @returns single LTC20 transaction details
 */
export const getTransaction = async (txId: string) => {
  const uri = `/brc20/transaction?txid=${txId}`;
  const { data } = await api.get(uri);

  return data;
};
