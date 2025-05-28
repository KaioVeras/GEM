
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Import pages
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import StudentDashboard from "./pages/StudentDashboard";
import StudentSchedule from "./pages/StudentSchedule";
import StudentGrades from "./pages/StudentGrades";
import StudentDocuments from "./pages/StudentDocuments";
import StudentMessages from "./pages/StudentMessages";
import StudentSettings from "./pages/StudentSettings";
import TeacherDashboard from "./pages/TeacherDashboard";
import TeacherSchedule from "./pages/TeacherSchedule";
import TeacherDiary from "./pages/TeacherDiary";
import TeacherGrades from "./pages/TeacherGrades";
import TeacherMessages from "./pages/TeacherMessages";
import TeacherSettings from "./pages/TeacherSettings";
import LandingPage from "./pages/LandingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            
            {/* Student routes */}
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/student-dashboard/schedule" element={<StudentSchedule />} />
            <Route path="/student-dashboard/grades" element={<StudentGrades />} />
            <Route path="/student-dashboard/documents" element={<StudentDocuments />} />
            <Route path="/student-dashboard/messages" element={<StudentMessages />} />
            <Route path="/student-dashboard/settings" element={<StudentSettings />} />
            
            {/* Teacher routes */}
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/teacher-dashboard/schedule" element={<TeacherSchedule />} />
            <Route path="/teacher-dashboard/diary" element={<TeacherDiary />} />
            <Route path="/teacher-dashboard/grades" element={<TeacherGrades />} />
            <Route path="/teacher-dashboard/messages" element={<TeacherMessages />} />
            <Route path="/teacher-dashboard/settings" element={<TeacherSettings />} />
            
            {/* Fallback route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
