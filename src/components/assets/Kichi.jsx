import kichi from '../../images/kichi_figure.png';
import kichi3hp from '../../images/kichi3hp.png';
import kichi2hp from '../../images/kichi2hp.png';
import kichi1hp from '../../images/kichi1hp.png';
import './Kichi.css';
//import { useState } from 'react';

const Kichi = (props) => {
  return (
    // wrap it in a div so I can add the onClick attribute
    <div className="figure_container" onClick={props.action}>
      {props.hpValue >= 4 && (
        <img id="hover-me" src={kichi} alt="Kichi" className="figure" />
      )}
      {props.hpValue === 3 && (
        <img id="hover-me" src={kichi3hp} alt="Kichi" className="figure" />
      )}

      {props.hpValue === 2 && (
        <img id="hover-me" src={kichi2hp} alt="Kichi" className="figure" />
      )}

      {props.hpValue <= 1 && (
        <img id="hover-me" src={kichi1hp} alt="Kichi" className="figure" />
      )}
    </div>
  );
};

export default Kichi;
