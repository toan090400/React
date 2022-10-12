import MainMenu from "../../Layout/MainMenu";
import { useContext } from "react";
import AuthContext from "../../../context/auth-context";
const Home = () => {
  const context = useContext(AuthContext);
  const user = context.isUser;
  return (
    <div className="container">
      <MainMenu />
      <h1 className="mt-4">Home page</h1>
      <h1 className="mt-4">googleId: {user ? user.sub : "null"}</h1>
      <h1 className="mt-4">displayName: {user ? user.name : "null"}</h1>
      <h1 className="mt-4">familyName: {user ? user.family_name : "null"}</h1>
      <h1 className="mt-4">givenName: {user ? user.given_name : "null"}</h1>
      <h1 className="mt-4">
        image:{" "}
        {user ? (
          <div className="text-center">
            <img src={user.picture} className="rounded" alt={user.name} />
          </div>
        ) : (
          "null"
        )}
      </h1>
    </div>
  );
};

export default Home;
