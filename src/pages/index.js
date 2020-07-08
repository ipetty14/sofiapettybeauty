import React from 'react';
import styled from 'styled-components';

import Layout from '../global/Layout';
import Image from '../components/Image';

const Page = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 24px;
  color: #555;
  margin-top: 60px;
`;

const Label = styled.p`
  font-size: 14px;
  color: #aaa;
  margin-top: 12px;
  letter-spacing: 10px;
  text-transform: uppercase;
`;

const IndexPage = () => (
  <Layout>
    <Page>
      <Image src="https://pyxis.nymag.com/v1/imgs/957/9ae/68c6924a91715c39dc55ffcd8cb9348e4b-soap-lede.rsquare.w700.jpg" />
      <Heading>Sofia Petty</Heading>
      <Label>Beauty</Label>
    </Page>
  </Layout>
);

export default IndexPage;
