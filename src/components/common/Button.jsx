function Button({
  text,
  secondary = false,
}) {
  return (
    <button
      className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 cursor-pointer
      ${
        secondary
          ? "bg-white/10 backdrop-blur-md border border-white text-white hover:bg-white hover:text-blue-900"
          : "bg-yellow-400 text-black hover:bg-yellow-500 shadow-xl hover:shadow-yellow-500/40"
      }
      hover:-translate-y-1 active:scale-95`}
    >
      {text}
    </button>
  );
}

export default Button;