import CtaButton2 from "./CtaButton2";
export default function CtaCard() {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <section className="flex flex-col items-center bg-accessCardBgColor mx-5 pb-9  rounded translate-y-40 md:max-w-4xl md:mx-auto">
      <h2 className="text-textColor font-main font-bold text-lg mt-10 md:text-[2rem]">
        Get early access today
      </h2>
      <p className="text-textColor font-secondary text-md text-center mt-4 mb-8 mx-7 md:max-w-[80ch]">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row lg:items-center lg:gap-7"
      >
        <input
          required
          type="text"
          placeholder="email@example.com"
          className=" rounded-full h-12 w-[17.5rem] pl-8 mb-6 text-accessCardInputColor placeholder:text-accessCardInputColor font-secondary text-sm lg:mb-0 lg:w-[30rem] required:border required:border-[red]"
        />
        <CtaButton2 />
      </form>
    </section>
  );
}
