import { string } from "prop-types";

function TabContent({ title, description, code }) {
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <pre>
        <code>{code}</code>
      </pre>
    </>
  );
}

TabContent.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  code: string.isRequired,
};

export default TabContent;
