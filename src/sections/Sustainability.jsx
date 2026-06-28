import { motion } from "framer-motion";

function Sustainability() {
  return (
    <section className="bg-zinc-950 text-white py-32 px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="text-[180px]">
              🌱
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-8">
              Sustainability & Environmental Impact
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              MDS Packaging promotes environmentally responsible
              packaging solutions through recyclable materials and
              sustainable manufacturing practices.
            </p>

            <div className="space-y-5">

              <div className="flex gap-4">
                <span className="text-green-400">✓</span>
                <p>Promoting recyclable paper-based packaging materials</p>
              </div>

              <div className="flex gap-4">
                <span className="text-green-400">✓</span>
                <p>Reducing dependence on plastic packaging</p>
              </div>

              <div className="flex gap-4">
                <span className="text-green-400">✓</span>
                <p>Encouraging sustainable packaging practices</p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Sustainability;