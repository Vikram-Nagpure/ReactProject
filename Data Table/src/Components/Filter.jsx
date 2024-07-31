import React from 'react';


const Filter = ({
  searchQuery,
  setSearchQuery,
  sortOption,
  setSortOption,
  selectedCategories,
  setSelectedCategories,
  clearAllFilters,
  categories,
}) => {
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const divideIntoColumns = (categories) => {
    const itemsPerColumn = Math.ceil(categories.length / 3);
    const columns = [[], [], []];

    categories.forEach((category, index) => {
      const columnIndex = Math.floor(index / itemsPerColumn);
      columns[columnIndex].push(category);
    });

    return columns;
  };

  const dividedCategories = divideIntoColumns(categories);

  return (
    <div className="filter-container">
      <div className="filter-row">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <div className="sort-container">
          <label htmlFor="sortSelect" className="sort-label">Sort By:</label>
          <select
            id="sortSelect"
            value={sortOption}
            onChange={handleSortChange}
            className="sort-select"
          >
            <option value="default">Default</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            
          </select>
        </div>
      </div>
      <div className="categories-container">
        {dividedCategories.map((column, columnIndex) => (
          <div key={columnIndex} className="category-column">
            {column.map((category) => (
              <div key={category} className="category-item">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  id={category}
                />
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="clear-button" onClick={clearAllFilters}>
        Clear All
      </button>
    </div>
  );
};

export default Filter;
