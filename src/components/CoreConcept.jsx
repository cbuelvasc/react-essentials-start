import { string } from "prop-types";
import "./CoreConcept.css";

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

CoreConcept.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
};

export default CoreConcept;
