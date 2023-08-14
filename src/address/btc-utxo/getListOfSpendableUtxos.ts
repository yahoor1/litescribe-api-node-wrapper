import api from '../../api';

/**
 * Takes LTC address and returns a list of spendable utxos
 * @param address (string)
 * @returns the list of spendable utxos
 */
export const getListOfSpendableUtxos = async (address: string) => {
  const uri = `/address/btc-utxo?address=${address}`;
  const { data } = await api.get(uri);

  return data;
};
