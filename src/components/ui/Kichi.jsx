import kichi from '../../assets/images/figure/kichi_figure.png';
import kichi3hp from '../../assets/images/figure/kichi3hp.png';
import kichi2hp from '../../assets/images/figure/kichi2hp.png';
import kichi1hp from '../../assets/images/figure/kichi1hp.png';
import "./kichi.css"


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
