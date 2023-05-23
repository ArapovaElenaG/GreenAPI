import React from 'react';
import './Header.scss';
import iconMessage from './images/chat-left-text-fill.svg';

function Header() {
    return (
        <header className='header'>
            <div className='avatar'></div>
            <div className='icons'>
                <i className="icon fa-solid fa-users-line"></i>
                <i className="icon fa-solid fa-circle-notch"></i>
                <img src={iconMessage} alt="" height="20" className='icon'/>
                <i className="icon fa-solid fa-ellipsis-vertical"></i>
            </div>
        </header>
    )
}

export default Header;