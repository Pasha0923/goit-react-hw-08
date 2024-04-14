import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import { Toaster } from "react-hot-toast";
import Loading from "../Loading/Loading";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#f9e3cc",
            color: "#f57a38",
            marginTop: "40px",
          },
        }}
      />
    </div>
  );
};
export default Layout;
