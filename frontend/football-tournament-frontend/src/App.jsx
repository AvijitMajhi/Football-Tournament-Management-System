import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Dashboard from "./pages/dashboard/Temp";
import TournamentList from "./pages/tournament/TournamentList";
import TeamList from "./pages/team/TeamList";
import Standings from "./pages/tournament/Standing";
import Profile from "./pages/profile/Profile";
import ProtectedRoute from "./routes/ProtectedRoute";
import Layout from "./components/layout/Layout";
import CreateTournament from "./pages/tournament/CreateTournament";
import TournamentDetails from "./pages/tournament/TournamentDetails";
import EditTournament from "./pages/tournament/EditTournament";
import CreateTeam from "./pages/team/CreateTeam";
import MatchList from "./pages/match/MatchList";
import UpdateMatchResult from "./pages/match/UpdateMatchResult";
import EditProfile from "./pages/profile/EditProfile";
import ChangePassword from "./pages/profile/ChangePassword";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={ <ProtectedRoute>
            <Layout />
        </ProtectedRoute>}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/tournaments" element={<TournamentList />} />
                <Route path="/teams" element={<TeamList />} />
                <Route path="/matches" element={<MatchList />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/tournaments/create" element={<CreateTournament />} />
                <Route
    path="/tournaments/:id"
    element={<TournamentDetails />}
/>
<Route
    path="/tournaments/:id/edit"
    element={<EditTournament />}
/>
<Route
    path="/teams/create"
    element={<CreateTeam />}
/>
<Route
    path="/matches"
    element={<MatchList />}
/>
<Route
    path="/matches/:id/result"
    element={<UpdateMatchResult />}
/>
<Route
    path="/tournaments/:tournamentId/standings"
    element={<Standings />}
/>

<Route path="/profile/edit" element={<EditProfile />} />
<Route
    path="/profile/change-password"
    element={<ChangePassword />}
/>

            </Route>
        </Routes>
    );
}

export default App;