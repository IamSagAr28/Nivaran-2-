import { Recycle, Heart, Users, Award } from "lucide-react";

export function InfoBlocks() {
  return (
    <section className="py-12 bg-[#dad7cd]/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Info Block 1 */}
          <div className="flex gap-6 items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-[#a3b18a]/40 rounded-lg flex items-center justify-center">
                <Recycle className="w-8 h-8 text-[#3a5a40]" />
              </div>
            </div>
            <div className="space-y-3 flex-1">
              <h3 className="text-xl text-[#344e41]">Pooja Waste Upcycling</h3>
              <p className="text-[#3a5a40]">
                We specialize in upcycling pooja waste, repurposing discarded religious materials into high-quality, eco-friendly products including natural dyes, organic fertilizers, and artisanal crafts.
              </p>
              <button className="px-6 py-2 bg-[#588157] text-white text-sm hover:bg-[#3a5a40] rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Info Block 2 */}
          <div className="flex gap-6 items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-[#a3b18a]/40 rounded-lg flex items-center justify-center">
                <Heart className="w-8 h-8 text-[#3a5a40]" />
              </div>
            </div>
            <div className="space-y-3 flex-1">
              <h3 className="text-xl text-[#344e41]">Cultural Preservation</h3>
              <p className="text-[#3a5a40]">
                Transforming traditional practices into opportunities for positive social and environmental impact. We collaborate with temples, religious organizations, and local communities for culturally sensitive solutions.
              </p>
              <button className="px-6 py-2 bg-[#588157] text-white text-sm hover:bg-[#3a5a40] rounded-lg transition-colors">
                Our Story
              </button>
            </div>
          </div>

          {/* Info Block 3 */}
          <div className="flex gap-6 items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-[#a3b18a]/40 rounded-lg flex items-center justify-center">
                <Users className="w-8 h-8 text-[#3a5a40]" />
              </div>
            </div>
            <div className="space-y-3 flex-1">
              <h3 className="text-xl text-[#344e41]">Community Empowerment</h3>
              <p className="text-[#3a5a40]">
                We work with local communities, providing fair employment and skill development opportunities. Together, we're building a sustainable future through collaborative engagement.
              </p>
              <button className="px-6 py-2 bg-[#588157] text-white text-sm hover:bg-[#3a5a40] rounded-lg transition-colors">
                Join As Volunteer
              </button>
            </div>
          </div>

          {/* Info Block 4 */}
          <div className="flex gap-6 items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-[#a3b18a]/40 rounded-lg flex items-center justify-center">
                <Award className="w-8 h-8 text-[#3a5a40]" />
              </div>
            </div>
            <div className="space-y-3 flex-1">
              <h3 className="text-xl text-[#344e41]">Circular Economy</h3>
              <p className="text-[#3a5a40]">
                Creating a circular economy where waste is reimagined as a valuable resource. Our research-based approach ensures effective and culturally sensitive upcycling techniques.
              </p>
              <button className="px-6 py-2 bg-[#588157] text-white text-sm hover:bg-[#3a5a40] rounded-lg transition-colors">
                See Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
