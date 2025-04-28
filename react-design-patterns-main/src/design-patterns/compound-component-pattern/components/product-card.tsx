import { FC, PropsWithChildren } from "react";

type ProductImageProps = {
  src: string;
  alt: string;
};

type ProductCardProps = {
  Image: FC<ProductImageProps>;
  Title: FC<PropsWithChildren>;
  Price: FC<PropsWithChildren>;
  Description: FC<PropsWithChildren>;
};

const ProductCard: FC<PropsWithChildren> & ProductCardProps = ({ children }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border">
      {children}
    </div>
  );
};

const ProductImage: FC<ProductImageProps> = ({ src, alt }) => (
  <img className="w-full h-48 object-cover" src={src} alt={alt} />
);

const ProductTitle: FC<PropsWithChildren> = ({ children }) => (
  <h2 className="text-xl font-semibold px-4 py-2">{children}</h2>
);

const ProductPrice: FC<PropsWithChildren> = ({ children }) => (
  <p className="text-green-600 px-4 py-2 text-lg font-bold">{children}</p>
);

const ProductDescription: FC<PropsWithChildren> = ({ children }) => (
  <p className="text-gray-700 px-4 py-2">{children}</p>
);

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Price = ProductPrice;
ProductCard.Description = ProductDescription;

export default ProductCard;
