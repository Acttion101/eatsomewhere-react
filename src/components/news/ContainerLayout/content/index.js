import React, { useState } from "react";
import style from "./main.module.css";
function Content(props) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={style.content}>
      <form onSubmit={handleSubmit}>
        <div className={style.button}>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button>search</button>
        </div>
        <div>{inputValue}</div>
        Tennis requires cat-like reflexes with short bursts of strength. These
        short movements do not allow the muscles to extend their full length.
        When muscles are strenuously worked they become tight and can lose their
        elasticity unless properly stretched. Yoga exercises can increase the
        body’s range of motion. The lack of movement because of inflexibility
        binds the joints. Without the elasticity of the muscles, I think an
        athlete can be a prisoner of his own body. Tennis requires cat-like
        reflexes with short bursts of strength. These short movements do not
        allow the muscles to extend their full length. When muscles are
        strenuously worked they become tight and can lose their elasticity
        unless properly stretched. Yoga exercises can increase the body’s range
        of motion. The lack of movement because of inflexibility binds the
        joints. Without the elasticity of the muscles, I think an athlete can be
        a prisoner of his own body. Tennis requires cat-like reflexes with short
        bursts of strength. These short movements do not allow the muscles to
        extend their full length. When muscles are strenuously worked they
        become tight and can lose their elasticity unless properly stretched.
        Yoga exercises can increase the body’s range of motion. The lack of
        movement because of inflexibility binds the joints. Without the
        elasticity of the muscles, I think an athlete can be a prisoner of his
        own body. Tennis requires cat-like reflexes with short bursts of
        strength. These short movements do not allow the muscles to extend their
        full length. When muscles are strenuously worked they become tight and
        can lose their elasticity unless properly stretched. Yoga exercises can
        increase the body’s range of motion. The lack of movement because of
        inflexibility binds the joints. Without the elasticity of the muscles, I
        think an athlete can be a prisoner of his own body.
      </form>
    </div>
  );
}
export default Content;
