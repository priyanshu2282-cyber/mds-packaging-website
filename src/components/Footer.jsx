function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold">
              MDS Packaging
            </h3>

            <p className="mt-4 text-gray-400">
              Innovative, sustainable and reliable corrugated
              packaging solutions for modern industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-2 text-gray-400">
              <a href="#about">About</a>
              <a href="#products">Products</a>
              <a href="#industries">Industries</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              Contact
            </h4>

            <div className="space-y-2 text-gray-400">
              <p>📞 +91 79059 00830</p>
              <p>💬 +91 91983 83331</p>
              <p>📧 mdspakaging1698@gmail.com</p>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-500">
          © 2026 MDS Packaging Private Limited. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;