import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        navigate("/login");
    };

    const navItems = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Tournaments", path: "/tournaments" },
        { name: "Teams", path: "/teams" },
        { name: "Matches", path: "/matches" },
        { name: "Profile", path: "/profile" },
    ];

    return (
        <nav className="bg-green-700 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <Link
                        to="/dashboard"
                        className="flex items-center gap-2"
                    >
                        <span className="text-3xl">⚽</span>

                        <div className="hidden sm:block">
                            <h1 className="text-xl font-bold">
                                Football Tournament Manager
                            </h1>
                        </div>

                        <div className="sm:hidden">
                            <h1 className="text-lg font-bold">
                                FTM
                            </h1>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">

                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `transition font-medium ${
                                        isActive
                                            ? "text-yellow-300"
                                            : "hover:text-yellow-300"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}

                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
                        >
                            Logout
                        </button>

                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                </div>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-green-800 border-t border-green-600">

                    <div className="flex flex-col">

                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `px-5 py-3 ${
                                        isActive
                                            ? "bg-green-900 text-yellow-300"
                                            : "hover:bg-green-900"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}

                        <button
                            onClick={handleLogout}
                            className="m-4 bg-red-500 py-2 rounded-lg hover:bg-red-600"
                        >
                            Logout
                        </button>

                    </div>

                </div>
            )}
        </nav>
    );
}

export default Navbar;