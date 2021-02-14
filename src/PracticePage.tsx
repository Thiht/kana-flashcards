import { useState } from "react";
import "./PracticePage.css";
import Card from "./Card";
import Stack from "./Stack";
import { hiragana } from "./utils/hiragana";
import { cards } from "./utils/words";

function PracticePage() {
  const deck = hiragana.concat(cards);
  const randomIndex = (array: unknown[]) => Math.floor(Math.random() * array.length);
  const [index, setIndex] = useState(randomIndex(deck));
  return (
    <div className="flash">
      <Card
        front={deck[index].front}
        back={deck[index].back}
      />
      <Stack onClick={() => setIndex(randomIndex(deck))} />
    </div>
  );
}

export default PracticePage;
