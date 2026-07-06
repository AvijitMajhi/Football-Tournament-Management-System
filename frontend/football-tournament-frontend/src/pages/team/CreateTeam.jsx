import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TeamForm from "../../components/team/TeamForm";
import { createTeam } from "../../services/teamService";

function CreateTeam() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        shortName: "",
        coach: "",
        captain: "",
        tournament: "",
        logo: null,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = new FormData();

            data.append("name", formData.name);
            data.append("shortName", formData.shortName);
            data.append("coach", formData.coach);
            data.append("captain", formData.captain);
            data.append("tournament", formData.tournament);

            if (formData.logo) {
                data.append("logo", formData.logo);
            }

            await createTeam(data);

            alert("Team created successfully!");

            navigate("/teams");

        } catch (error) {
            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to create team"
            );
        }
    };

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">

            <h1 className="text-3xl font-bold mb-8">
                Create Team
            </h1>

            <TeamForm
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit}
                buttonText="Create Team"
            />

        </div>
    );
}

export default CreateTeam;