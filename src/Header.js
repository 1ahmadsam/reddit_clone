import React, { useState } from 'react';
import './Header.css';
import redditLogo from './images/reddit.png';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useStateValue } from './StateProvider';
const Header = () => {
  const [search, setSearch] = useState('');
  const [{ query }, dispatch] = useStateValue();

  const handleReset = (e) => {
    e.preventDefault();
    setSearch('');
    dispatch({
      type: 'CHANGE_QUERY',
      item: 'popular',
    });
  };
  const setQuery = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CHANGE_QUERY',
      item: search ? search : 'popular',
    });
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <img
          className='header__logo'
          src={redditLogo}
          alt='reddit'
          onClick={handleReset}
        />
      </div>
      <div className='header__center'>
        <form className='header__search' onSubmit={setQuery}>
          <div className='header__searchIcon'>
            <SearchIcon />
          </div>

          <input
            className='header__searchInput'
            type='text'
            value={search}
            placeholder='Search'
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>
      </div>
      <div className='header__right'>
        <button className='header__buttonLogin'>LOG IN</button>
        <button className='header__buttonSignup'>SIGN UP</button>
        <div className='header__option'>
          <PersonIcon />
          <ArrowDropDownIcon
            style={{ paddingLeft: '8px', paddingRight: '16px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
