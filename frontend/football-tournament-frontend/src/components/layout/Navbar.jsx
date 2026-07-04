import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        navigate("/login");
    };

    return (
        <nav className="bg-green-700 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <h1 className="text-2xl font-bold">
                    ⚽ Football Tournament Manager
                </h1>

                <div className="flex items-center gap-6">

                    <Link
                        to="/dashboard"
                        className="hover:text-yellow-300 transition"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/tournaments"
                        className="hover:text-yellow-300 transition"
                    >
                        Tournaments
                    </Link>

                    <Link
                        to="/teams"
                        className="hover:text-yellow-300 transition"
                    >
                        Teams
                    </Link>

                    <Link
                        to="/matches"
                        className="hover:text-yellow-300 transition"
                    >
                        Matches
                    </Link>

                    <Link
                        to="/profile"
                        className="hover:text-yellow-300 transition"
                    >
                        Profile
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
                    >
                        Logout
                    </button>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;