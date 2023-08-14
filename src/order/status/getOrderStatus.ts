import api from '../../api';

/**
 * Takes order id and returns the status of an order
 * @param orderId (string)
 * @returns the status of an order
 */
export const getOrderStatus = async (orderId: string) => {
  const uri = `/order/status?order=${orderId}`;
  const { data } = await api.get(uri);

  return data;
};
