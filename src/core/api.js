import axios from 'axios';

const HTTP = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllProductsQuery = async () => {
  try {
    const response = await HTTP.get('products');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getSingleProductQuery = async (id) => {
  try {
    const response = await HTTP.get(`products/${id}`);
    return response.data;
  } catch (error) {
    console.log('error.massage');
  }
};
