import "./LearnPage.css";
import Card from "./Card";
import { hiragana } from "./utils/hiragana";

function LearnPage() {
  return (
    <div className="deck">
      {hiragana.map((item) => <Card key={`hiragana-${item.front}}`} front={item.front} back={item.back} defaultHidden={false} />)}
    </div>
  );
}

export default LearnPage;
