import { Routes, Route } from "react-router-dom";
import {MainPage} from '../pages/mainPage'
import { GamePage } from "../pages/gamePage";
import { NotFound } from "../pages/notFound";

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/gamePage" element={<GamePage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}