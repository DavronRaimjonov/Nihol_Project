import { Link } from "react-router-dom";
import { LeftIcon } from "../../assets";

const Prev = ({ path }) => {
  return (
    <span>
      <Link to={`/${path}`}>
        <LeftIcon />
      </Link>
    </span>
  );
};

export default Prev;
