import { motion } from "framer-motion";

function Challenges() {
  const challenges = [
    {
      title: "High Packaging Costs",
      description:
        "Reduce packaging expenses through optimized material utilization.",
    },
    {
      title: "Product Damage",
      description:
        "Improve product safety with stronger corrugated packaging structures.",
    },
    {
      title: "Limited Customization",
      description:
        "Tailored packaging designed according to customer requirements.",
    },
    {
      title: "Sustainability Challenges",
      description:
        "Eco-friendly and recyclable packaging solutions for modern businesses.",
    },
  ];

  return (
    <section id="challenges" className="bg-black text-white py-32 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-6">
          Challenges We Solve
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          Many businesses struggle with packaging costs, product damage,
          limited customization and sustainability requirements.
          MDS Packaging addresses these challenges through innovative,
          cost-effective and durable packaging solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 hover:border-orange-400/30 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-orange-400">
                {challenge.title}
              </h3>

              <p className="text-gray-400">
                {challenge.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Challenges;