import api from '../../api';

/**
 * Takes LTC address and returns a list of ordinal inscriptions held by an address
 * @param address (string)
 * @param page (number) - default: 0
 * @param size (number) - default: 20
 * @returns list of ordinal inscriptions held by an address
 */
export const getInscriptions = async (
  address: string,
  page: number = 0,
  size: number = 20
) => {
  const uri = `/address/inscriptions?address=${address}&cursor=${page}&size=${size}`;
  const response = await api.get(uri);

  return response.data;
};
