import "./index.css";

export default function Title({
  title,
  rating,
  review,
  city,
  country,
  superhost,
}) {
  return (
    <div className="title">
      <h1 className="title-text">{title}</h1>
      <div className="title-sub-blok">
        <span className="title-sub-value">{rating} рейтинг</span>
        <span className="title-sub-value">{review} відгуків</span>
        <span className="title-sub-value">
          {city}, {country}
        </span>

        {superhost && <span className="title-sub-value">Супер-хост</span>}
      </div>
    </div>
  );
}
