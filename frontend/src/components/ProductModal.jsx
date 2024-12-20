import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselData from "../data/CarousalData"; // Adjust path as needed
import './ProductModal.css'

const ProductModal = ({
    showModal,
    onClose,
    productName,
    category,
    carouselImages,
    tableData,
  }) => {
    if (!showModal) return null;
  
    return (
        
        <div className="modal-overlay">
        {console.log('check')}
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
          <div className="modal-body">
            {/* Left Carousel */}
            <div className="modal-carousel">
              <Carousel 
                showArrows={true} 
                autoPlay={true} 
                infiniteLoop={true} 
                showThumbs={false} // Hides thumbnails
              >
                {carouselImages?.map((image, index) => (
                  <div key={index}>
                    <img  style={{objectFit:'contain'}} src={image} alt={`Slide ${index + 1}`} />
                  </div>
                ))}
              </Carousel>
            </div>
      
            {/* Right Content */}
            <div className="modal-details">
              <h4 className="modal-category">{category}</h4>
              <h2 className="modal-title">{productName}</h2>
              <table className="modal-table">
                <thead>
                  <tr>
                    <th>Product Code</th>
                    <th>Size (in mm)</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.productCode}</td>
                      <td>{row.size}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    );
  };
  
  export default ProductModal;