import React from 'react';
import './ChatList.scss';
import Header from './Header/Header';
import SearchChat from './SearchChat/SearchChat';
import {useSelector} from 'react-redux';


function ChatList() {
    const phoneNum = useSelector(state => state.phoneNum);

    return (
        <div className='chatList'>
            <Header/>
            <SearchChat/>
            <div className='itemChat'>
                <div className='avatar'></div>
                <div>
                    <div className='name'>
                        {!phoneNum ? 'Номер не введен' : phoneNum.length > 1 ? phoneNum : 'Некорректный номер'}
                        <br/>
                        <span className='span'>{phoneNum.length > 1 ? 'Уже можно писать сообщения' : ''}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default ChatList;