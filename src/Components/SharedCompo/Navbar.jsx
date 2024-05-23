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
    <div className="fixed h-16 mx-auto container bg-white shadow-md z-50">
      <nav className="flex items-center justify-between p-4 md:px-8">
        <div className="text-2xl font-bold">
          <Link to="/">Protap</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl focus:outline-none"
          >
            {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </button>
        </div>
        <ul
          className={`md:flex items-center md:gap-8 ${
            open ? "block text-center font-bold" : "hidden"
          } absolute md:static top-16 left-0 w-full bg-white md:w-auto md:bg-transparent`}
        >
          {router.map((route) => (
            <li key={route.id} className="md:border-none">
              <NavLink
                to={route.path}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-blue-300 p-2 rounded font-bold"
                    : "block p-2 rounded font-bold text-gray-700 hover:bg-nav  md:hover:text-blue-600"
                }
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
