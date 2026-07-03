import PackageHero from "../sections/packages/PackageHero";
import PackageFilter from "../sections/packages/PackageFilter";
import PackageGrid from "../sections/packages/PackageGrid";
import WhyBookUs from "../sections/packages/WhyBookUs";

function Packages() {
  return (
    <>
      <PackageHero />
      <PackageFilter />
      <PackageGrid />
      <WhyBookUs />
    </>
  );
}

export default Packages;