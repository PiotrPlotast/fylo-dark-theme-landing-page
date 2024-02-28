import TestimonialCard from "./TestimonialCard";
import avatar1 from "./assets/images/profile-1.jpg";
import avatar2 from "./assets/images/profile-2.jpg";
import avatar3 from "./assets/images/profile-3.jpg";

export default function Testimonials() {
  return (
    <section className="mt-40 bg-bg-quotes bg-left-top max-w-lg mx-auto lg:max-w-7xl">
      <ul className="flex flex-col gap-6 mx-12 lg:flex-row lg:justify-center">
        <li>
          <TestimonialCard
            message="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            name="Satish Patel"
            avatar={avatar1}
            occupation="Founder & CEO, Huddle"
          />
        </li>
        <li>
          <TestimonialCard
            message="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            name="Bruce McKenzie"
            avatar={avatar2}
            occupation="Founder & CEO, Huddle"
          />
        </li>
        <li>
          <TestimonialCard
            message="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            name="Iva Boyd"
            avatar={avatar3}
            occupation="Founder & CEO, Huddle"
          />
        </li>
      </ul>
    </section>
  );
}
