import api from '../../api';

/**
 * Takes Inscription ID and returns inscription output
 * @param inscriptionId (string)
 * @returns the inscription output
 */
export const getInscriptionOutput = async (inscriptionId: string) => {
  const uri = `/inscription/utxo?inscriptionId=${inscriptionId}`;
  const response = await api.get(uri);

  return response.data;
};
