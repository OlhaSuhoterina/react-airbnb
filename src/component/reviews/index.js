import { Fragment } from "react";
import Heading from "../heading";

import "./index.css";
import Box from "../box";

export default function ReviewsList({ list }) {
  return (
    <div className="reviews-blok">
      <Heading>Відгуки клієнтів</Heading>

      <div className="reviews-list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="reviews">
      <div className="reviews-guest-rating">
        <span className="reviews-guest">{guestName}</span>
        <span className="reviews-rating">Рейтинг: {rating}</span>
      </div>

      <span className="reviews-desc">{review}</span>
    </Box>
  );
}
