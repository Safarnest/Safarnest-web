function Button({ text, secondary = false }) {
  return (
    <button
      className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl active:scale-95 ${
        secondary
          ? "bg-white text-blue-900 border-2 border-white hover:bg-gray-100"
          : "bg-yellow-400 text-black hover:bg-yellow-500"
      }`}
    >
      {text}
    </button>
  );
}

export default Button;