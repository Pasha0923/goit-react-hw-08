import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import Loading from "./components/Loading/Loading";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { apiRefreshUser } from "./redux/auth/operations";
import RestrictedRoute from "./RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { selectUserIsRefreshing } from "./redux/auth/selectors";
const Home = lazy(() => import("./pages/Home/Home"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const Login = lazy(() => import("./pages/Login/Login"));
const Registration = lazy(() => import("./pages/Registration/Registration"));
function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectUserIsRefreshing);
  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  return (
    <Layout>
      {isRefreshing ? (
        <p>Refreshing user, please wait...</p>
      ) : (
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute>
                  <Registration />
                </RestrictedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute>
                  <Login />
                </RestrictedRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      )}
    </Layout>
  );
}

export default App;
