import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Dashboard from "./pages/dashboard/Dashboard";
import TournamentList from "./pages/tournament/TournamentList";
import TeamList from "./pages/team/TeamList";
import MatchList from "./pages/match/MatchList";
import Profile from "./pages/profile/Profile";
import ProtectedRoute from "./routes/ProtectedRoute";
import Layout from "./components/layout/Layout";
import CreateTournament from "./pages/tournament/CreateTournament";
import TournamentDetails from "./pages/tournament/TournamentDetails";
import EditTournament from "./pages/tournament/EditTournament";
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
            </Route>
        </Routes>
    );
}

export default App;