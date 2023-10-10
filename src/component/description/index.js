import Heading from "../heading";

import "./index.css";

export default function Deluxeescription({ title, children }) {
  return (
    <div className="description">
      <Heading>{title}</Heading>

      <p className="description-text">{children}</p>
    </div>
  );
}
