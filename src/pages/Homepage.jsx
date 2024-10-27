import { Link } from "react-router-dom";
import { routes } from "../constants";

export default function Homepage() {
  return (
    <div>
      {routes.map(({ id, title, path }) => (
        <Link to={path} key={id}>
          <h1>{title}</h1>
        </Link>
      ))}
    </div>
  );
}
