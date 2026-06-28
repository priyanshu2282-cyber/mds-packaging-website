import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919198383331"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-500 shadow-lg hover:scale-110 transition duration-300">
        <FaWhatsapp className="text-white text-3xl" />
      </div>
    </a>
  );
}

export default WhatsAppButton;