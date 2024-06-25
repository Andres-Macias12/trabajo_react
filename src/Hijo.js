import React from 'react';
import styles from './Hijo.module.css';

const Hijo = ({ mensaje }) => {
  return (
    <div className={styles.hijoContainer}>
      <h2 className={styles.titulo}>Componente Hijo</h2>
      <p className={styles.mensaje}>{mensaje}</p>
    </div>
  );
}

export default Hijo;