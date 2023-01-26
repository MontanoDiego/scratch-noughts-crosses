import React from 'react';
import './Main.css';

export default function Main() {


  // hardcode for styling purposes
  return (
    <div>
      <section>
        <h3>x it is your turn!</h3>
        <h2>Cats Game!</h2>
      </section>
      <section className='box-container'>
        <div className='play-box'>Box1</div>
        <div className='play-box'>Box2</div>
        <div className='play-box'>Box3</div>
        <div className='play-box'>Box4</div>
        <div className='play-box'>Box5</div>
        <div className='play-box'>Box6</div>
        <div className='play-box'>Box7</div>
        <div className='play-box'>Box8</div>
        <div className='play-box'>Box9</div>
      </section>
    </div>
  );
}