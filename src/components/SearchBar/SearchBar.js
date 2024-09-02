import {
  SearchInput,
  SearchWrapper,
  SearchButton,
  Icon,
  SearchForm,
} from "./SearchBar.styled";

export default function SearchBar({ onSearch, value }) {
  return (
    <SearchWrapper>
      <SearchForm onSubmit={onSearch}>
        <SearchInput
          name="search"
          defaultValue={value}
          type="text"
          placeholder="Rechercher un film"
        />
        <SearchButton type="submit">
          Rechercher  <Icon />
        </SearchButton>
      </SearchForm>
    </SearchWrapper>
  );
}
