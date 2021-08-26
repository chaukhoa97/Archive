import styles from './ChartBar.module.css';
import React, { useState } from 'react';

const ChartBar = (props) => {
  let barFillHeight = '0%';
  const [valid, setValid] = useState('valid');

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className={`${styles['chart-bar']} ${styles.vip}`}>
      <div className="chart-bar__inner">
        <div
          className={`chart-bar__fill ${
            valid ? 'valid-chart' : 'unvalid-chart'
          }`}
          // Dấu {} bên ngoài -> expression; dấu {} bên trong -> STYLE object in React
          // Expression:  Let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string
          style={{
            height: barFillHeight ? '100px' : '200px',
            zIndex: 3, //* Khi set inline style phải là camelCase
          }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
