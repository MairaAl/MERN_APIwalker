import { useParams } from "react-router-dom";

export default function StyledWord() {
  const { word, textColor, bgColor } = useParams();
  const styles = {
    color: textColor,
    backgroundColor: bgColor,
    padding: "10px",
    borderRadius: "5px",
  };
  return (
    <div>
      <h1 style={styles}>{word}</h1>
    </div>
  );
}
