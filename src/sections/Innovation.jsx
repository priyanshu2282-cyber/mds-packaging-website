import { motion } from "framer-motion";

function Innovation() {
  const innovations = [
    {
      title: "Customized Box Designs",
      description:
        "Packaging solutions tailored specifically to customer products.",
    },
    {
      title: "Material Optimization",
      description:
        "Efficient use of raw materials to reduce packaging costs.",
    },
    {
      title: "Eco-Friendly Packaging",
      description:
        "Sustainable and recyclable packaging solutions.",
    },
    {
      title: "Enhanced Box Strength",
      description:
        "Improved durability through modern production techniques.",
    },
    {
      title: "Damage Reduction",
      description:
        "Designed to minimize transportation and handling damage.",
    },
    {
      title: "Digital Order Support",
      description:
        "Customer-focused order management and support systems.",
    },
  ];

  return (
    <section
    id="innovation"
    className="bg-black py-32 px-8 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-6"
        >
          Innovation & Uniqueness
        </motion.h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          Leveraging innovation, sustainability and customer-focused
          packaging solutions to deliver greater value.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {innovations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-400">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Innovation;