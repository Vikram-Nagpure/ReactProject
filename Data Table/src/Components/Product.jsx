import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './Filter';
import { Link, useNavigate } from 'react-router-dom';
import './product.css';
const Product = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedIds, setExpandedIds] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categories = [
    'Electronics','Jewellery','Women Fashion','Men Fashion'
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const postsPerPage = 4;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const getSortedData = (data) => {
    switch (sortOption) {
      case 'priceAsc':
        return [...data].sort((a, b) => a.price - b.price);
      case 'priceDesc':
        return [...data].sort((a, b) => b.price - a.price);
      case 'titleAToZ':
        return [...data].sort((a, b) => a.title.localeCompare(b.title));
      case 'titleZToA':
        return [...data].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return data;
    }
  };

  const filteredProducts = products
    .filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((product) =>
      selectedCategories.length > 0
        ? selectedCategories.includes(product.category.replace(/_/g, ' '))
        : true
    );

  const sortedProducts = getSortedData(filteredProducts);
  const currentPosts = sortedProducts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredProducts.length / postsPerPage);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleReadMore = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((el) => el !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      setProducts(products.filter((el) => el.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSortOption('default');
    setSelectedCategories([]);
  };

  return (
    <div className="product-container">
      <Filter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortOption={sortOption}
        setSortOption={setSortOption}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        clearAllFilters={clearAllFilters}
        categories={categories}
      />
      <h1 className="products-heading">Products</h1>
      <div className="grid-container">
        {currentPosts.map((el) => (
          <div className="product-card" key={el.id}>
            <Link to={`/description/${el.id}`}>
              <img src={el.image} alt={el.title} />
            </Link>
            <div className="product-details">
              <Link to={`/description/${el.id}`}>
                <h2 className="title">{el.title}</h2>
              </Link>
              <h4 className="price">$ {el.price}</h4>
              <span className="category">{el.category.replace(/_/g, ' ')}</span>
              <p className="description">
                {expandedIds.includes(el.id)
                  ? el.description
                  : `${el.description.slice(0, 100)}...`}
                {el.description.length > 100 && (
                  <button className="read-more" onClick={() => handleReadMore(el.id)}>
                    {expandedIds.includes(el.id) ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </p>
              <button className="delete-button" onClick={() => handleDelete(el.id)}>
                Delete
              </button>
              <button className="edit-button" onClick={() => handleEdit(el.id)}>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Product;
