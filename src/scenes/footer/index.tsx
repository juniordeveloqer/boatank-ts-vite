import { SelectedPage } from "@/shared/types";
import logo from "@/assets/Boatank.png";
import footer from "@/assets/footer.svg";
import footer2 from "@/assets/footer2.svg";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Footer = (setSelectedPage: Props) => {
  return (
    <section className="relative w-full">
      <div>
        {/* FOOTER TOP */}
        <div className="relative bottom-32 mx-auto flex  w-full max-w-6xl  gap-28 border-b-[1px]  border-b-neutral-700 pb-10 font-semibold ">
          <div className="flex   gap-40 xxs:gap-0 xs:ml-4   xs:gap-8 sm:gap-20">
            <div className=" cursor-pointer xs:w-1/6">
              <h1 className=" mb-5  text-2xl font-semibold xs:text-sm">
                For Buyers
              </h1>
              <h3 className="mb-3 xs:text-sm ">Advanced Search</h3>
              <h3 className="mb-3 xs:text-sm ">Boat Manufacturers</h3>
            </div>

            <div className=" cursor-pointer xs:w-1/6 xs:text-sm">
              <h1 className=" mb-5 text-2xl font-semibold xs:text-base">
                For Sellers
              </h1>
              <h3 className="mb-3 xs:text-sm">Sell Your Boat</h3>
              <h3 className="mb-3 xs:text-sm">List of Prices</h3>
              <h3 className="mb-3 xs:text-sm">Ads Archice</h3>
              <h3 className="mb-3 xs:text-sm">Model Contract</h3>
              <h3>Customer Feedbacks</h3>
            </div>

            <div className=" cursor-pointer xs:w-1/6 xs:text-sm">
              <h1 className=" mb-5 text-2xl font-semibold xs:text-base">
                For Dealers
              </h1>
              <h3 className="mb-3 xs:text-sm">Dealer Account</h3>
              <h3 className="mb-3 xs:text-sm">
                Subscription Prices For dealer
              </h3>
              <h3 className="mb-3 xs:text-sm">List of Dealers</h3>
              <h3>Dealer Login</h3>
            </div>

            <div className="relative mb-5  cursor-pointer xs:w-1/6 xs:text-base">
              <h1 className=" mb-5 text-2xl font-semibold xs:text-sm">
                Service
              </h1>
              <h3 className="mb-3 xs:text-sm">Advertise With Us</h3>
              <h3 className="mb-3 xs:text-sm">İOS & Android App</h3>
              <h3>Boat Shows</h3>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="relative bottom-32 mx-auto mt-4  flex  w-full max-w-6xl gap-28 pl-4  ">
          <div className="w-">
            <div className="flex gap-20">
              <img src={logo} alt="" className="object-scale-down" />
              <img src={footer} alt="" className=" w-1/6" />
              <img src={footer2} alt="" className=" w-1/12 object-scale-down" />
            </div>

            <nav className="order-3 mt-6 w-full cursor-pointer pt-8">
              <ul className="m-0 list-none  p-0">
                <li className=" float-left mr-6 mb-1">About Us</li>
                <li className=" float-left mr-6 mb-1">Legal Notice</li>
                <li className=" float-left mr-6 mb-1">Privacy Policy</li>
                <li className=" float-left mr-6 mb-1">Cookie Settings</li>
                <li className=" float-left mr-6 mb-1">GTC</li>
                <li className=" float-left mr-6 mb-1">Security Suggestions</li>
                <li className=" float-left mr-6 mb-1">FAQ</li>
                <li className=" float-left mr-6 mb-1">Contact Us</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
