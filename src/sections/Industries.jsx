import { motion } from "framer-motion";
import {
  ShoppingCart,
  Pill,
  Truck,
  Utensils,
  Cpu,
  Package,
} from "lucide-react";

function Industries() {
  const industries = [
  {
    icon: ShoppingCart,
    title: "FMCG",
    description:
      "Packaging solutions for fast-moving consumer products.",
  },
  {
    icon: Pill,
    title: "Pharmaceuticals",
    description:
      "Safe and reliable packaging for healthcare products.",
  },
  {
    icon: Truck,
    title: "E-Commerce",
    description:
      "Durable packaging designed for shipping and logistics.",
  },
  {
    icon: Utensils,
    title: "Food Processing",
    description:
      "Protective packaging for food manufacturing businesses.",
  },
  {
    icon: Cpu,
    title: "Electronics",
    description:
      "Secure packaging for sensitive electronic products.",
  },
  {
    icon: Package,
    title: "Consumer Goods",
    description:
      "Customized packaging solutions for everyday products.",
  },
];

  return (
    <section id="industries" className="bg-zinc-950 py-32 px-8 text-white"
>
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-6">
          Industries We Serve
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          Delivering customized corrugated packaging solutions
          across diverse industries.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center hover:scale-105 hover:border-green-400/30 hover:bg-white/10 transition-all duration-300"
              >
                <Icon
                  size={48}
                  className="mx-auto text-green-400 mb-5"
                />

                <h3 className="text-2xl font-semibold mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-400">
                    {industry.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Industries;