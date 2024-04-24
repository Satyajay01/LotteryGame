import React, { useState } from "react";
import './LotteryGame.css'

const LotteryGame = () => {
  const [useNum1, setUsenum1] = useState(0);
  const [useNum2, setUsenum2] = useState(0);
  const [useNum3, setUsenum3] = useState(0);

  const [winning, setWinning] = useState();
  const [myanimation, setMyanimation] = useState(null);

  function Lotterytickets(params) {
    const Var_Num1 = Math.floor(Math.random() * 10);
    setUsenum1(Var_Num1);

    const Var_Num2 = Math.floor(Math.random() * 10);
    setUsenum2(Var_Num2);

    const Var_Num3 = Math.floor(Math.random() * 10);
    setUsenum3(Var_Num3);

    const AllNumber = Var_Num1 + Var_Num2 + Var_Num3;

    if (AllNumber == 15) {
      alert("Your Lottery is 🎫: " + (Var_Num1 + "" + Var_Num2 + "" + Var_Num3));
      setTimeout(() => {
          setWinning("Congratulations You Won 💐🤩💸💐 : ");
      }, 100);
    } 
    
    else {
      alert("Your Lottery Number is 🎫: " +(Var_Num1 + "" + Var_Num2 + "" + Var_Num3));
      setTimeout(() => {
          setWinning("Best of luck for next time 👍 : ");
      }, 100);
    }


        setMyanimation(null); 
        setTimeout(() => {
          setMyanimation("winning_text");
        }, 100);
    
  }

  return (
    <div>
      <h2>Lottery Game</h2>
  
      <div>
        Your Lottery Ticket Number 🎟️: <h1>{useNum1} {useNum2} {useNum3}</h1>
      </div>
  
      <h3 className={`${myanimation}`}>
        {winning}
      </h3>
  
      <button onClick={Lotterytickets}>Get New Ticket</button>
    </div>
  );
  
};

export default LotteryGame;
