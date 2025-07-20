import GalleryCard from "./gallery-card";

const GallerySection = () => {
  const galleryItems: {
    title: string;
    description: string;
    gradientFrom: string;
    gradientTo: string;
    textColor: string;
    size: "normal" | "large";
  }[] = [
    {
      title: "Tech Headquarters",
      description: "Our modern office space driving innovation",
      gradientFrom: "from-cyan-900",
      gradientTo: "to-blue-700",
      textColor: "text-cyan-200",
      size: "large",
    },
    {
      title: "Agile Teams",
      description: "Collaborative work across global teams",
      gradientFrom: "from-indigo-900",
      gradientTo: "to-violet-700",
      textColor: "text-indigo-200",
      size: "normal",
    },
    {
      title: "Cloud Infrastructure",
      description: "Powering businesses with reliable cloud tech",
      gradientFrom: "from-slate-900",
      gradientTo: "to-sky-700",
      textColor: "text-slate-200",
      size: "normal",
    },
    {
      title: "AI & Automation",
      description: "Smarter solutions powered by AI and ML",
      gradientFrom: "from-emerald-900",
      gradientTo: "to-green-700",
      textColor: "text-emerald-200",
      size: "normal",
    },
    {
      title: "Cybersecurity",
      description: "Keeping your data safe and systems secure",
      gradientFrom: "from-red-900",
      gradientTo: "to-orange-700",
      textColor: "text-red-200",
      size: "normal",
    },
    {
      title: "Client Success",
      description: "Delivering results with dedicated support",
      gradientFrom: "from-yellow-900",
      gradientTo: "to-amber-700",
      textColor: "text-yellow-200",
      size: "normal",
    },
  ];

  return (
    <div className="relative px-8 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryCard
              key={index}
              title={item.title}
              description={item.description}
              gradientFrom={item.gradientFrom}
              gradientTo={item.gradientTo}
              textColor={item.textColor}
              size={item.size}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
