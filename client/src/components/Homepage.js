import NavLef from "./NavLeft/NavLeft";
import NavRight from "./NavRight/NavRight";
import Main from "./Main/Main";
import { HashLoader } from "react-spinners";
import { useEffect, useState } from "react";
function Homepage() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2200);
  });
  return (
    <div
      className={
        "grid grid-cols-4 bg-gradient-to-br bg-fixed from-orange-300 to-pink-200 relative"
      }
    >
      <div
        className={`h-screen fixed top-0 w-screen z-10 items-center justify-center ${
          loading ? "hidden" : "flex"
        }`}
      >
        <HashLoader
          color="#00FFF6"
          size={100}
          className="relative left-1/2 z-20"
        />
        <img src="/background.png" alt="bg" className="w-screen" />
      </div>
      <NavLef />
      <Main />
      <NavRight />
    </div>
  );
}

export default Homepage;
