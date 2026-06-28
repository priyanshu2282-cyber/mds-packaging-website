import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-32 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-8">
            Who We Are
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
            MDS Packaging Private Limited is a packaging manufacturing company
            focused on delivering high-quality corrugated boxes and customized
            packaging solutions for FMCG, pharmaceutical, e-commerce, food
            processing and consumer goods industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10 hover:scale-105 transition"
          >
            <h3 className="text-3xl font-bold mb-4 text-green-400">
              Vision
            </h3>

            <p className="text-gray-300 leading-relaxed">
              To become a leading provider of innovative, sustainable,
              and cost-effective corrugated packaging solutions in India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10 hover:scale-105 transition"
          >
            <h3 className="text-3xl font-bold mb-4 text-blue-400">
              Mission
            </h3>

            <p className="text-gray-300 leading-relaxed">
              To manufacture high-strength corrugated boxes, provide
              customized packaging solutions, promote eco-friendly
              products and support industries with reliable packaging.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;