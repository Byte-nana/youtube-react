import React from 'react';
import styles from './Avatar.module.css';

export default function Avatar({ url, name }) {
  return <img className={styles.avatar} src={url} alt={name} />;
}
