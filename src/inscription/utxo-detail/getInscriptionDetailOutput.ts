import api from '../../api';

/**
 * Takes Inscription ID and returns inscription output with details
 * @param inscriptionId (string)
 * @returns the inscription output with details
 */
export const getInscriptionDetailOutput = async (inscriptionId: string) => {
  const uri = `/inscription/utxo-detail?inscriptionId=${inscriptionId}`;
  const { data } = await api.get(uri);

  return data;
};
