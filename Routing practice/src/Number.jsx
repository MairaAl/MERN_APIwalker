import { useParams } from "react-router-dom";

export default function Number() {
  const { number } = useParams();
  return (
    <div>
      <h1>Mostrando un {number}</h1>
    </div>
  );
}
