import "./index.css";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import guest from "./guest.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";
import bath from "./bath.svg";

export default function Details({ guests, bedrooms, beds, baths }) {
  return (
    <Box shadow className="details">
      <Heading border>Деталі властивості:</Heading>

      <ul className="details-item">
        <ListItem imageSrc={guest}>
          <span>{guests}</span>
          <span>гості</span>
        </ListItem>
        <ListItem imageSrc={bedroom}>
          <span>{bedrooms}</span>
          <span>спальня</span>
        </ListItem>
        <ListItem imageSrc={bed}>
          <span>{beds}</span>
          <span>ліжко</span>
        </ListItem>
        <ListItem imageSrc={bath}>
          <span>{baths}</span>
          <span>ванна кімната</span>
        </ListItem>
      </ul>
    </Box>
  );
}
