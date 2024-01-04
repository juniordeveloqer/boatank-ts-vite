import { SelectedPage } from "@/shared/types";
import image1 from "@/assets/image 1.png";
import image2 from "@/assets/image 2.png";
import image3 from "@/assets/image 3.png";
import image4 from "@/assets/image 4.png";
import image5 from "@/assets/image 5.png";
import image6 from "@/assets/image 6.png";
import image7 from "@/assets/image 7.png";
import image8 from "@/assets/image 8.png";
import image9 from "@/assets/image 9.png";
import image10 from "@/assets/image 10.png";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Mostpopularbrands = (setSelectedPage: Props) => {
  return (
    <section className="relative w-full">
      <div className="relative mx-auto mb-64  w-full max-w-7xl p-20  ">
        <div className="mt-8 mb-8   text-3xl font-semibold">
          <div className=" mb-32 text-4xl font-semibold">
            <h3>Most Popular Brands</h3>
          </div>

          <div className=" relative   xs:flex xs:justify-center   xs:gap-6 sm:block">
            <div className="my-20  flex gap-12 xxs:flex xxs:flex-wrap xs:relative xs:flex xs:w-[110px] xs:flex-wrap xs:gap-[20px] sm:w-[106px]  sm:flex-row sm:flex-nowrap  sm:gap-[20px]  md:w-32 md:gap-[52px] ">
              <img src={image1} alt="" className=" object-scale-down " />
              <img src={image2} alt="" className=" object-scale-down " />
              <img src={image3} alt="" className=" object-scale-down " />
              <img src={image4} alt="" className=" object-scale-down" />
              <img src={image5} alt="" className=" object-scale-down" />
            </div>

            <div className=" my-10 flex gap-6 xxs:flex xxs:flex-wrap xs:flex xs:w-[95px]  xs:flex-wrap xs:gap-[20px] sm:w-[105px] sm:flex-row sm:flex-nowrap sm:gap-[20px] md:w-36 md:gap-[28px]">
              <img src={image6} alt="" className=" object-scale-down" />
              <img src={image7} alt="" className=" object-scale-down" />
              <img src={image8} alt="" className=" object-scale-down" />
              <img src={image9} alt="" className=" object-scale-down" />
              <img src={image10} alt="" className=" object-scale-down" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mostpopularbrands;
