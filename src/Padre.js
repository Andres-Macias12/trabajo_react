import React from 'react';
import Hijo from './Hijo';
import styles from './Padre.module.css';

const Padre = () => {
  const mensaje = "Hola desde el componente Padre";

  return (
    <div className={styles.padreContainer}>
      <h1 className={styles.titulo}>Componente Padre</h1>
      <Hijo mensaje={mensaje} />
    </div>
  );
}

export default Padre;