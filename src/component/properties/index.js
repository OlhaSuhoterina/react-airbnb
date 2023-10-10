import "./index.css";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

export default function Properties({
  rules,
  policy,
  transportation,
  languages1,
  languages2,
  offers,
}) {
  return (
    <Box shadow className="properties">
      <Heading border>Додаткові властивості:</Heading>

      <ul className="properties-item">
        <ListItem title="Правила дому">
          <span>{rules}</span>
        </ListItem>
        <ListItem title="Політика скасування">
          <span>{policy}</span>
        </ListItem>
        <ListItem title="Місцевий транспорт">
          <span>{transportation}</span>
        </ListItem>
        <ListItem title="Мови хоста">
          <span>
            {languages1}, {languages2}
          </span>
        </ListItem>
        <ListItem title="Спеціальні пропозиції:">
          <span>{offers}</span>
        </ListItem>
      </ul>
    </Box>
  );
}
