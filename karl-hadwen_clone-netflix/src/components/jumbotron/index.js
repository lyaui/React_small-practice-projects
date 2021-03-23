import React from 'react';
import { Item, Inner, Container, Pane, Title, SubTitle, Image } from './styles/jumbotron';

const Jumbotron = ({ children, direction = 'row' }) => (
  <Item>
    <Inner direction={direction}>{children}</Inner>
  </Item>
);

export default Jumbotron;

Jumbotron.Container = ({ children }) => <Container>{children}</Container>;

Jumbotron.Pane = ({ children }) => <Pane>{children}</Pane>;

Jumbotron.Title = ({ children }) => <Title>{children}</Title>;

Jumbotron.SubTitle = ({ children }) => <SubTitle>{children}</SubTitle>;

Jumbotron.Image = ({ image, alt, ...restProps }) => (
  <Image src={image} alt={alt} {...restProps}></Image>
);
