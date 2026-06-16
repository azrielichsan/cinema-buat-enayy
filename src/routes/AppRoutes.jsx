import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

import OpeningMovie from "../pages/OpeningMovie/OpeningMovie";
import Trailer from "../pages/Trailer/Trailer";
import Episodes from "../pages/Episodes/Episodes";

import Gallery from "../pages/Gallery/Gallery";
import AboutHer from "../pages/AboutHer/AboutHer";
import Awards from "../pages/Awards/Awards";
import Love100 from "../pages/Love100/Love100";

import Letter from "../pages/Letter/Letter";
import FinalSurprise from "../pages/FinalSurprise/FinalSurprise";
import Birthday from "../pages/Birthday/Birthday";
import GalleryDetail from "../pages/Gallery/GalleryDetail";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN (NO NAVBAR, NO PROTECT) */}
        <Route path="/" element={<Login />} />

        {/* ========================= */}
        {/* CINEMATIC FLOW (PROTECTED + NAVBAR) */}
        {/* ========================= */}

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Home />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/opening-movie"
          element={
            <ProtectedRoute>
              <MainLayout>
                <OpeningMovie />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/trailer"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Trailer />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/episodes"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Episodes />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* MID SECTION */}
        <Route
          path="/gallery"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Gallery />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/gallery/:id"
          element={
            <ProtectedRoute>
              <MainLayout>
                <GalleryDetail />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/about-her"
          element={
            <ProtectedRoute>
              <MainLayout>
                <AboutHer />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/awards"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Awards />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/love100"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Love100 />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* ========================= */}
        {/* FINAL CINEMATIC (NO NAVBAR) */}
        {/* ========================= */}

        <Route
          path="/letter"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Letter />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/final-surprise"
          element={
            <ProtectedRoute>
              <FinalSurprise />
            </ProtectedRoute>
          }
        />

        <Route
          path="/birthday"
          element={
            <ProtectedRoute>
              <Birthday />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;