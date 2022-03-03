import { UserResult } from "./UserResult/UserResult";
import "./UsersList.css";

export const UsersList = ({ users }) => {
  return (
    <div className="users-list">
      {users.map((user) => (
        <UserResult user={user} />
      ))}
    </div>
  );
};
