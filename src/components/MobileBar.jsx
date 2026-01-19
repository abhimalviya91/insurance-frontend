import "./MobileBar.css";

const MobileBar = () => {
  return (
    <div className="mobile-bar">
      <a href="tel:9876543210" className="mobile-btn call">
        📞 Call
      </a>
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="mobile-btn whatsapp"
      >
        💬 WhatsApp
      </a>
    </div>
  );
};

export default MobileBar;
