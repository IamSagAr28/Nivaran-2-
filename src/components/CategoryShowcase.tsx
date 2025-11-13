import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CategoryShowcase() {
  const categories = [
    {
      name: "Bags & Pouches",
      image: "https://images.unsplash.com/photo-1758487424832-a53ae6cdefdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGhhbmRtYWRlJTIwYmFnc3xlbnwxfHx8fDE3NjMwMzEyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Notebooks & Journals",
      image: "https://images.unsplash.com/photo-1668893973066-95b14ce86e71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMG5vdGVib29rc3xlbnwxfHx8fDE3NjMwMzEyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Home Decor",
      image: "https://images.unsplash.com/photo-1633878353628-5fc8b983325c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMHByb2R1Y3RzfGVufDF8fHx8MTc2MzAxMDc4OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1665702860632-4dfcd4b2d869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhc2hpb24lMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NjMwMzEyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-3 text-[#344e41]">Shop by Category</h2>
          <p className="text-[#3a5a40]">Explore our diverse range of eco-friendly products</p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-[#dad7cd]/30 rounded-lg mb-4 overflow-hidden">
                {/* REPLACE WITH YOUR CATEGORY IMAGE */}
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg mb-2 text-[#344e41]">{category.name}</h3>
                <button className="mt-2 px-6 py-2 bg-[#588157] text-white text-sm hover:bg-[#3a5a40] rounded-lg transition-colors">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
