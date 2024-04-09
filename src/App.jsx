import "./App.css";
import { useDispatch } from "react-redux";
import { apiGetContacts } from "./redux/contacts/operations";
import { Suspense, lazy, useEffect } from "react";
import Loading from "./components/Loading/Loading";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
const Home = lazy(() => import("./pages/Home/Home"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const Login = lazy(() => import("./pages/Login/Login"));
const Registration = lazy(() => import("./pages/Registration/Registration"));
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
