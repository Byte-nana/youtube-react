import React, { useEffect, useState } from 'react';
import NanaTubeIcon from '../icons/NanaTubeIcon';
import { LuSearch } from 'react-icons/lu';
import { Link, useNavigate, useParams } from 'react-router';
import styles from './Header.module.css';

export default function Header() {
  const [text, setText] = useState('');
  const { keyword } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.logoBox}>
        <NanaTubeIcon width={44} bgColor='#b30103' strokeColor='#f5f4f2' />
        <h1 className={styles.logoText}>NanaTube</h1>
      </Link>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          className={styles.formText}
          type='text'
          value={text}
          placeholder='Search...'
          onChange={(e) => setText(e.target.value)}
        />
        <button className={styles.formButton} type='submit'>
          <LuSearch />
        </button>
      </form>
      <a href='https://github.com/Byte-nana/' target='_blank'>
        <img
          className={styles.avatar}
          src='./img/avatar.png'
          alt='profile avatar'
        />
      </a>
    </header>
  );
}
