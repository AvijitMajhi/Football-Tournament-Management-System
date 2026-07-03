import { useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
function Register() {
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

const response = await api.post(
    "/users/register",
    data,
    {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }
);

            console.log(response.data);

            alert("Registration Successful!");

        } catch (error) {
            console.error(error);

            alert(
                error.response?.data?.message ||
                "Registration Failed"
            );
        }
    };

    return (
        <div style={{ padding: "40px" }}>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <br /><br />
                <input
    type="file"
    name="avatar"
    accept="image/*"
    onChange={handleChange}
/>

<br /><br />
                <button type="submit">
                    Register
                </button>
<br />

<p>
    Already have an account?{" "}
    <Link to="/login">
        Login
    </Link>
</p>
            </form>
        </div>
    );
}

export default Register;