import { useParams } from "react-router-dom";

const Contracts = (props) => {
  const a = useParams();
  return (
    <>
      <h1>Contracts</h1>
      <span>ADRESS: {a.address}</span>
      <p>
        Should have:
        <ul>
          <li>Searchbar for new address</li>
          <li>Address information, score...</li>
        </ul>
      </p>
    </>
  )
};

export default Contracts;