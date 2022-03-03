import "./Reaction.css";
import * as reactionService from "../../../../../services/ReactionService";

export const Reaction = ({
  reactionType,
  reactionKind,
  entityId,
  icon,
  active,
  reactionTypeState,
  setReactionType,
  likes,
  setLikes,
}) => {
  const sendReaction = () => {
    if (reactionKind === "POST_REACTION") {
      reactionService
        .togglePostReaction({ reactionType: reactionType, entityId: entityId })
        .then((result) => {
          if (reactionTypeState === reactionType) {
            setReactionType("");
            setLikes(likes - 1);
          } else {
            setReactionType(reactionType);
            if (!result.data.update) {
              setLikes(likes + 1);
            }
          }
        });
    }
  };

  return (
    <span className={active ? "active" : "icon"} onClick={sendReaction}>
      {icon}
    </span>
  );
};
