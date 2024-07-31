import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Description = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '40px auto',
    transition: 'all 0.3s ease',
  };

  const hoverContainerStyle = {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  };

  const imageStyle = {
    width: '300px',
    height: '400px', 
    borderRadius: '10px',
    marginBottom: '20px',
    transition: 'transform 0.3s ease',
  };

  const hoverImageStyle = {
    transform: 'scale(1.05)',
  };

  const detailsStyle = {
    textAlign: 'center',
    color: '#333',
  };

  const titleStyle = {
    fontSize: '2.1rem',
    marginBottom: '15px',
    color: '#333',
    fontWeight: 700,
  };

  const priceStyle = {
    fontSize: '2rem',
    color: '#27ae60',
    marginBottom: '15px',
    fontWeight: 600,
  };

  const categoryStyle = {
    fontSize: '1.2rem',
    color: '#007185',
    marginBottom: '20px',
    fontWeight: 500,
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#666',
    lineHeight: 1.6,
    maxWidth: '600px',
    margin: '0 auto',
    marginTop: '10px',
    fontWeight: 400,
  };

  const mediaQueryStyle = window.innerWidth >= 768 ? {
    flexDirection: 'row',
    alignItems: 'flex-start',
  } : {};

  const mediaImageStyle = window.innerWidth >= 768 ? {
    maxWidth: '50%',
    marginRight: '20px',
  } : {};

  const mediaDetailsStyle = window.innerWidth >= 768 ? {
    maxWidth: '50%',
    textAlign: 'left',
  } : {};

  return (
    <div style={{ ...containerStyle, ...mediaQueryStyle }} className="description-container">
      <img
        src={product.image}
        alt={product.title}
        style={{ ...imageStyle, ...mediaImageStyle }}
        className="product-image"
        onMouseOver={(e) => e.currentTarget.style.transform = hoverImageStyle.transform}
        onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
      />
      <div style={{ ...detailsStyle, ...mediaDetailsStyle }} className="product-details">
        <h1 style={titleStyle} className="product-title">{product.title}</h1>
        <h2 style={priceStyle} className="product-price">$ {product.price}</h2>
        <span style={categoryStyle} className="product-category">{product.category.replace(/_/g, ' ')}</span>
        <p style={descriptionStyle} className="product-description">{product.description}</p>
      </div>
    </div>
  );
};

export default Description;
