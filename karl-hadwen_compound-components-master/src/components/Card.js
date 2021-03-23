import React from 'react';
import classNames from 'classnames';
import { Container, Body, Title, Text, Image, Button } from './style/Card';

export function Card({ classes, children, ...restProps }) {
  return (
    <Container className={classNames('card', classes)} {...restProps}>
      {children}
    </Container>
  );
}

Card.Body = ({ classes, children, ...restProps }) => (
  <Body className={classNames('card__body', classes)} {...restProps}>
    {children}
  </Body>
);

Card.Title = ({ classes, children, ...restProps }) => (
  <Title className={classNames('card__title', classes)} {...restProps}>
    {children}
  </Title>
);

Card.Text = ({ classes, children, ...restProps }) => (
  <Text className={classNames('card__text', classes)} {...restProps}>
    {children}
  </Text>
);

Card.Image = ({ src, alt, classes, ...restProps }) => (
  <Image src={src} alt={alt} className={classNames('card__image', classes)} {...restProps}></Image>
);

Card.Button = ({ classes, children, ...restProps }) => (
  <Button className={classNames('card__button', classes)} {...restProps}>
    {children}
  </Button>
);
