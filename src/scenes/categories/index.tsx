import b1 from "@/assets/b1.jpg"
import c1 from "@/assets/c1.jpg"
import b3 from "@/assets/b3.jpg"
import c2 from "@/assets/c2.jpg"
import b5 from "@/assets/b5.jpg"
import c3 from "@/assets/c3.jpg"

import { SelectedPage } from "@/shared/types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Categories = (setSelectedPage : Props) => {
  return <section
  id="categories"
  className="relative w-full">
    <div className="w-full relative mx-auto p-20 max-w-7xl mb-16 ">
     <h3 className="mt-8 mb-8   text-3xl font-semibold">
        Categories
     </h3>
     <ul className=" grid grid-cols-3 gap-x-6 gap-y-6	 mt-6 	">
        <li className=" list-item  "> 
        <div className="flex flex-col w-full">
         <div className=" block w-full cursor-pointer">
            <div className="w-full relative  rounded-2xl overflow-hidden border"> 
            <figure className="block  w-full h-0 pb-[75%] relative">
                <img src={b1} alt="" />
           </figure></div>
            
           <div className="pt-2">
               <p className=" overflow-hidden font-semibold text-xs leading-4  uppercase  text-[#0466d8] mb-1">Sport Boat</p>
               <h3 className=" text-sm leading-5 overflow-hidden  text-ellipsis mb-1 font-semibold "> <p>Invictus CX 280</p></h3>
            </div>

            <aside className="">
            <div><p className="inline mr-2 text-1xl   font-bold  text-[#000e1f94]">Min. EUR 106.000,-</p></div> 
            </aside>
         </div>
        </div>
        </li>

        <li className=" list-item  "> 
        <div className="flex flex-col   w-full">
         <div className=" block w-full cursor-pointer">
            <div className="w-full relative rounded-2xl  overflow-hidden border"> 
            <figure className="block  w-full h-0 pb-[75%] relative">
                <img src={c1} alt="" />
           </figure></div>
            
           <div className="pt-2">
               <p className=" overflow-hidden font-semibold text-xs leading-4  uppercase  text-[#0466d8] mb-1">Sport Boat</p>
               <h3 className=" text-sm leading-5 overflow-hidden  text-ellipsis mb-1 font-semibold "> <p>Invictus CX 280</p></h3>
            </div>

            <aside className="">
            <div><p className="inline mr-2 text-1xl   font-bold  text-[#000e1f94]">Min. EUR 210.000,-</p></div> 
            </aside>
         </div>
        </div>
        </li>
        <li className=" list-item "> 
        <div className="flex flex-col  w-full">
         <div className=" block w-full cursor-pointer">
            <div className="w-full relative rounded-2xl  overflow-hidden border"> 
            <figure className="block  w-full h-0 pb-[75%] relative">
                <img src={c2} alt="" />
           </figure></div>

            <div className="pt-2">
               <p className=" overflow-hidden font-semibold text-xs leading-4  uppercase  text-[#0466d8] mb-1">Sport Boat</p>
               <h3 className=" text-sm leading-5 overflow-hidden  text-ellipsis mb-1 font-semibold "> <p>Invictus CX 280</p></h3>
            </div>

            <aside className="">
            <div><p className="inline mr-2 text-1xl   font-bold  text-[#000e1f94]">Min. EUR 440.000,-</p></div> 
            </aside>
         </div>
        </div>
        </li>
        <li className=" list-item "> 
        <div className="flex flex-col  w-full">
         <div className=" block w-full cursor-pointer">
            <div className="w-full relative rounded-2xl  overflow-hidden border"> 
            <figure className="block  w-full h-0 pb-[75%] relative">
                <img src={b3} alt="" />
           </figure></div>
           
           <div className="pt-2">
               <p className=" overflow-hidden font-semibold text-xs leading-4  uppercase  text-[#0466d8] mb-1">Sport Boat</p>
               <h3 className=" text-sm leading-5 overflow-hidden  text-ellipsis mb-1 font-semibold "> <p>Invictus CX 280</p></h3>
            </div>

            <aside className="">
            <div><p className="inline mr-2 text-1xl   font-bold  text-[#000e1f94]">Min. EUR 500.000,-</p></div> 
            </aside>
         </div>
        </div>
        </li>
        <li className=" list-item   "> 
        <div className="flex flex-col  w-full">
         <div className=" block w-full cursor-pointer">
            <div className="w-full relative rounded-2xl  overflow-hidden border"> 
            <figure className="block  w-full h-0 pb-[75%] relative">
                <img src={b5} alt="" />
           </figure></div>
            
           <div className="pt-2">
               <p className=" overflow-hidden font-semibold text-xs leading-4  uppercase  text-[#0466d8] mb-1">Sport Boat</p>
               <h3 className=" text-sm leading-5 overflow-hidden  text-ellipsis mb-1 font-semibold "> <p>Invictus CX 280</p></h3>
            </div>

            <aside className="">
            <div><p className="inline mr-2 text-1xl   font-bold  text-[#000e1f94]">Min. EUR 705.000,-</p></div> 
            </aside>
         </div>
        </div>
        </li>
        <li className=" list-item "> 
        <div className="flex flex-col w-full">
         <div className=" block w-full cursor-pointer">
            <div className="w-full relative rounded-2xl  overflow-hidden border"> 
            <figure className="block  w-full h-0 pb-[75%] relative">
                <img src={c3} alt="" />
           </figure></div>
            
           <div className="pt-2">
               <p className=" overflow-hidden font-semibold text-xs leading-4  uppercase  text-[#0466d8] mb-1">Sport Boat</p>
               <h3 className=" text-sm leading-5 overflow-hidden  text-ellipsis mb-1 font-semibold "> <p>Invictus CX 280</p></h3>
            </div>

            <aside className="">
            <div><p className="inline mr-2 text-1xl   font-bold  text-[#000e1f94]">Min. EUR 320.000,-</p></div> 
            </aside>
         </div>
        </div>
        </li>
       
     </ul>
    </div>

  </section>
}

export default Categories