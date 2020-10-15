import React from 'react';
import './Sidebar.css';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__trending'>
        <h4>Today's Top Growing Communites</h4>
      </div>
      <div className='sidebar__row'>
        1 <ArrowDropUpIcon className='sidebar__upIcon' />{' '}
        <img
          className='sidebar__image'
          src='https://vignette.wikia.nocookie.net/among-us-wiki/images/a/ab/Cyan.png/revision/latest/scale-to-width-down/340?cb=20200927084517'
          alt=''
        />{' '}
        r/AmongUs
      </div>

      <div className='sidebar__row'>
        2 <ArrowDropUpIcon className='sidebar__upIcon' />{' '}
        <img
          className='sidebar__image'
          src='https://www.dafont.com/forum/attach/orig/8/9/899543.png?1'
          alt=''
        />{' '}
        r/TheBoys
      </div>

      <div className='sidebar__row'>
        3 <ArrowDropUpIcon className='sidebar__upIcon' />{' '}
        <img
          className='sidebar__image'
          src='https://www.freepngimg.com/thumb/xbox/27256-6-xbox-image.png'
          alt=''
        />{' '}
        r/xboxone
      </div>

      <div className='sidebar__row'>
        4 <ArrowDropUpIcon className='sidebar__upIcon' />{' '}
        <img
          className='sidebar__image'
          src='https://logodix.com/logo/606655.png'
          alt=''
        />{' '}
        r/Amd
      </div>

      <div className='sidebar__row'>
        5 <ArrowDropUpIcon className='sidebar__upIcon' />{' '}
        <img
          className='sidebar__image'
          src='https://d540vms5r2s2d.cloudfront.net/mad/uploads/mad_blog_5d1ca4198fff61562158105.png'
          alt=''
        />{' '}
        r/Technology
      </div>
      <div className='sidebar__button'>
        <button>VIEW ALL</button>
      </div>
      <div className='sidebar__categories'>
        <button>Sports</button>
        <button>News</button>
        <button>Gaming</button>
        <button>Aww</button>
      </div>
    </div>
  );
};

export default Sidebar;
