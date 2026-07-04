import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaTrophy,
    FaUsers,
    FaFutbol,
    FaUser
} from "react-icons/fa";

function Sidebar() {
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
        <aside className="w-64 bg-gray-900 text-white min-h-screen p-5">

            <h2 className="text-2xl font-bold mb-8">
                ⚽ FTM
            </h2>

            <div className="space-y-2">

                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg transition ${
                                isActive
                                    ? "bg-green-600"
                                    : "hover:bg-gray-800"
                            }`
                        }
                    >
                        {item.icon}
                        {item.name}
                    </NavLink>
                ))}

            </div>

        </aside>
    );
}

export default Sidebar;