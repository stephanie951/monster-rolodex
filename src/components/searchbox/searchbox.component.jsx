import "./searchbox.component.css";

const Searchbox = ({ className, placeholder, onSearchMove }) => {
  return (
    <input
      className={`search-bar ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onSearchMove}
    />
  );
};

export default Searchbox;
