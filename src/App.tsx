import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import { SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";
import Categories from "./scenes/categories";
import Boatmarket from "./scenes/boatmarket";
import Mostpopularbrands from "./scenes/mostpopularbrands";
import Footer from "./scenes/footer";



function App() {
 const [selectedPage, setSelectedPage] = useState<SelectedPage>(
  SelectedPage.Sell
 );
 const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

 useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Sell);
    }
    if (window.scrollY !== 0) setIsTopOfPage(false);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div className="app ">
      <Navbar
        isTopOfPage={isTopOfPage}
         selectedPage={selectedPage}
         setSelectedPage={setSelectedPage}
      />
      <Home  setSelectedPage={setSelectedPage}
      />
      <Categories setSelectedPage={setSelectedPage}/>

      <Boatmarket setSelectedPage={setSelectedPage}/>
      
      <Mostpopularbrands setSelectedPage={setSelectedPage}/>

      <Footer setSelectedPage={setSelectedPage}/>

    </div>
  );
  }

export default App;