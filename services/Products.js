const Products = require('../models/Products');

const getAllProducts = () => {
  const response = Products.getAll();
  return response;
};

const getProductById = (id) => {
  const response = Products.getById(id);
  return response;
};

const postProduct = (name, quantity) => {
  const response = Products.postProduct(name, quantity);
  return response;
};

const putProduct = (name, quantity, id) => {
  const response = Products.putProduct(name, quantity, id);
  return response;
};

module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
  putProduct,
};
