import { Helmet } from "react-helmet-async";
import { FaPhone } from "react-icons/fa6";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <p>
        Welcome to your <FaPhone size={24} color="#ef5c0d" /> phonebook! <br />
      </p>
    </div>
  );
};

export default Home;
