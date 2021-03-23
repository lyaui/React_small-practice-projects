import React from 'react';
import './App.scss';
import { Card } from './components/';
import movies from './data.json';

function App() {
  return (
    <div className='App'>
      <main>
        {movies.map((movie) => (
          <Card className='mr' key={movie.id}>
            <Card.Image src={movie.image} alt={movie.title}></Card.Image>
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.desc}</Card.Text>
              <Card.Button>{movie.ctaText}</Card.Button>
            </Card.Body>
          </Card>
        ))}
      </main>
    </div>
  );
}

export default App;
