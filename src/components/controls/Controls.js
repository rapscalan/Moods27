import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';

const Controls = ({ actionsArr, handleSelect }) => (
  <section className={styles.Controls}>
    {actionsArr.map(({ name, text, count, action }) => (
      <button key={name} onClick={()=>handleSelect(action)}>
        {text || name} {!!count && `- ${count}`}
      </button>
    ))}
  </section>
);

Controls.propTypes = {
  actionsArr: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired
};

export default Controls;
