import React from 'react';
import './SearchChat.scss';
import {useDispatch} from 'react-redux';
import {addPhoneNum} from '../../../Store/actions';


function SearchChat() {
    const [inputValue, setInputValue] = React.useState('');

    const dispatch = useDispatch();

    const handleInput = (value) => {
        setInputValue(value);
    }

    const validate = (value) => {
        const regExpTel = /^7\d{10}$/;
        if (regExpTel.test(value)) {return true}
        else {return false}
    }

    const hahdleEnter = () => {
        if (validate(inputValue)) {
            dispatch(addPhoneNum(inputValue));
            setInputValue('');
        } else {dispatch(addPhoneNum(inputValue))}
    }


    return (
        <div className='searchChat'>
            <input 
                type="text" 
                className='inputSearch' 
                placeholder='введите номер в формате 79000000000'
                onChange={(e) => handleInput(e.target.value)}
                value={inputValue}
            />
            <i className="fa-solid fa-right-to-bracket" onClick={hahdleEnter}></i>
        </div>
    )
}



export default SearchChat;