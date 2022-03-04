import "./UserResult.css";

export const UserResult = ({ user }) => {
  const seeProfile = () => {
    window.location.href = `/profile/${user.username}`;
  };
  return (
    <div
      className="user-result"
      onClick={seeProfile}
    >
      <img
        alt="slika"
        className="slicica"
        src={`${process.env.REACT_APP_SERVER_URL}${user.profilePicture}`}
        height="50px"
      />
      <span className="username">{user.username}</span>
      <span className="user-name">{user.name}</span>
    </div>
  );
};
