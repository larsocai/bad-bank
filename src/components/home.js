import React from 'react';
import Card from './card';
import bankImg from '../assets/bank.png';

function Home() {
  return (
    <Card 
      txtcolor="black"
      header="BadBank Landing Page"
      title="Welcome to the Bank"
      text="Here for all your financial needs"
      body={(<img src={bankImg} className="img-fluid" alt="Responsive image"/>)}
    />
  );
}

export default Home;
