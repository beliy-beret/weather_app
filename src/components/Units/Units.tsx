import React, { ChangeEvent } from 'react';
import './Units.css';

type Props = {
  toggleUnit: (e: ChangeEvent<HTMLInputElement>) => void
}

const Units: React.FC<Props> = ({ toggleUnit }) => {
  return (
    <div className="units" onChange={toggleUnit}>
      <input type="radio" name="unit" id="metric" value="metric" defaultChecked/>
      <label htmlFor="metric">C</label>
      <input type="radio" name="unit" id="imperial" value="imperial"/>
      <label htmlFor="imperial">F</label>
    </div>
  );
};

export default Units;
