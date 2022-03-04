import { REACT_APP_URL } from "../../constants";

export const BackToLogin = () => {
  return (
    <div className="cool-btn">
      <a className="new-account" href={`${REACT_APP_URL}/login`}>
        Back to login
      </a>
    </div>
  );
};
