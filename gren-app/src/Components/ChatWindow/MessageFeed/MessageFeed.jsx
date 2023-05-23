import React from 'react';
import './MessageFeed.scss';
import {useSelector} from 'react-redux';


function MessageFeed() {
    const messages = useSelector(state => state.messageFeed);

    return (
        <div className='wrapper'>
            <div className='messageFeed'>
                {messages.map((item, index) => {
                    return (
                        <div className={item.type} key={index}>
                            <div className='bodyMessage'>
                                {item.body}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}





export default MessageFeed;