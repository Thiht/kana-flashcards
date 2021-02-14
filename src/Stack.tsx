import "./Stack.css";

export interface StackProps {
  onClick: () => void
}

function Stack({onClick}: StackProps) {
  return <div className="stack" onClick={onClick}></div>;
}

export default Stack;
