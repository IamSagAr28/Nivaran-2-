import { Check, Package } from "lucide-react";

export function MembershipPlans() {
  const plans = [
    {
      title: "Single Pickup Plan",
      regions: [
        { name: "U.P & Delhi NCR", price: "₹1,500" },
        { name: "Other States of India", price: "₹2,000" }
      ],
      features: [
        "One carton for storing used pooja materials at home shall be sent to you",
        "Weight of packed carton which you can give us should be upto 6kg",
        "Validity: 3 months",
        "You can even custom your gift box and select products worth Rs.600 from our catalogue"
      ],
      popular: false
    },
    {
      title: "Double Pickup Plan",
      regions: [
        { name: "U.P & Delhi NCR", price: "₹2,100" },
        { name: "Other States of India", price: "₹2,500" }
      ],
      features: [
        "Everything same as Single Pickup Plan",
        "Two cartons for storing used pooja materials at home shall be sent to you",
        "Weight of packed carton which you can give us should be upto 6kg",
        "Validity: 6 months"
      ],
      popular: true
    },
    {
      title: "Four Pickup Plan",
      regions: [
        { name: "U.P & Delhi NCR", price: "₹3,500" },
        { name: "Other States of India", price: "₹4,000" }
      ],
      features: [
        "Everything same as Single Pickup Plan",
        "Four cartons for storing used pooja materials",
        "Weight of packed carton which you can give us should be upto 6kg",
        "Validity: 12 months",
        "Priority pickup scheduling"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#dad7cd]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-[#a3b18a] text-[#344e41] rounded-full mb-4">
            <span className="text-sm">Join Our Mission</span>
          </div>
          <h2 className="text-4xl mb-4 text-[#344e41]">
            Annual Membership Plans - Pan India
          </h2>
          <p className="text-lg text-[#3a5a40] max-w-3xl mx-auto">
            Adopt our Membership plans, so that we can keep doing this work and establish a Circular Economy. 
            Let's STOP the disrespect of POOJA NIRMALYA and see the Magic of Upcycling.
          </p>
          <p className="text-sm text-[#588157] mt-4 italic">
            Just give us a call whenever your carton is full & we'll schedule a pickup within a year
          </p>
        </div>

        {/* Membership Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular ? 'ring-4 ring-[#588157]' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#588157] text-white px-6 py-2 rounded-bl-2xl">
                  <span className="text-sm">Most Popular</span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Icon */}
                <div className="w-16 h-16 bg-[#a3b18a] rounded-full flex items-center justify-center mb-6">
                  <Package className="w-8 h-8 text-[#344e41]" />
                </div>

                {/* Plan Title */}
                <h3 className="text-2xl mb-6 text-[#344e41]">
                  {plan.title}
                </h3>

                {/* Pricing for Both Regions */}
                <div className="mb-6 space-y-3">
                  {plan.regions.map((region, idx) => (
                    <div 
                      key={idx}
                      className="bg-[#dad7cd] rounded-lg p-4"
                    >
                      <p className="text-sm text-[#3a5a40] mb-1">{region.name}</p>
                      <p className="text-3xl text-[#344e41]">{region.price}</p>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-[#588157] rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-sm text-[#3a5a40]">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 rounded-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#588157] text-white hover:bg-[#3a5a40]'
                    : 'bg-[#dad7cd] text-[#344e41] hover:bg-[#a3b18a]'
                }`}>
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8 max-w-2xl">
            <h4 className="text-xl mb-4 text-[#344e41]">
              Nivaran is committed to promote Sustainability
            </h4>
            <p className="text-[#3a5a40] mb-4">
              We encourage women from less privileged background to acquire new skills and giving them opportunity to earn by this.
            </p>
            <p className="text-sm text-[#588157]">
              Need help choosing? Contact us for personalized assistance
            </p>
            <button className="mt-6 px-8 py-3 bg-[#3a5a40] text-white hover:bg-[#344e41] rounded-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
