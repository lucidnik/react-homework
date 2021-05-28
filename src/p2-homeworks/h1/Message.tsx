import React from 'react';
import s from './Message.module.css';

type PropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string

}

function Message(props: PropsType) {
    return (
        <div>
            <img className={s.img} src={props.avatar} alt=""/>
            <div className={s.speechBubble}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.message}>
                    {props.message}
                </div>
                <div className={s.time}>
                    {props.time}
                </div>
            </div>
        </div>


    );

}

export default Message;
