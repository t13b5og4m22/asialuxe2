import './InputsAvia.css';
import { useState } from 'react';
import plane1 from '../../../assets/icons/plane1.svg';
import plane2 from '../../../assets/icons/plane2.svg';

function InputsAvia() {

  const [aviaData, setAviaData] = useState({
    aviaFrom: "",
    aviaTo: "",
    aviaDate1: "",
    aviaDate2: "",
    aviaPeople: [1,0,0,""]
  })

  return (
    <div className="InputsAvia">
        <div className="input_aviaFrom">
            <h4>Откуда</h4>
            <img src={plane1} alt="plane1" className='plane1'/>
        </div>
        <div className="input_aviaTo">
            <h4>Куда</h4>
            <img src={plane2} alt="plane2" className='plane2'/>
        </div>
    </div>
  );
}

export default InputsAvia;