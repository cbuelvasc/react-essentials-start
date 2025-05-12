import { string, bool, func } from "prop-types";

function TabButton({ children, isActive, onSelect }) {  
  return (
    <li>
      <button onClick={onSelect} className={isActive ? "active" : undefined}>
        {children}
      </button>
    </li>
  );
}

TabButton.propTypes = {
  children: string.isRequired,
  isActive: bool,
  onSelect: func.isRequired,
};

export default TabButton;
