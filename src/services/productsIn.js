// src/services/ProductServices.js
const API_URL = "http://localhost:5000/api/product-in";

const getToken = () => {
  return localStorage.getItem("token"); // Function to get the token from local storage
};

export const fetchProductsIn = async () => {
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

export const addProductIn = async (productCode, quantity, unit_price) => {
  try {
    const response = await fetch(`${API_URL}/add_product_in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({
        product_code: productCode,
        quantity: quantity,
        unit_price: unit_price,
      }),
    });
    if (!response.ok) throw new Error("Failed to add product");
    const data = await response.json();
    return data; // Return the newly created product
  } catch (error) {
    console.error("Error adding product:", error);
    throw error; // Rethrow the error for handling in the component
  }
};

export const updateProductIn = async (id, updatedData) => {
  try {
    const response = await fetch(`${API_URL}/update_product_in/${id}`, {
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

export const deleteProductIn = async (id) => {
  try {
    const response = await fetch(`${API_URL}/delete_product_in/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (!response.ok) throw new Error("Failed to delete product");
    const data = await response.json();
    return data; // Return confirmation message
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error; // Rethrow the error for handling in the component
  }
};
