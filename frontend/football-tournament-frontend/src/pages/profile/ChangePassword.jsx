import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { changePassword } from "../../services/userService";

function ChangePassword() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        oldPassword: "",

        newPassword: "",

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await changePassword(formData);

            alert("Password changed successfully");

            navigate("/profile");

        } catch (error) {

            alert(

                error.response?.data?.message ||

                "Failed"

            );

        }

    };

    return (

        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8">

            <h1 className="text-3xl font-bold mb-8">

                Change Password

            </h1>

            <form

                onSubmit={handleSubmit}

                className="space-y-5"

            >

                <input

                    type="password"

                    name="oldPassword"

                    placeholder="Current Password"

                    onChange={handleChange}

                    className="w-full border rounded-lg p-3"

                />

                <input

                    type="password"

                    name="newPassword"

                    placeholder="New Password"

                    onChange={handleChange}

                    className="w-full border rounded-lg p-3"

                />

                <button

                    className="w-full bg-blue-600 text-white py-3 rounded-lg"

                >

                    Change Password

                </button>

            </form>

        </div>

    );

}

export default ChangePassword;