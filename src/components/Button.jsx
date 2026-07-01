function Button({ text }) {
  return (
    <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold transition">
      {text}
    </button>
  );
}

export default Button;