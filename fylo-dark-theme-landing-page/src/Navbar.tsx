import Logo from "./Logo";
export default function Navbar() {
  return (
    <nav className="pt-6 pr-6 px-5 pb-12 flex justify-between items-center lg:pt-20 lg:px-20">
      <div className="max-w-20 lg:max-w-44">
        <a href="#">
          <Logo />
        </a>
      </div>
      <div>
        <ul className="flex gap-6">
          <li className="text-textColor text-sm font-main lg:text-[1rem]">
            <a href="#">Features</a>
          </li>
          <li className="text-textColor text-sm font-main lg:text-[1rem]">
            <a href="#">Team</a>
          </li>
          <li className="text-textColor text-sm font-main lg:text-[1rem]">
            <a href="#">Sign In</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
