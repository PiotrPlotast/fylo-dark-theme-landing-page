import CtaButton2 from "./CtaButton2";
export default function CtaCard() {
  return (
    <section className="flex flex-col items-center bg-accessCardBgColor mx-5 pb-9  rounded translate-y-40">
      <h2 className="text-textColor font-main font-bold text-lg mt-10">
        Get early access today
      </h2>
      <p className="text-textColor font-secondary text-md text-center mt-4 mb-8 mx-7">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form action="" className="flex flex-col">
        <input
          type="text"
          placeholder="email@example.com"
          className=" rounded-full h-12 w-[17.5rem] pl-8 text-accessCardInputColor placeholder:text-accessCardInputColor font-secondary text-sm"
        />
        <CtaButton2 />
      </form>
    </section>
  );
}
