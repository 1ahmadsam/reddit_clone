import React from 'react';
import './Thread.css';
import ForwardIcon from '@material-ui/icons/Forward';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import UndoIcon from '@material-ui/icons/Undo';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { nFormatter } from './resources';
const Thread = ({ post }) => {
  const renderContent = () => {
    // if post_hint is null there's no content to render
    if (post?.post_hint) {
      switch (post.post_hint) {
        case 'image':
          return (
            <div className='thread__content'>
              <img src={post?.url} alt='' />
            </div>
          );
        case 'link':
          return (
            <div className='thread__contentLink'>
              <a
                href={post?.url}
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  color: '#4193c6',
                  textDecoration: 'none',
                }}
              >
                {`${post?.url.substr(0, 35)}...`}{' '}
              </a>
            </div>
          );
        case 'hosted:video':
          return (
            <div className='thread__content'>
              <video autoPlay controls width='100%'>
                <source src={post?.secure_media?.reddit_video?.fallback_url} />
              </video>
            </div>
          );
        default:
          return;
      }
    }
  };
  //TODO grab time created, created_at , media

  // subreddit={post.data.subreddit}
  // title={post.data.title}
  // author={post.data.author}
  // upvotes={post.data.ups}
  // post_type={post_hint}
  return (
    <div className='thread'>
      <div className='thread__vote'>
        <ForwardIcon className='thread__upvote' />
        {nFormatter(parseInt(post?.ups), 1)}
        <ForwardIcon className='thread__downvote' />
      </div>
      <div className='thread__main'>
        <div className='thread__top'>
          r/{post?.subreddit}{' '}
          <span className='thread__author'>• Posted by u/{post?.author}</span>
        </div>
        <div className='thread__title'>{post?.title}</div>
        {/* if is_video, use secure_media, post_hint doesnt always exist: image, hosted:video  */}
        {renderContent()}
        {/* <img src='https://i.redd.it/ot55srzcg9p51.jpg' alt='' /> */}
        <div className='thread__options'>
          <div className='thread__option'>
            <ChatBubbleIcon className='thread__icons' /> Comments
          </div>
          <div className='thread__option'>
            <UndoIcon className='thread__icons thread__share' /> Share
          </div>
          <div className='thread__option'>
            <BookmarkIcon className='thread__icons' /> Save
          </div>
          <div className='thread__option'>
            <MoreHorizIcon className='thread__icons' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thread;
