import User from "./User";
import UserContext from "../utils/UserContext";

const About = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold m-4 p-4">About</h1>

      <UserContext.Consumer>
        {({ loggedInUser }) => (
          <p className="text-xl font-bold m-3 p-3">User : {loggedInUser}</p>
        )}
      </UserContext.Consumer>
      <User />
    </div>
  );
};

export default About;
