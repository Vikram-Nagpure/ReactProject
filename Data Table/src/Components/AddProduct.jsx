import React, { useState } from 'react';
import axios from 'axios';
import './addproduct.css';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('http://localhost:3000/posts', {
        title,
        price: parseFloat(price),
        description,
        category,
        image,
      });

      setTitle('');
      setPrice('');
      setDescription('');
      setCategory('');
      setImage('');
      setLoading(false);
      setError('');
      alert('Product added successfully!');
    } catch (error) {
      setLoading(false);
      setError('Error adding product. Please try again.');
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="add-product-container">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <button type="submit">Add Product</button>
        )}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default AddProduct;
