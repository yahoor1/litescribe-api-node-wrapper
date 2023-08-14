import api from '../../api';

/**
 * Takes Inscription IDs and return the output for each inscription
 * @param inscriptionIds (string[])
 * @returns the output for each inscription
 */
export const getInscriptionsOutputs = async (inscriptionIds: string[]) => {
  const uri = `/inscription/utxos`;
  const { data } = await api.post(uri, { inscriptionIds: inscriptionIds.toString() });

  return data;
};