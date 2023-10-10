import "./index.css";
import Heading from "../heading";

export default function Contact({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="contact">
      <div className="contact-blok">
        <img src={image} alt={name} className="contact-photo" />
        <div className="contact-blok-item">
          <Heading>Господар – {name}</Heading>
          <div className="contact-blok-sub">
            <span className="contact-sub-value">{phone} </span>
            <span className="contact-sub-value">{response_time}</span>
            <span className="contact-sub-value">
              {response_rate}% відсотків швидкості відгуку
            </span>
          </div>
        </div>
      </div>

      <span className="contact-sub-value">{info}</span>
    </div>
  );
}
