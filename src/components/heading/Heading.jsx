import React from 'react';
import { Subtitle } from './Heading.styles';

const Heading = ({
  title,
  subtitle,
  titleColor,
  subtitleColor,
  titleSize,
  subtitleSize
}) => {
  return (
    <>
      <h1 className={`text--${titleColor} text--${titleSize}`}>{title}</h1>
      <Subtitle className={`text--${subtitleColor} text--${subtitleSize}`}>
        {subtitle}
      </Subtitle>
    </>
  );
};

export default Heading;
