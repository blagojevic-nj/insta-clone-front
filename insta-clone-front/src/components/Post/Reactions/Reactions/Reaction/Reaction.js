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
}) => {
  const sendReaction = () => {
    if (reactionKind === "POST_REACTION") {
      reactionService
        .togglePostReaction({ reactionType: reactionType, entityId: entityId })
        .then((result) => {
          if (reactionTypeState === reactionType) {
            setReactionType("");
          } else {
            setReactionType(reactionType);
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
