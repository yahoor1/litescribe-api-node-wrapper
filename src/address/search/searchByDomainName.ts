import api from '../../api';

export const searchByDomainName = async (address: string) => {
  const uri = `/address/search?address=${address}`;
  const { data } = await api.get(uri);

  return data;
};
