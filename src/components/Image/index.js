import React from 'react';
import styled from 'styled-components';

import SVG from '../../assets/logos/Slice 1.svg';

const Img = styled.img`
  width: 100%;
  max-width: 600px;
`;

const Image = () => <Img src={SVG} alt="GatsbyJS + Storybook" />;

export default Image;
