import { useParams } from "react-router-dom";

export default function Word() {
  const { word } = useParams();
  return (
    <div>
      <h1>{word}</h1>
    </div>
  );
}
