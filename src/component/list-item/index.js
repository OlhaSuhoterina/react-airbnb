import "./index.css";

export default function ListItem({ children, imageSrc, title }) {
  return (
    <li className="list-item">
      {imageSrc && <img height={24} width={24} src={imageSrc} alt="Icon" />}
      <div className="list-item-blok">
        {title && <strong className="list-item-title">{title}</strong>}
        <div className="list-item-content">{children}</div>
      </div>
    </li>
  );
}
