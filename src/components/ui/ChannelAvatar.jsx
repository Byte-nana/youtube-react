import React from 'react';
import styles from './ChannelAvatar.module.css';

export default function ChannelAvatar({ url, name }) {
  return <img className={styles.avatar} src={url} alt={name} />;
}
