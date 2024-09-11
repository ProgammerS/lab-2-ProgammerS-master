import { ChangeEvent } from "react";
import './Search.css'

type SearchProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by category..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
