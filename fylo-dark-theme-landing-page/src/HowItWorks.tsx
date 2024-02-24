import StayProductiveImg from "./StayProductiveImg";
import arrow from "./assets/images/icon-arrow.svg";
export default function HowItWorks() {
  return (
    <section className="flex flex-col items-center">
      <StayProductiveImg />
      <div>
        <h2 className="text-textColor font-main font-bold text-lg text-center mx-6 mt-12">
          Stay productive, wherever you are
        </h2>
        <p className="text-textColor text-md font-secondary mx-6 my-4">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="text-textColor text-md font-secondary mx-6">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a
          href="#"
          className="mx-6 pb-1 text-accentColor font-secondary text-sm mt-6 border-b-2 border-accentColor"
        >
          See how Fylo works
          <img src={arrow} alt="" className="inline pl-1" />
        </a>
      </div>
    </section>
  );
}
