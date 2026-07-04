import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/users/login", {
                email,
                password,
            });

            const user = response.data.data.user;
            const accessToken = response.data.data.accessToken;

            localStorage.setItem("accessToken", accessToken);

            login(user);

            navigate("/dashboard");

        } catch (error) {
            console.error(error);

            alert(
                error.response?.data?.message || "Login Failed"
            );
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center">

            <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">

                <h1 className="text-4xl font-bold text-center text-green-700">
                    ⚽ FTM
                </h1>

                <p className="text-center text-gray-500 mt-2">
                    Football Tournament Manager
                </p>

                <h2 className="text-2xl font-semibold text-center mt-8">
                    Welcome Back
                </h2>

                <form
                    onSubmit={handleLogin}
                    className="mt-8 space-y-5"
                >

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                    />

                    <button
                        type="submit"
                        className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center mt-6 text-gray-600">

                    Don't have an account?

                    <Link
                        to="/register"
                        className="text-green-700 font-semibold ml-2 hover:underline"
                    >
                        Register
                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Login;