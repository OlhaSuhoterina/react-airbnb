import "./index.css";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import pool from "./pool.svg";
import gym from "./gym.svg";
import breakfast from "./breakfast.svg";
import wifi from "./wifi.svg";
import parking from "./parking.svg";
import petsAllowed from "./petsAllowed.svg";
import shuttle from "./shuttle.svg";
import conciergeService from "./conciergeService.svg";
import roomService from "./roomService.svg";
import childFriendly from "./childFriendly.svg";

export default function Amenities({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <Box shadow className="amenities">
      <Heading border>Зручності</Heading>

      <ul className="details-item">
        {hasPool && (
          <ListItem imageSrc={pool}>
            <span>{hasPool}</span>
            <span>Басейн</span>
          </ListItem>
        )}

        {hasGym && (
          <ListItem imageSrc={gym}>
            <span>{hasGym}</span>
            <span>Спортивний зал</span>
          </ListItem>
        )}
        {hasFreeBreakfast && (
          <ListItem imageSrc={breakfast}>
            <span>{hasFreeBreakfast}</span>
            <span>Безкоштовний сніданок</span>
          </ListItem>
        )}

        {hasFreeWiFi && (
          <ListItem imageSrc={wifi}>
            <span>{hasFreeWiFi}</span>
            <span>Безкоштовний Wi-Fi</span>
          </ListItem>
        )}

        {hasParking && (
          <ListItem imageSrc={parking}>
            <span>{hasParking}</span>
            <span>Безкоштовний вуличний паркінг</span>
          </ListItem>
        )}

        {hasPetsAllowed && (
          <ListItem imageSrc={petsAllowed}>
            <span>{hasPetsAllowed}</span>
            <span>Дозволено розміщення з домашніми тваринами</span>
          </ListItem>
        )}

        {hasAirportShuttle && (
          <ListItem imageSrc={shuttle}>
            <span>{hasAirportShuttle}</span>
            <span>Трансфер до/з аеропорту</span>
          </ListItem>
        )}

        {hasConciergeService && (
          <ListItem imageSrc={conciergeService}>
            <span>{hasConciergeService}</span>
            <span>Консьєрж-сервіс</span>
          </ListItem>
        )}

        {hasRoomService && (
          <ListItem imageSrc={roomService}>
            <span>{hasRoomService}</span>
            <span>Обслуговування номерів</span>
          </ListItem>
        )}

        {hasChildFriendly && (
          <ListItem imageSrc={childFriendly}>
            <span>{hasChildFriendly}</span>
            <span>Підходить для дітей</span>
          </ListItem>
        )}
      </ul>
    </Box>
  );
}
