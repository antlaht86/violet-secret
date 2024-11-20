import { Link } from "@remix-run/react";
import Logo from "./logoipsum-logo-15.svg";
export default function NavList() {
  return (
    <div>
      <nav className="bg-slate-100 border-gray-200 px-2 sm:px-4 py-2.5">
        <div className="ml-10 container flex justify-start">
          <div className="flex items-center">
            <Link to="/create" className="flex">
              <img src={Logo} alt="Company Logo" />
            </Link>
          </div>
          <div className="ml-3.5">
            <Link
              to="/create"
              className="block py-2 pr-4 pl-3 text-violet-500 rounded"
              aria-current="page"
            >
              Create secret
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
