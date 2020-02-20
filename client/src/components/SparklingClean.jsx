import React from 'react';
import css from '../../dist/styles.css';

const SparkingClean = () => {
  const recentGuests = `${Math.floor(Math.random() * 75)} recent guests said this place was sparkling clean.`;
  return (
    <div className={css.cleaning}>
      <div className={css.icon}><i className="fas fa-spray-can fa-xs" /></div>
      <div className={css['cleaning-info']}>
        <div className={css['clean-title']}>Sparkling clean</div>
        <div className={css['clean-content']}>
          {recentGuests}
        </div>
      </div>
    </div>
  );
}
export default SparkingClean;
