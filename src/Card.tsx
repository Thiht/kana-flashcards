import { useEffect, useState } from "react";
import "./Card.css";
import classNames from "classnames";
import { hashCode } from "./utils/strings";

export interface CardProps {
  front: {
    content: string
    help?: string;
  },
  back?: {
    content: string
    help?: string;
  }
  defaultHidden?: boolean;
}

const backgrounds = ["bg-fuji", "bg-sakura", "bg-koi"]

function Card({ front, back, defaultHidden=true }: CardProps) {
  const [hidden, setHidden] = useState(defaultHidden);
  useEffect(() => {
    setHidden(defaultHidden);
  }, [front, defaultHidden]);

  return (
    <>
      <div className={classNames("card", backgrounds[hashCode(front.content) % backgrounds.length])}>
        <div className="front" title={front.help}>{front.content}</div>
        {back && (
          <div
            className={classNames("back", { hidden })}
            onClick={() => {
              setHidden(false);
            }}
          >
            <p title={back.help}>{back.content}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
