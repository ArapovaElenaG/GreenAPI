import React from 'react';
import './MessageEnter.scss';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {addMessageToFed} from '../../../Store/actions';



function MessageEnter() {
    const [inputValue, setInputValue] = React.useState('');

    const dispatch = useDispatch();
    const phoneNum = useSelector(state => state.phoneNum);

    const handleInput = (event) => {
        if (event.keyCode) {
            if (event.keyCode == 13 && inputValue) {
                setInputValue('');
                if (phoneNum) {
                    sendMessage();
                    dispatch(addMessageToFed({
                            type: 'messageOutgoing',
                            body: inputValue,
                            date: Date.now()
                    }))
                }
            }
        } else {setInputValue(event.target.value)};

    }


    // функция отправки запроса
    const sendMessage = () => {
        const data = {
            "chatId": `${phoneNum}@c.us`,
            "message": inputValue
        }

        const url = 'https://api.green-api.com/waInstance1101821599/SendMessage/b99e7dc1b2a34a49b8923049dc49c930cd2485bb5fc640c7ad';

        axios
            .post(url, data)
            .then(result => {
                // console.log('Запрос прошел с результатом ', result);
            })
            .catch(error => {console.log(error)});
    }




    const getNotification = () => {
        axios
            .get('https://api.green-api.com/waInstance1101821599/ReceiveNotification/b99e7dc1b2a34a49b8923049dc49c930cd2485bb5fc640c7ad')
            .then(result => {
                if (result.data) {
                    if (result.data.body.senderData.chatId == `${phoneNum}@c.us`) {
                        dispatch(addMessageToFed({
                            type: 'messageIncoming',
                            body: result.data.body.messageData.textMessageData.textMessage,
                            date: Date.now(),
                            sender: result.data.body.senderData.chatId
                        }))
    
                        axios
                            .delete(`https://api.green-api.com/waInstance1101821599/DeleteNotification/b99e7dc1b2a34a49b8923049dc49c930cd2485bb5fc640c7ad/${result.data.receiptId}`)
                            .then(result => {
                                    // console.log('Запрос прошел с результатом ', result);
                            })
                            .catch(error => {
                                // console.log(error);
                            })
                    }
                }
            })
            .catch(error => {
                // console.log(error);
            });
    }

    let timerId = null;

    React.useEffect(() => {
        timerId = setInterval(() => {
            getNotification();
        }, 7000);
        return () => {
            clearInterval(timerId);
        };
    }, [])



    return (
        <div className='messageEnter'>
            <i className="icon fa-regular fa-face-laugh"></i>
            <i className="icon fa-solid fa-paperclip"></i>
            <input type="text" 
                onChange={handleInput}
                onKeyDown={handleInput}
                value={inputValue}
                className='inputEnter'
                placeholder='Введите сообщение и нажмите Enter'
            />
            <i className="fa-solid fa-microphone"></i>
        </div>
    )
}





export default MessageEnter;