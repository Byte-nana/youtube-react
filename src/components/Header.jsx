import React, { useEffect, useState } from 'react';
import NanaTubeIcon from '../icons/NanaTubeIcon';
import { LuSearch } from 'react-icons/lu';
import { Link, useNavigate, useParams } from 'react-router';

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
    <header>
      <Link to='/'>
        <NanaTubeIcon />
        <h1>NanaTube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          placeholder='Search...'
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>
          <LuSearch />
        </button>
      </form>
    </header>
  );
}
