const FloatingWhatsApp = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5565996720567', '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <i className="bi bi-whatsapp text-2xl"></i>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
    </button>
  );
};

export default FloatingWhatsApp;