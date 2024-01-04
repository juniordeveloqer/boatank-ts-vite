
import yacht from "@/assets/26465.png"
import { SelectedPage } from "@/shared/types";
import search from "@/assets/search.svg";
import a1 from "@/assets/a1.png"
import a2 from "@/assets/a2.png"
import a3 from "@/assets/a3.png"
import a4 from "@/assets/a4.png"
import a5 from "@/assets/a5.png"
import a6 from "@/assets/a6.png"
import a7 from "@/assets/a7.png"


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    

  return <section
  id="sell"
  className="    overflow-hidden relative w-[100%] bg-gradient-to-r from-blue-500 to-cyan-500 ">
   
    <div className=" w-[100%] z-20 relative mx-auto items-center max-w-screen-xl px-6  justify-center 
    ">
 <div className=" top-32 md:absolute md:right-16 sm:absolute xs:absolute sm:right-12 sm:top-40 xs:right-12 xs:top-48  right-32 absolute   ">
 <img className=" w-[350px] sm:w-[280px] xs:w-[170px]  " src={yacht} alt="" />
 </div> 
<div className="  pt-36 pb-9 flex flex-col    max-w-[50%]">
<h1 className=" sm:text-[32px] xs:text-[20px] text-white  ">
Your dream boat is waiting for you
 <span className=" sm:text-[32px] xs:text-[20px] text-white  ">, on our boat market with more than  
 <span className=" pointer text-3xl  bg-gradient-to-r from-yellow-500 to-yellow-500 bg-bottom  bg-c bg-[length:20%_15%]   bg-repeat-x inline-block relative ">
 22'000 offers
  </span>
  </span>
</h1>
<p className=" sm:text-xl xs:text-sm mt-6 text-white ">Find your dream boat on Boat24, the user-friendly marketplace for boat lovers.</p>
</div>

{/* HERO BOX */}
<div className=" relative ">

 <div className=" flex
 ">
  <h2 className="rounded-tl-lg text-black flex items-center justify-center  h-12 pl-8 pr-8 font-semibold text-sm leading-5	uppercase	tracking-wider	bg-white cursor-pointer w-2/12	">Search</h2>
  <h2 className=" rounded-r-lg bg-[#f0f1f2]  shadow-inner 
   flex items-center justify-center  h-12 pl-8 pr-8 font-semibold text-sm leading-5	uppercase	tracking-wider	 cursor-pointer w-2/12	">Sell</h2>
 </div>
 <div className=" rounded-tr-lg rounded-br-lg rounded-bl-lg  px-4 py-4 bg-white shadow-md ">


{/*Search */}
  <div className="">
    <form action="" className="mt-0">
      <div className=" relative bg-slate-100 flex items-stretch max-w-[100%] h-16 rounded ">
        <label htmlFor="" className="flex bg-slate-100 items-center ml-4">
          <span className="top-0 mr-2 flex-shrink-0"> <img src={search} alt="" /></span>
        </label>
        <span className=" bg-slate-100  cursor-text relative inline-block w-[100%]">
          <input type="text"  placeholder="What are you looking for?  «Chris Craft» or «Passenger Ship»"  className="relative  align-top    px-4 pb-4 pt-5 w-[100%] border-none  font-normal  text-xl leading-6 bg-transparent overflow-visible	 inline-block text-start cursor-text " />
          {/* <span className="absolute p-0 border-0 h-4 w-4 -mb-4 -mr-4 overflow-hidden whitespace-nowrap "></span> */}
          {/* <pre className="absolute invisible  whitespace-pre text-[20px] normal-nums font-normal tracking-normal indent-0		  "></pre> */}
          {/* <div className="absolute top-[100%] -left-32px  z-50 hidden w-[1120px]"> */}
            {/* <div className=""></div> */}
          {/* </div> */}
        </span>
        <button className="w-[25%-6px] text-lg  leading-7 relative  font-semibold border-none rounded bg-yellow-500  inline-block px-4 py-1 cursor-pointer max-w-[100%] overflow-visible m-0 normal-case	  ">
          <span></span>
          <span className="">Search</span>
        </button>
      </div>
    </form>
  </div>
  {/* hero titles wrapper */}

  <div   className=" relative pt-4 pb-4  overflow-hidden ">

   <div  className=" gap-4  md:gap-1  xs:gap-0 items-center flex  xs:w-[150%]  overflow-hidden  ">
    <span className="  flex basis-40 flex-col items-center justify-between px-4 py-4 rounded text-center cursor-pointer bg-[#e7f3fd]">
     <img src={a1} alt="" />
     <h3 className=" text-base leading-6 overflow-hidden whitespace-nowrap text-ellipsis  text-[#0466d8]	">Sailing Boats</h3>
    </span>
    <span className=" flex basis-40 flex-col items-center justify-between px-4 py-4 rounded text-center cursor-pointer bg-[#e7f3fd]">
     <img src={a2} alt="" />
     <h3 className=" text-base leading-6 overflow-hidden whitespace-nowrap text-ellipsis  text-[#0466d8]	">Power Boats</h3>
    </span>
    <span className="  flex basis-40 flex-col items-center justify-between px-4 py-4  rounded text-center cursor-pointer bg-[#e7f3fd]">
     <img src={a3} alt=""  className="  "/>
     <h3 className=" text-base leading-6 overflow-hidden whitespace-nowrap text-ellipsis  text-[#0466d8]	">Inflatable Boats</h3>
    </span>
    <span className="  flex basis-40 flex-col items-center justify-between px-4 py-4 rounded text-center cursor-pointer bg-[#e7f3fd]">
     <img src={a4} alt="" />
     <h3 className=" text-base leading-6 overflow-hidden whitespace-nowrap text-ellipsis  text-[#0466d8]	">Small Boats</h3>
    </span>
    <span className="  flex basis-40 flex-col items-center justify-between px-4 py-4 rounded text-center cursor-pointer bg-[#e7f3fd]">
     <img src={a5} alt="" className="  " />
     <h3 className=" text-base leading-6 overflow-hidden whitespace-nowrap text-ellipsis  text-[#0466d8]	">Trailers</h3>
    </span>
    <span className=" flex basis-40 flex-col items-center justify-between px-4 py-4 rounded text-center cursor-pointer bg-[#e7f3fd]">
     <img src={a6} alt=""  />
     <h3 className=" text-base leading-6 overflow-hidden whitespace-nowrap text-ellipsis  text-[#0466d8]	">Boat Engines</h3>
    </span>
    <span className=" flex basis-40 flex-col items-center justify-between px-4 py-4 rounded text-center cursor-pointer bg-[#e7f3fd]">
     <img src={a7} alt="" />
     <h3 className=" text-base leading-6 overflow-hidden whitespace-nowrap text-ellipsis  text-[#0466d8]	">Berths</h3>
    </span>
     
   </div>

   

  </div>

 </div>
 
</div>

     </div>
 
     <div className=" -mt-12 h-24 p-0 z-10 bg-[#04409d] relative w-[100%]">

     </div>

    

  </section>

 
  
};

export default Home