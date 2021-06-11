import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string // need to fix any
    totalUsers: number
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser,onEnter, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.input

    return (
        <div>
            <input
                value={name}
                onChange={setNameCallback}
                onKeyPress={onEnter}
                className={inputClass}/>
            <span>{error}</span>
            <button onClick={addUser} disabled={!name} >add</button>
            <span>{totalUsers}</span>
        </div>
    );
};

export default Greeting;
