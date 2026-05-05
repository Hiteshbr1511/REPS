import { Routes, Route } from "react-router-dom";
import Login from "./components/loginpage";
import Students from "./components/Students";
import { FaBook, FaPen, FaGraduationCap } from "react-icons/fa";
import "./App.css"; // Import the CSS file

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/students" element={<Students />} />
    </Routes>
  );
}

export function FloatingIcons() {
  return (
    <>
      <FaBook className="float book" />
      <FaPen className="float pen" />
      <FaGraduationCap className="float cap" />
    </>
  );
}

export function CursorEffect() {
  useEffect(() => {
    const move = (e) => {
      document.body.style.backgroundPosition =
        `${e.clientX / 20}px ${e.clientY / 20}px`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return null;
}

export default App;