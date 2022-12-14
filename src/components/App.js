import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import SignUp from "../pages/SignUp";
import "../style/App.css";
import Layout from "./Layout";
import PrivateRoute from "./PrivateRoute";




function App() {

  return (
    < >
    <Router>
      <AuthProvider>
    <Layout >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={ <SignUp />} />
        <Route path="/login" element={<Login />} />

          <Route path="/quiz" element={<PrivateRoute />} >
          <Route path="/quiz/:id" element={<Quiz />} />
        </Route>
          <Route path="/result/:id" element={<PrivateRoute />} >
          <Route path="/result/:id" element={<Result /> }/>
        </Route>

        {/* <Route path="/result" element={<Result />} /> */}
      
     
     
      </Routes>
    </Layout>
    </AuthProvider>
    </Router>
    </>
  );
}

export default App;
