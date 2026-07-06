import { useEffect, useState } from "react";
import { getCurrentUser } from "../../services/userService";
import { useNavigate } from "react-router-dom";
function Profile() {

    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const data = await getCurrentUser();

                setProfile(data);

            } catch (error) {

                console.error(error);

            }

        };

        fetchProfile();

    }, []);

    if (!profile) {

        return <h2>Loading...</h2>;

    }

    const {
        user,
        totalTournaments,
        totalTeams,
        totalMatches,
    } = profile;

    return (

        <div className="max-w-5xl mx-auto">

            {/* Profile Card */}

            <div className="bg-white rounded-xl shadow-lg p-8">

                <div className="flex items-center gap-6">

                    <img
                        src={
                            user.avatar ||
                            "https://ui-avatars.com/api/?name=" +
                                user.fullName
                        }
                        alt={user.fullName}
                        className="w-28 h-28 rounded-full border-4 border-green-600"
                    />

                    <div>

                        <h1 className="text-4xl font-bold">
                            {user.fullName}
                        </h1>

                        <p className="text-gray-600">
                            @{user.username}
                        </p>

                        <p className="text-gray-600">
                            {user.email}
                        </p>

                    </div>

                </div>

            </div>

            {/* Personal Information */}

            <div className="bg-white rounded-xl shadow-lg mt-8 p-8">

                <h2 className="text-2xl font-bold mb-6">
                    Personal Information
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    <div>

                        <p className="text-gray-500">
                            Full Name
                        </p>

                        <h3 className="text-lg font-semibold">
                            {user.fullName}
                        </h3>

                    </div>

                    <div>

                        <p className="text-gray-500">
                            Username
                        </p>

                        <h3 className="text-lg font-semibold">
                            {user.username}
                        </h3>

                    </div>

                    <div>

                        <p className="text-gray-500">
                            Email
                        </p>

                        <h3 className="text-lg font-semibold">
                            {user.email}
                        </h3>

                    </div>

                    <div>

                        <p className="text-gray-500">
                            Member Since
                        </p>

                        <h3 className="text-lg font-semibold">
                            {new Date(user.createdAt).toLocaleDateString()}
                        </h3>

                    </div>

                </div>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                <div className="bg-white rounded-xl shadow-lg p-6 text-center">

                    <h3 className="text-gray-500">
                        Tournaments
                    </h3>

                    <p className="text-5xl font-bold text-green-700">
                        {totalTournaments}
                    </p>

                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 text-center">

                    <h3 className="text-gray-500">
                        Teams
                    </h3>

                    <p className="text-5xl font-bold text-blue-600">
                        {totalTeams}
                    </p>

                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 text-center">

                    <h3 className="text-gray-500">
                        Matches
                    </h3>

                    <p className="text-5xl font-bold text-orange-600">
                        {totalMatches}
                    </p>

                </div>

            </div>

            {/* Action Buttons */}

     {/* Action Buttons */}

<div className="flex flex-wrap gap-4 mt-8">

    <button
        onClick={() => navigate("/profile/edit")}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
    >
        Edit Profile
    </button>

    <button
        onClick={() => navigate("/profile/change-password")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
    >
        Change Password
    </button>

</div>

       
</div>
    );



}

export default Profile;