export default function FooterLinks() {
  return (
    <section className="mx-7 mt-14 lg:flex lg:space-x-16 lg:mx-0">
      <ul className="mb-12 flex flex-col gap-4">
        <li className="text-textColor font-secondary hover:underline">
          <a href="#">About us</a>
        </li>
        <li className="text-textColor font-secondary hover:underline">
          <a href="#">Jobs</a>
        </li>
        <li className="text-textColor font-secondary hover:underline">
          <a href="#">Press</a>
        </li>
        <li className="text-textColor font-secondary hover:underline">
          <a href="#">Blog</a>
        </li>
      </ul>
      <ul className="flex flex-col gap-4">
        <li className="text-textColor font-secondary hover:underline">
          <a href="#">Contact us</a>
        </li>
        <li className="text-textColor font-secondary hover:underline">
          <a href="#">Terms</a>
        </li>
        <li className="text-textColor font-secondary hover:underline">
          <a href="#">Privacy</a>
        </li>
      </ul>
    </section>
  );
}
