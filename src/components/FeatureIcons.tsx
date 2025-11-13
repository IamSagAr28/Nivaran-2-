import { Truck, ShieldCheck, RefreshCw, Headphones } from "lucide-react";

export function FeatureIcons() {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders above ₹999 across India"
    },
    {
      icon: ShieldCheck,
      title: "Quality Guaranteed",
      description: "100% handcrafted with premium materials"
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "7-day hassle-free return policy"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated customer service team"
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-[#a3b18a]/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#a3b18a]/40 rounded-full mx-auto flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-[#3a5a40]" />
              </div>
              <h3 className="text-[#344e41]">{feature.title}</h3>
              <p className="text-sm text-[#3a5a40]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
