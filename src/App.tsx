// This is the primary routing component
// By wrapping BrowserRouter around App, we can import Routes and Route in App
import { Routes, Route } from "react-router-dom";
import "./globals.css";

export const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes*/}
        <Route path="/sign-in" element={<SigninForm />} />

        {/* private routes*/}
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
};
