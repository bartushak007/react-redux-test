import instance from './axiosInstance';



export const getContactsList = data => {
  const filterParams = data ? `?${data}` : '';

  return instance.get(`${filterParams}`);
};