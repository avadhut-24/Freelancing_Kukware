import React from 'react';
import './CategoryFilter.css'

function CategoryFilter({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="category-filter">
      <button onClick={() => setActiveCategory("All")}>
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={activeCategory === category ? "active" : ""}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
