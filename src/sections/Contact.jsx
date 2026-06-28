import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="bg-zinc-950 text-white py-32 px-8"
>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            Get In Touch
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to discuss your packaging requirements?
            Contact MDS Packaging for customized corrugated
            packaging solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10"
          >
            <h3 className="text-3xl font-semibold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div>
                <p className="text-green-400 mb-1">
                  Phone
                </p>
                <p>+91 79059 00830</p>
              </div>
              <br />
              <br />

              <div>
                <p className="text-green-400 mb-1">
                  Email
                </p>
                <p>mdspakaging1698@gmail.com</p>
              </div>
              <br />
              <br />
              <div>
                <p className="text-green-400 mb-1">
                  WhatsApp
                </p>
                <p>+91 91983 83331</p>
              </div>

            </div>
          </motion.div>

          {/* Inquiry Form */}

          <motion.form action="https://formsubmit.co/mdspackaging1698@gmail.com" method="POST"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10"
          >
            <h3 className="text-3xl font-semibold mb-8">
              Send Inquiry
            </h3>

            <div className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3"
              />
              
              <input
                type="hidden"
                name="_subject"
                value="New Inquiry from MDS Packaging Website"
                />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />
              <input
                type="hidden"
                name="_next"
                value="https://mds-packaging-website.vercel.app/#contact"
              />
              <textarea
                rows="5"
                name="message"
                placeholder="Your Requirement"
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 focus:border-green-400 focus:outline-none transition"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-green-500 py-3 font-semibold hover:bg-green-600 transition"
              >
                Submit Inquiry
              </button>

            </div>
          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;