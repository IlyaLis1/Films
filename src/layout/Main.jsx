import { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import Movies from '../components/Movies';
import MovieSearch from '../components/Search';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showNoResults, setShowNoResults] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      fetch(`http://www.omdbapi.com/?apikey=c8ed8ebe&s=${searchTerm}`)
        .then(res => res.json())
        .then(data => {
          if (data.Error) {
            setMovies([]);
            setShowNoResults(true);
          } else {
            setMovies(data.Search);
            setShowNoResults(false);
          }
        });
    } else {
      fetch(`http://www.omdbapi.com/?apikey=c8ed8ebe&s=terminator&page=1`)
        .then(res => res.json())
        .then(data => {
          setMovies(data.Search);
          setShowNoResults(false);
        });
    }
  }, [searchTerm]);

  const handleSearch = value => {
    setSearchTerm(value);
  };

  return (
    <Layout.Content>
      <Row>
        <Col xs={24} sm={{ span: 18, offset: 3 }}>
          <Row className='justify-center' gutter={[32, 32]}>
            <Col span={24}>
              <MovieSearch onSearch={handleSearch} />
              {showNoResults && <h3>No results found</h3>}
            </Col>
            {
              movies.length ?
                <Movies movies={movies} />
                : <h3>Try to find something else!</h3>
            }
          </Row>
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default Main;