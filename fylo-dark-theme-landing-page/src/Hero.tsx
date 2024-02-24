import HeroImg from "./HeroImg";
import CtaButton from "./CtaButton";
export default function Hero() {
  return (
    <section className="flex flex-col items-center">
      <HeroImg />
      <h1 className="text-textColor text-xl font-bold font-main text-center mx-7 mt-8 mb-4">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="text-textColor text-md font-main text-center mx-10">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <CtaButton />
    </section>
  );
}
