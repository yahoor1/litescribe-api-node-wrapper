import api from '../../api';

/**
 * Create an order for inscription
 * @returns
 */
export const createOrder = async () => {
  const uri = `/order/create`;
  const { data } = await api.post(uri);

  return data;
};