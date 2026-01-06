import React, { useEffect, useRef, useState } from 'react';
import NanaTubeIcon from '../icons/NanaTubeIcon';
import { LuSearch } from 'react-icons/lu';
import { Link, useNavigate, useParams } from 'react-router';
import Avatar from './ui/Avatar';

export default function Header() {
  const [text, setText] = useState('');
  const { keyword } = useParams();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
    inputRef.current.blur();
    buttonRef.current.blur();
  };

  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  return (
    <header className='w-full flex justify-between items-center p-4 mb-8 border-b-2 border-accent'>
      <Link to='/' className='flex items-center gap-1'>
        <NanaTubeIcon width={44} bgColor='#ff0000' strokeColor='#f5f4f2' />
        <h1 className='text-2xl font-bold'>NanaTube</h1>
      </Link>
      <form
        className='flex w-6/12 h-11 items-center border-2 border-transparent rounded-2xl bg-accent focus-within:border-2 focus-within:border-brand'
        onSubmit={handleSubmit}
      >
        <input
          className='w-full p-2 text-lg '
          ref={inputRef}
          type='text'
          value={text}
          placeholder='Search...'
          onChange={(e) => setText(e.target.value)}
        />
        <button ref={buttonRef} type='submit' className='p-2 text-2xl'>
          <LuSearch />
        </button>
      </form>
      <a href='https://github.com/Byte-nana/' target='_blank'>
        <Avatar url={'/img/profile.png'} name={'profile avatar'} />
      </a>
    </header>
  );
}
