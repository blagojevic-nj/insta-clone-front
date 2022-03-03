import { Reaction } from "./Reaction/Reaction";
import "./Reactions.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import { useEffect, useState } from "react";
import { myPostReaction } from "../../../../services/ReactionService";

const REACTION_TYPES = ["LIKE", "DISLIKE", "LAUGH", "ANGRY", "SAD"];
const ICONS = [
  <ThumbUpOutlinedIcon />,
  <ThumbDownAltOutlinedIcon />,
  <SentimentVerySatisfiedOutlinedIcon />,
  <SentimentVeryDissatisfiedOutlinedIcon />,
  <SentimentDissatisfiedOutlinedIcon />,
];

export const Reactions = ({ reactionKind, entityId, likes, setLikes }) => {
  const [reactionType, setReactionType] = useState("");

  useEffect(() => {
    myPostReaction(entityId).then((result) => {
      setReactionType(result.data);
    });
  }, []);

  return (
    <div className="custom-reactions">
      {REACTION_TYPES.map((type, id) => (
        <Reaction
          reactionType={type}
          reactionKind={reactionKind}
          entityId={entityId}
          icon={ICONS[id]}
          active={reactionType === type}
          reactionTypeState={reactionType}
          setReactionType={setReactionType}
          likes={likes}
          setLikes={setLikes}
        />
      ))}
    </div>
  );
};
