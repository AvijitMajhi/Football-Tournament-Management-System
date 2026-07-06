import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    getCurrentUser,
    updateProfile,
} from "../../services/userService";

function EditProfile() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        fullName: "",

        email: ""

    });

    useEffect(() => {

        const fetchUser = async () => {

            const profile = await getCurrentUser();

            setFormData({

                fullName: profile.user.fullName,

                email: profile.user.email,

            });

        };

        fetchUser();

    }, []);

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await updateProfile(formData);

            alert("Profile updated successfully");

            navigate("/profile");

        } catch (error) {

            alert(

                error.response?.data?.message ||

                "Update failed"

            );

        }

    };

    return (

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">

            <h1 className="text-3xl font-bold mb-8">

                Edit Profile

            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >

                <input

                    type="text"

                    name="fullName"

                    value={formData.fullName}

                    onChange={handleChange}

                    className="w-full border rounded-lg p-3"

                />

                <input

                    type="email"

                    name="email"

                    value={formData.email}

                    onChange={handleChange}

                    className="w-full border rounded-lg p-3"

                />

                <button

                    className="w-full bg-green-700 text-white py-3 rounded-lg"

                >

                    Save Changes

                </button>

            </form>

        </div>

    );

}

export default EditProfile;