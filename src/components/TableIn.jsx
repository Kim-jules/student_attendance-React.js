import React, { useState, useEffect } from "react";
import { BiTrash, BiPen } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {
  fetchProductsIn,
  addProductIn,
  deleteProductIn,
  updateProductIn,
} from "../services/productsIn"; // Import service functions

const TableIn = ({ visible }) => {
  const [user, setUser] = useState(null);
  const [productsIn, setProductsIn] = useState([]);
  const [productCode, setproductCode] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [editProductId, setEditProductId] = useState(null); // State to track which product is being edited
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          navigate("/login");
          return;
        }

        const result = await response.json();
        setUser(result);
      } catch (error) {
        console.error(error.message);
        navigate("/login");
      }
    };

    const loadProducts = async () => {
      try {
        const data = await fetchProductsIn(); // Fetch products using the service
        setProductsIn(data); // Set fetched products in state
      } catch (error) {
        console.error("Error fetching products", error);
        setProductsIn([]); // Reset products on error
      }
    };

    if (token) {
      fetchUser();
      loadProducts();
    } else {
      navigate("/login");
    }
  }, [navigate, token]);

  const handleAddOrUpdateProduct = async (event) => {
    event.preventDefault();
    try {
      if (editProductId) {
        // Update existing product
        const updatedData = {
          product_code: productCode,
          quantity: quantity,
          unit_price: unitPrice,
        }; // Prepare updated data
        await updateProductIn(editProductId, updatedData); // Call updateProduct from services

        // Update local state with updated product information
        setProductsIn(
          productsIn.map((product) =>
            product._id === editProductId
              ? {
                  ...product,
                  product_code: productCode,
                  quantity: quantity,
                  unit_price: unitPrice,
                }
              : product
          )
        );

        // Reset edit state
        setEditProductId(null);
      } else {
        // Add new product
        const newProduct = await addProductIn(productCode, quantity, unitPrice); // Call addProduct from services
        setProductsIn([...productsIn, newProduct]); // Update state with new product
      }

      setproductCode(""); // Clear input field after submission
      setQuantity("");
      setUnitPrice("");
    } catch (error) {
      console.error(
        editProductId ? "Error updating product:" : "Error adding product:",
        error
      );
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProductIn(id); // Call deleteProduct from services
      setProductsIn(productsIn.filter((product) => product._id !== id)); // Remove deleted product from state
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEditProduct = (product) => {
    setEditProductId(product._id); // Set the ID of the product being edited
      setproductCode(product.product_code); // Set the current name of the product in input field
      setQuantity(product.quantity);
      setUnitPrice(product.unit_price);
  };

  return (
    <div>
      {/* Modal for Adding/Editing Product */}
      <div
        className={`${
          visible ? "block" : "hidden"
        } fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50`}
      >
        <div className="bg-white p-10 flex flex-col gap-5 rounded-2xl w-[700px] z-10 shadow-lg">
          <h1 className="font-jetBrains text-3xl font-extrabold">
            {editProductId ? "Edit Product" : "Add New Product"}
          </h1>
          <form
            onSubmit={handleAddOrUpdateProduct}
            className="flex flex-col gap-3"
          >
            <input
              type="text"
              placeholder="Add or edit a product code..."
              value={productCode}
              onChange={(e) => setproductCode(e.target.value)} // Update input value
              className="w-full rounded-xl p-4 font-jetBrains bg-slate-500/20 border-none"
            />
            <input
              type="text"
              placeholder="Add or edit a quantity..."
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)} // Update input value
              className="w-full rounded-xl p-4 font-jetBrains bg-slate-500/20 border-none"
            />
            <input
              type="text"
              placeholder="Add or edit a unit price..."
              value={unitPrice}
              onChange={(e) => setUnitPrice(e.target.value)} // Update input value
              className="w-full rounded-xl p-4 font-jetBrains bg-slate-500/20 border-none"
            />
            <button
              type="submit"
              className="bg-lime-400 p-4 w-full rounded-xl font-extrabold font-jetBrains hover:bg-lime-500 transition duration-200"
            >
              {editProductId ? "Update Product" : "Add Product"}
            </button>
          </form>
        </div>
      </div>

      {/* Table of Products */}
      <div className="w-full">
        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-slate-900">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-lime-400 bg-gray-100 border-gray-300 rounded focus:ring-lime-400 dark:focus:ring-lime-400 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  Product Name
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Product Code
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Unit price
                </th>
                <th scope="col" className="px-6 py-3">
                  Total price
                </th>
                <th scope="col" className="px-6 py-3">
                  Created At
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {productsIn.map((product, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id={`checkbox-table-search-${index}`}
                        type="checkbox"
                        className="w-4 h-4 text-lime-400 bg-gray-100 border-gray-300 rounded focus:ring-lime-400 dark:focus:ring-lime400 dark:ring-offset-gray-800 dark:focus:ring-offset-gray800 focus:ring2 dark:bg-gray700 dark:border-gray600"
                      />
                      <label
                        htmlFor={`checkbox-table-search-${index}`}
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  {/* <th
                    scope="row"
                    className="px6 py4 font-medium textgray900 whitespace-nowrap dark:textwhite"
                  >
                    {product.product_name}
                  </th> */}
                  <td className="px6 py4">{product.product_code}</td>
                  <td className="px6 py4">{product.quantity}</td>
                  <td className="px6 py4">{product.unit_price}</td>
                  <td className="px6 py4">{product.total_price}</td>
                  <td className="px6 py4">
                    {new Date(product.createdAt).toLocaleDateString()}
                  </td>{" "}
                  {/* Format date */}
                  <td className="px6 py4 flex items-center gap8 text-xl">
                    {/* Edit Button */}
                    <a
                      href="#"
                      onClick={() => handleEditProduct(product)}
                      className="font-medium text-slate900 dark:text-lime400 hover:underline hover:text-lime400"
                    >
                      <BiPen />
                    </a>
                    {/* Delete Button */}
                    <a
                      href="#"
                      onClick={() => handleDeleteProduct(product._id)}
                      className="font-medium text-slate900 dark:text-lime400 hover:underline hover:text-lime400 transition-all ease-in-out duration300"
                    >
                      <BiTrash />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls Here */}
          {/* Add your pagination logic here */}
        </div>
      </div>
    </div>
  );
};

export default TableIn;
