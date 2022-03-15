import React from 'react';

const ProductPageContent = ({ product }) => {
  console.log(product)

  return (
    <div>
      {product.title}
    </div>
  );
};

export default ProductPageContent;
