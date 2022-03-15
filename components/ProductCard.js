import Link from 'next/link';
import Image from 'next/image';

//utils
import {formatter} from "../utils/helpers";

const ProductCard = ({ product }) => {
  const { handle, title } = product;
  const { altText, originalSrc } = product.images.edges[0].node;
  const price = product.priceRange.minVariantPrice.amount

  return (
    <Link href={`/products/${handle}`}>
      <a className="group">
        <div className="w-full bg-gray-200 rounded-3xl overflow-hidden">
          <div className="relative group-hover:opacity-75 h-72">
            <Image src={originalSrc} alt={altText} layout="fill" objectFit="cover"/>
          </div>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mt4">{title}</h3>
        <p className="text-sm text-gray-700 mt-1">{formatter.format(price)}</p>
      </a>
    </Link>
  );
};

export default ProductCard;
