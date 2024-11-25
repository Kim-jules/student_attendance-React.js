// src/services/ProductServices.js
const API_URL = "http://localhost:5000/api/product";

const getToken = () => {
  return localStorage.getItem("token"); // Function to get the token from local storage
};

export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (!response.ok) throw new Error("Failed to fetch products");
    const data = await response.json();
    return data; // Return the list of products
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Rethrow the error for handling in the component
  }
};

export const addProduct = async (productName) => {
  try {
    const response = await fetch(`${API_URL}/create_product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ product_name: productName }),
    });
    if (!response.ok) throw new Error("Failed to add product");
    const data = await response.json();
    return data; // Return the newly created product
  } catch (error) {
    console.error("Error adding product:", error);
    throw error; // Rethrow the error for handling in the component
  }
};

export const updateProduct = async (id, updatedData) => {
  try {
    const response = await fetch(`${API_URL}/update_product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) throw new Error("Failed to update product");
    const data = await response.json();
    return data; // Return the updated product
  } catch (error) {
    console.error("Error updating product:", error);
    throw error; // Rethrow the error for handling in the component
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/delete_product/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
      if (!response.ok) throw new Error("Failed to delete product");
      const data = await response.json()
    return data; // Return confirmation message
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error; // Rethrow the error for handling in the component
  }
};
