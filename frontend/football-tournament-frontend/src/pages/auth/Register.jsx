import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
        avatar: null,
    });

    const handleChange = (e) => {
        if (e.target.name === "avatar") {
            setFormData({
                ...formData,
                avatar: e.target.files[0],
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = new FormData();

            data.append("fullName", formData.fullName);
            data.append("username", formData.username);
            data.append("email", formData.email);
            data.append("password", formData.password);
            data.append("avatar", formData.avatar);

            await api.post("/users/register", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("Registration Successful!");

            navigate("/login");

        } catch (error) {
            console.error(error);

            alert(
                error.response?.data?.message ||
                "Registration Failed"
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
                    Create Account
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-4"
                >

                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                    />

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                    />

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Upload Avatar
                        </label>

                        <input
                            type="file"
                            name="avatar"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition"
                    >
                        Register
                    </button>

                </form>

                <p className="text-center mt-6 text-gray-600">

                    Already have an account?

                    <Link
                        to="/login"
                        className="text-green-700 font-semibold ml-2 hover:underline"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Register;