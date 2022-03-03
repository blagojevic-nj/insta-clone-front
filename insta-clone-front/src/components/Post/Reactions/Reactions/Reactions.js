import { Reaction } from "./Reaction/Reaction";
import "./Reactions.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import { useEffect, useState } from "react";
import { myPostReaction } from "../../../../services/ReactionService";
export const Reactions = ({ reactionKind, entityId }) => {
  const [reactionType, setReactionType] = useState("");

  useEffect(() => {
    myPostReaction(entityId).then((result) => {
      setReactionType(result.data);
    });
  }, []);

  return (
    <div className="custom-reactions">
      <Reaction
        reactionType={"LIKE"}
        reactionKind={reactionKind}
        entityId={entityId}
        icon={<ThumbUpOutlinedIcon />}
        active={reactionType == "LIKE"}
        reactionTypeState={reactionType}
        setReactionType={setReactionType}
      />
      <Reaction
        reactionType={"DISLIKE"}
        reactionKind={reactionKind}
        entityId={entityId}
        icon={<ThumbDownAltOutlinedIcon />}
        active={reactionType == "DISLIKE"}
        reactionTypeState={reactionType}
        setReactionType={setReactionType}
      />
      <Reaction
        reactionType={"LAUGH"}
        reactionKind={reactionKind}
        entityId={entityId}
        icon={<SentimentVerySatisfiedOutlinedIcon />}
        active={reactionType == "LAUGH"}
        reactionTypeState={reactionType}
        setReactionType={setReactionType}
      />
      <Reaction
        reactionType={"ANGRY"}
        reactionKind={reactionKind}
        entityId={entityId}
        icon={<SentimentVeryDissatisfiedOutlinedIcon />}
        active={reactionType == "ANGRY"}
        reactionTypeState={reactionType}
        setReactionType={setReactionType}
      />
      <Reaction
        reactionType={"SAD"}
        reactionKind={reactionKind}
        entityId={entityId}
        icon={<SentimentDissatisfiedOutlinedIcon />}
        active={reactionType == "SAD"}
        reactionTypeState={reactionType}
        setReactionType={setReactionType}
      />
    </div>
  );
};
