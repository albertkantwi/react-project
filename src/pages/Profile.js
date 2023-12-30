import { ChangeProfile } from "../components/ChangeProfile";

export const Profile = (props) => {
  return (
    <div>
      <h1>Page 2</h1>
      <h2>
        This is PROFILE page by: {props.username}
        <ChangeProfile setUsername={props.setUsername} />
      </h2>
    </div>
  );
};
