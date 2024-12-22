import React from 'react';
import './CategoryFilter.css';

function CategoryFilter({ categories, activeCategory, setActiveCategory, counts }) {
  return (
    <div className="category-filter">
      <button
        onClick={() => setActiveCategory("All")}
        className={activeCategory === "All" ? "active" : ""}
      >
        All ({counts.total})
      </button>
      <div className="separator"></div>
      {categories.map((category, index) => (
        <React.Fragment key={category}>
          <button
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category} ({counts[category] || 0})
          </button>
          {index < categories.length - 1 && <div className="separator"></div>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default CategoryFilter;
