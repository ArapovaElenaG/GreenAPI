import React from 'react';
import './ChatWindow.scss';
import Header from './Header/Header';
import MessageFeed from './MessageFeed/MessageFeed';
import MessageEnter from './MessageEnter/MessageEnter';


function ChatWindow({phoneNum}) {
    return (
        <div className='chatWindow'>
            <Header/>
            <MessageFeed/>
            <MessageEnter phoneNum={phoneNum}/>
        </div>
    )
}


export default ChatWindow;