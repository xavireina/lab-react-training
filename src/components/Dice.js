import React, { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const Dice = (props) => {
    const [Dice, setDice] = useState(true);
    const randomDice =[dice1,dice2,dice3,dice4,dice5,dice6]
    const AleaDice = randomDice[Math.floor(Math.random() * randomDice.length)]

  return (
      <div>
    <img style={{width:"90px"}} src={Dice ? `${diceEmpty}` : `${AleaDice}`} alt='Dice' onClick={setTimeout(() => {
 setDice(!Dice)}, 1000)}></img>
  </div>
  );
};

export default Dice;