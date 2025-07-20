type GalleryCardProps = {
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  textColor: string;
  size: "normal" | "large";
};

const GalleryCard = ({
  title,
  description,
  gradientFrom,
  gradientTo,
  textColor,
  size = "normal",
}: GalleryCardProps) => {
  const sizeClasses = {
    normal: "h-40",
    large: "lg:col-span-2 lg:row-span-2 h-80 lg:h-full",
  };

  return (
    <div
      className={`group cursor-pointer ${
        size === "large" ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} ${sizeClasses[size]} transition-transform duration-500 group-hover:scale-105`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div
          className={`absolute ${
            size === "large" ? "bottom-6 left-6" : "bottom-4 left-4"
          } text-white`}
        >
          <h3
            className={`font-bold mb-2 ${
              size === "large" ? "text-xl" : "text-sm"
            }`}
          >
            {title}
          </h3>
          <p
            className={`${textColor} ${
              size === "large" ? "text-base" : "text-xs"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
