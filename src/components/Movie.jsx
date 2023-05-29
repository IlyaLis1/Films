import React from 'react'
import { Col } from 'antd';
import { Card } from 'antd';

const { Meta } = Card;

const Movie = (props) => {
  return (
    <>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={props.Poster} />}
        >
          <Meta title={props.Title} description={`${props.year} ${props.type}`} />
        </Card>
      </Col>
    </>
  );
};

export default Movie;