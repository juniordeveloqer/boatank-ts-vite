import { SelectedPage } from "@/shared/types";
import wave from "@/assets/wave.png"
import img1 from "@/assets/img1.png"
import img2 from "@/assets/img2.png"


type Props = {    setSelectedPage: (value: SelectedPage) => void;
}

const Boatmarket = (setSelectedPage: Props) => {
  return <section
  className="relative full">
   
   <div className="w-full relative mx-auto p-20 max-w-7xl mb-16">
     
     <div className="flex mt-8 mb-8   text-4xl font-semibold relative">

        <div className="relative w-[300px] " > 
        <h1>Your Used Boat Market</h1>
       </div>
        
        <div className="absolute left-60 -bottom-[20px] ml-5"><img src={wave} alt="" className="" /></div>
     </div>
     {/* BAŞLIK BİTİŞ */}



    

{/* PARAGRAF BİTİŞ */}
    
     <div className="flex">
        <div className="mr-10">
            <h3 className="font-semibold  mb-16 ">With over 22'000 used boats and more than 700 professional boat dealers across Europe, Boat24 helps you find the right boat.</h3>
            <img src={img2} alt="" />
            <h2 className="font-semibold my-5">DO You Want to sell Your Boat?</h2>
            <p className="font-semi my-5">just a few clicks will place your advertisement on one of europe’s largest marketplaces for new and used motor and sail boats</p>
            <p className="font-semi text-[#0466d8] cursor-pointer">Place Your Ad </p>
        </div>


        <div>
            <h3 className="font-semibold mb-16">Whether you want to buy or sell, whether you search by computer or on the go using our free iPhone app, Boat24 offers you the boat market you want. Boat24, for all boat lovers!</h3>
            <img src={img1} alt="" />
            <h2 className="font-semibold my-5">Sales Contract for Used Boats</h2>
            <p className="font-semi my-5">Sales Contract for Used Boats</p>
            <p className="font-semi text-[#0466d8] cursor-pointer">Model Contract</p>
        </div>

     </div>
     {/* SEC BİTİŞ */}

   </div>

  </section>  
}

export default Boatmarket