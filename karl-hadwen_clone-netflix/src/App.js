import React from 'react';
import Jumbotron from './components/jumbotron';
import jumboData from './fixtures/jumbo';

const App = () => (
  <Jumbotron.Container>
    {jumboData.map((item) => (
      <Jumbotron key={item.id} direction={item.direction}>
        <Jumbotron.Pane>
          <Jumbotron.Title>{item.title}</Jumbotron.Title>
          <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
        </Jumbotron.Pane>
        <Jumbotron.Pane>
          <Jumbotron.Image image={item.image} alt={item.alt}></Jumbotron.Image>
        </Jumbotron.Pane>
      </Jumbotron>
    ))}
  </Jumbotron.Container>
);

export default App;
