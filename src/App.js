import React from 'react';
import './App.css';
/* Import de nos composants */
import Clock from './components/Clock';
import Incrementer from './components/Incrementer';
import HomeComponent from './components/HomeComponent';
import ManualIncrementer from './components/ManualIncrementer';

Incrementer.defaultProps = {
  value: 0,
  step: 1
}

export default () => {
  return (
      <div className="container">
        <HomeComponent>Command_maker</HomeComponent>
        <Clock/>
        <Incrementer start={20} step={10}/>
        <Incrementer start={10}/>
        <ManualIncrementer/>
      </div>
  )
}