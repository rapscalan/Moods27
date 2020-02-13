import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';

const Controls = ({ actionsArr }) => (
  <section className={styles.Controls}>
    {actionsArr.map(({ text, count, action }) => (
      <button key={name} onClick={action}>
        {text || name} {!!count && `- ${count}`}
      </button>
    ))}
  </section>
);

Controls.propTypes = {
  actionsArr: PropTypes.array.isRequired
};

export default Controls;
