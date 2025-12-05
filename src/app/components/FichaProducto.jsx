import React from "react";
import styles from "./FichaProducto.module.css";

export default function FichaProducto() {
  return (
    <div className={styles.contenedor}>
      <div className={styles.nombre}>Mouse Inalámbrico</div>
      <div className={styles.precio}>$15.99</div>
      <button className={styles.botonAgregar}>Agregar</button>
    </div>
  );
}
