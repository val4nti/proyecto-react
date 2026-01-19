// src/components/molecules/SearchBar.jsx
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const SearchBar = () => {
  return (
    <form className="d-flex w-50" role="search">
      <Input placeholder="Buscar productos..." />
      <Button text="Buscar" variant="outline-success" />
    </form>
  );
};

export default SearchBar;


