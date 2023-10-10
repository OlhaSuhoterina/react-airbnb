import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";
import "./index.css";

import ListItem from "../list-item";

export default function AttractionsList({ list }) {
  return (
    <Box shadow className="attractions-blok">
      <Heading>Пам'ятки поблизу</Heading>

      <div className="attractions-list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <ul className="attractions-item">
      <ListItem>
        <a href={link}>{name}</a>
      </ListItem>
    </ul>
  );
}
