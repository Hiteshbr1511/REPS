import { useEffect } from "react";
import { generateToken } from "./firebase";
import axios from "axios";

function App() {
  useEffect(() => {
    const sendToken = async () => {
      const token = await generateToken();

      if (token) {
        await axios.put(
          "http://localhost:5000/api/students/69eb46ec2db6dc572a79a598/save-token",
          { deviceToken: token }
        );

        console.log("✅ Token saved to backend");
      }
    };

    sendToken();
  }, []);

  return <h1>ERP Running 🚀</h1>;
}

export default App;