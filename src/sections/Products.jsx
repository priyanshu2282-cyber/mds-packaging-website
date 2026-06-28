import { motion } from "framer-motion";

function Products() {
  const products = [
    {
      title: "3 Ply Corrugated Boxes",
      description:
        "Lightweight and cost-effective packaging for everyday products.",
    },
    {
      title: "5 Ply Corrugated Boxes",
      description:
        "Enhanced strength and protection for transportation and storage.",
    },
    {
      title: "7 Ply Corrugated Boxes",
      description:
        "Heavy-duty packaging solutions for industrial applications.",
    },
    {
      title: "Printed Corrugated Boxes",
      description:
        "Custom printed boxes for branding and product presentation.",
    },
    {
      title: "Custom Packaging Solutions",
      description:
        "Tailor-made packaging designed to your exact requirements.",
    },
  ];

  return (
    <section id="products" className="bg-black text-white py-32 px-8">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-6"
        >
          Our Products
        </motion.h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          High-quality corrugated packaging solutions designed for
          durability, sustainability and performance.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-green-400">
                {product.title}
              </h3>

              <p className="text-gray-400">
                {product.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Products;