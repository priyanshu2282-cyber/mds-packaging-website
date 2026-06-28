import { motion } from "framer-motion";
import {
  Package,
  Leaf,
  ShieldCheck,
  Settings,
} from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: Package,
      title: "Customized Solutions",
      description:
        "Packaging designed according to your product requirements.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description:
        "Sustainable and recyclable packaging materials.",
    },
    {
      icon: ShieldCheck,
      title: "High Durability",
      description:
        "Strong corrugated boxes for safe transportation.",
    },
    {
      icon: Settings,
      title: "Modern Manufacturing",
      description:
        "Focused on quality, efficiency and innovation.",
    },
  ];

  return (
    <section className="bg-zinc-950 py-32 px-8 text-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-6">
          Why Choose MDS Packaging
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Delivering innovative, sustainable and reliable corrugated
          packaging solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-all duration-300"
              >
                <Icon
                  size={42}
                  className="text-green-400 mb-6"
                />

                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;