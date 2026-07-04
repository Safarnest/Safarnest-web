import SearchBar from "../../components/forms/SearchBar";

function SearchSection() {
  return (
    <section className="relative z-20 -mt-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SearchBar />
      </div>
    </section>
  );
}

export default SearchSection;