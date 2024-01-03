import { ChangeProfile } from "../components/ChangeProfile";

export const Profile = (props) => {
  
  return (
    <div>
      <h2>
        This is PROFILE page by: {props.username}
        <ChangeProfile setUsername={props.setUsername} />
      </h2>
    </div>
  );
};
