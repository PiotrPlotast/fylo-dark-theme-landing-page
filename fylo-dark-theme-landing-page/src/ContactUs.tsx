import localizationImg from "./assets/images/icon-location.svg";
import phoneImg from "./assets/images/icon-phone.svg";
import emailImg from "./assets/images/icon-email.svg";

export default function ContactUs() {
  return (
    <section className="mx-7 mt-9 flex flex-col gap-4 lg:mx-0 lg:flex-row lg:space-x-12">
      <div className="flex items-center">
        <img src={localizationImg} alt="" />
        <p className="text-textColor font-secondary text-md pl-4 lg:max-w-[40ch] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center">
          <img src={phoneImg} alt="" />
          <p className="text-textColor font-secondary text-md pl-4">
            +1-543-123-4567
          </p>
        </div>
        <div className="flex items-center">
          <img src={emailImg} alt="" />
          <p className="text-textColor font-secondary text-md pl-4">
            example@fylo.com
          </p>
        </div>
      </div>
    </section>
  );
}
