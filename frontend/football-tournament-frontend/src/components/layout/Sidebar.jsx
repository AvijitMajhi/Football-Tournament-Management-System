import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaTrophy,
    FaUsers,
    FaFutbol,
    FaUser,
    FaTimes,
} from "react-icons/fa";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: <FaHome />,
        },
        {
            name: "Tournaments",
            path: "/tournaments",
            icon: <FaTrophy />,
        },
        {
            name: "Teams",
            path: "/teams",
            icon: <FaUsers />,
        },
        {
            name: "Matches",
            path: "/matches",
            icon: <FaFutbol />,
        },
        {
            name: "Profile",
            path: "/profile",
            icon: <FaUser />,
        },
    ];

    return (
        <>
            {/* Backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <aside
                className={`
                    fixed md:static
                    top-0 left-0
                    h-screen
                    w-64
                    bg-gray-900
                    text-white
                    z-50
                    transform
                    transition-transform
                    duration-300
                    ease-in-out
                    ${
                        sidebarOpen
                            ? "translate-x-0"
                            : "-translate-x-full md:translate-x-0"
                    }
                `}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700">

                    <h2 className="text-2xl font-bold text-green-400">
                        ⚽ FTM
                    </h2>

                    <button
                        className="md:hidden"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <FaTimes size={22} />
                    </button>

                </div>

                {/* Navigation */}
                <nav className="mt-6 px-4">

                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-4 px-3">
                        Navigation
                    </p>

                    <div className="space-y-2">

                        {menuItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setSidebarOpen(false)}
                                className={({ isActive }) =>
                                    `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200
                                    ${
                                        isActive
                                            ? "bg-green-600 text-white shadow-lg"
                                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                    }`
                                }
                            >
                                <span className="text-lg">
                                    {item.icon}
                                </span>

                                <span className="font-medium">
                                    {item.name}
                                </span>
                            </NavLink>
                        ))}

                    </div>

                </nav>

            </aside>
        </>
    );
}

export default Sidebar;