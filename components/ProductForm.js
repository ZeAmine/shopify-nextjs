import { useState } from 'react'

//component
import ProductOptions from "./ProductOptions";

//utils
import { formatter } from "../utils/helpers";

const ProductForm = ({ product }) => {
  const allVariantOption = product.variants.edges?.map(variant => {
    const allOptions = {};

    variant.node.selectedOptions.map(item => {
      allOptions[item.name] = item.value
    })

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.price,
      variantQuantity: 1,
    }
  })

  const defaultValues = {};

  product.options.map(item => {
    defaultValues[item.name] = item.values[0]
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOption[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  const setOptions = (name, value) => {
    setSelectedOptions(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  return (
    <div className="rounded-2xl p-4 shadow-lg flex flex-col w-full md:w-1/3">
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <span className="pb-6">{formatter.format(product.variants.edges[0].node.price)}</span>
      {product.options.map(({ name, values }) => (
        <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
          setOptions={setOptions}
        />
      ))}
      <button className="bg-black rounded-lg text-white px-2 py-3 hover:bg-gray-800">
        Add To Card
      </button>
    </div>
  );
};

export default ProductForm;
