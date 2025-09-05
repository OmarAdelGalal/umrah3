type CardProps = {
  title: string;
  description: string;
  price: string | number;
  image: string;
  onBuy?: () => void;
  onAddToCart?: () => void;
};

const Card = ({
  title,
  description,
  price,
  image,
  onBuy,
  onAddToCart,
}: CardProps) => {
  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden border text-right">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Body */}
      <div className="p-4">
        <p className="text-xl font-medium text-gray-900 mt-3 text-right text-[#1E5470] ">
          مصري{price}
        </p>
        <h2 className="text-lg font-semibold text-[#191919]">{title}</h2>
        <p className="text-sm text-gray-600 mt-1 ">{description}</p>
      </div>

      {/* Footer with Buttons */}
      <div className="flex gap-2 p-4 border-t">
        <button
          onClick={onBuy}
          className="flex-1 cursor-pointer text-[#34729C]  "
        >
          احجز الأن
        </button>
      </div>
    </div>
  );
};

export default Card;
