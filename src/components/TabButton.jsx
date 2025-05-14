import { string, bool, func } from "prop-types";

function TabButton({ children, isSelected, onSelect }) {
  const handleClick = () => {
    onSelect();
  };

  return (
    <li>
      <button
        onClick={handleClick}
        className={isSelected ? "active" : undefined}
      >
        {children}
      </button>
    </li>
  );
}

TabButton.propTypes = {
  children: string.isRequired,
  isSelected: bool,
  onSelect: func.isRequired,
};

export default TabButton;
