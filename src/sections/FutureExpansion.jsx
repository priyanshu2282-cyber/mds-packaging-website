import { motion } from "framer-motion";

function FutureExpansion() {
  const timeline = [
    "Factory Development",
    "Production Launch",
    "Capacity Expansion",
    "Advanced Packaging Technologies",
    "Specialty Packaging Products",
    "National & Export Markets",
  ];

  return (
    <section className="bg-black text-white py-32 px-8">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-6">
          Future Expansion Plan
        </h2>

        <p className="text-center text-gray-400 mb-20">
          Our roadmap for growth and innovation in the packaging industry.
        </p>

        <div className="relative">

          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-green-500/30"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative flex items-center gap-8 mb-12"
            >
              <div className="h-4 w-4 rounded-full bg-green-400 z-10"></div>

              <div className="rounded-2xl bg-white/5 border border-white/10 px-6 py-4 w-full">
                <h3 className="text-xl font-semibold">
                  {item}
                </h3>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FutureExpansion;