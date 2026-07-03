import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <div>
            <nav
                style={{
                    background: "#222",
                    color: "white",
                    padding: "15px",
                    display: "flex",
                    gap: "20px",
                }}
            >
                <Link to="/dashboard" style={{ color: "white" }}>
                    Dashboard
                </Link>

                <Link to="/tournaments" style={{ color: "white" }}>
                    Tournaments
                </Link>

                <Link to="/teams" style={{ color: "white" }}>
                    Teams
                </Link>

                <Link to="/matches" style={{ color: "white" }}>
                    Matches
                </Link>

                <Link to="/profile" style={{ color: "white" }}>
                    Profile
                </Link>
            </nav>

            <div style={{ padding: "20px" }}>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;