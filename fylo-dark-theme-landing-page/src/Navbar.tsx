import Logo from "./Logo";
export default function Navbar() {
  return (
    <nav className="pt-6 pr-6 pl-5 pb-12 flex justify-between">
      <div className=" max-w-20">
        <a href="#">
          <Logo />
        </a>
      </div>
      <div>
        <ul className="flex gap-6">
          <li className="text-textColor text-sm">Features</li>
          <li className="text-textColor text-sm">Team</li>
          <li className="text-textColor text-sm">Sign In</li>
        </ul>
      </div>
    </nav>
  );
}
