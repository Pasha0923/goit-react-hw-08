import { Helmet } from "react-helmet-async";
import { FaPhone } from "react-icons/fa6";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>
        Welcome to your <FaPhone size={24} color="#ef5c0d" /> phonebook! <br />
      </h1>
    </div>
  );
};

export default Home;
