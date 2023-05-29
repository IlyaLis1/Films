import { Input } from 'antd';

const { Search } = Input;

const MovieSearch = ({ onSearch }) => {

  const handleSearch = value => {
    onSearch(value);
  };

  return (
    <Search
      placeholder="Search for a movie"
      onSearch={handleSearch}
      enterButton
    />
  );
};

export default MovieSearch;