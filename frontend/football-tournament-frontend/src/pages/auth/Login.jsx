import { useState } from "react";
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
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
console.log(response.data);
navigate("/dashboard");

        } catch (error) {
            console.error(error);
            alert(
                error.response?.data?.message || "Login Failed"
            );
        }
    };

    return (
        <div style={{ padding: "40px" }}>
            <h1>Login</h1>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <br /><br />

                <button type="submit">
                    Login
                </button>
                <br />

<p>
    Don't have an account?{" "}
    <Link to="/register">
        Register
    </Link>
</p>
            </form>
        </div>
    );
}

export default Login;