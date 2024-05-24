import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const router = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/faq", name: "FAQ" },
  ];

  return (
    <div className="fixed w-full h-16 mx-auto container bg-white shadow-md z-50">
      <nav className="flex items-center justify-between p-4 md:px-8">
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl focus:outline-none"
          >
            {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </button>
        </div>
        <div className="font-bold">
          <ul
            className={`md:flex items-center md:gap-8 absolute md:static top-16 left-0 w-full bg-white md:w-auto md:bg-transparent transition-all duration-500 ease-in-out ${
              open ? "translate-x-0 w-3/4" : "-translate-x-full md:translate-x-0"
            }`}
          >
            {router.map((route) => (
              <li key={route.id} className={`md:border-none ${open ? 'mt-4' : 'mt-0'}`}>
                <NavLink
                  to={route.path}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? `${open ? 'p-2 w-1/3 ' : 'p-2 w-full '}bg-gray-200 border-b-2 border-black rounded font-bold`
                      : `block p-2 rounded font-bold text-gray-700 hover:bg-nav  hover:border-black ${
                          open ? '' : 'border-none'
                        } md:hover:text-blue-600 `
                  }
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="font-bold">
          <Link to="/">Protap</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
