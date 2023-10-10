import "./index.css";
import Box from "../box"
import ListItem from "../list-item";

export default function Details({ price, discount, currency, ...rest }) {
  return (
    <Box className="price">
      <div className="price-header">
        <span
          className={`price-value ${
            discount ? "price-value-has-discount" : ""
          }`}
        >
          {currency}
          {price}
        </span>
        {discount && (
          <span className={`price-value`}>
            {currency}
            {discount}
          </span>
        )}
      </div>
      <List {...rest} currency={currency} />
    </Box>
  );
}

function List({ currency, cleaning, service, checkin, checkout }) {
  return (
    <ul className="price-list">
      <ListItem>
        <span>Плата за прибирання:</span>
        <span>
          {currency}
          {cleaning}
        </span>
      </ListItem>
      <ListItem>
        <span>Сервісний збір:</span>
        <span>
          {currency} {service}
        </span>
      </ListItem>
      <li className="price-list-item">
        <span>Дата прибуття:</span>
        <span>{checkin}</span>
      </li>
      <ListItem>
        <span>Дата від'їзду:</span>
        <span>{checkout}</span>
      </ListItem>
    </ul>
  );
}
