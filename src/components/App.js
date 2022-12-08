import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import SignUp from "../pages/SignUp";
import "../style/App.css";
import Layout from "./Layout";




function App() {

  return (
    < >
    <Router>
    <Layout >
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={ <SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
      
     
     
      </Routes>
    </Layout>
    </Router>
    </>
  );
}

export default App;
