const API_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(`${API_URL}?_page=${page}&_limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
