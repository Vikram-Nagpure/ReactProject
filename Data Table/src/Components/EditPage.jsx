import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    image: '',
    title: '',
    price: '',
    category: '',
    description: '',
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/posts/${id}`, product);
      navigate('/product');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="edit-page-container">
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={product.image}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a category</option>
            <option value="Electronics">Electronics</option>
            <option value="Jewellery">Jewellery</option>
            <option value="Home And Kitchen">Home And Kitchen</option>
            <option value="Health And Wellness">Health And Wellness</option>
            <option value="Books Music And Movies">Books Music And Movies</option>
            <option value="Women Fashion">Women Fashion</option>
            <option value="Automotive">Automotive</option>
            <option value="Office Supplies">Office Supplies</option>
            <option value="Beauty And Personal Care">Beauty And Personal Care</option>
            <option value="Groceries">Groceries</option>
            <option value="Men Fashion">Men Fashion</option>
            <option value="Sports And Outdoors">Sports And Outdoors</option>
            <option value="Toys And Games">Toys And Games</option>
            <option value="Pet Supplies">Pet Supplies</option>
            <option value="Garden And Outdoor">Garden And Outdoor</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditPage;
