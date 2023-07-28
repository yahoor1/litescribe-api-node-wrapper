import api from '../../api';

/**
 * Returns the LTC address balance for multiple addresses
 * @param addresses (string[])
 * @returns the LTC address balance for multiple addresses
 */
export const getMultiAssets = async (addresses: string[]) => {
  const uri = `/address/multi-assets?addresses=${addresses.toString()}`;
  const response = await api.get(uri);

  return response.data;
};
