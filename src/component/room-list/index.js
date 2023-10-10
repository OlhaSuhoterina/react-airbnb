import { Fragment } from "react";
import Heading from "../heading";

import "./index.css";
import Box from "../box";

export default function RoomList({ list }) {
  return (
    <div className="room-blok">
      <Heading>Типи номерів</Heading>

      <div className="room-list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ type, pricePerNight: price, currency, capacity }) {
  return (
    <Box className="room">
      <span className="room-title">{type}</span>
      <span className="room-info">Кількість гостей: {capacity}</span>
      <span className="room-price">
        {currency} {price}
      </span>
    </Box>
  );
}
