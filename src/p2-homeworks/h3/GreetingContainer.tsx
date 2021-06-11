import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import Greeting from './Greeting';
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any \\ COMPLETED
    addUserCallback: (name: string) => void // need to fix any \\ COMPLETED
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(''); // need to fix any
    const [error, setError] = useState<string>(''); // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any \\ COMPLETED
        const trimmedName = e.currentTarget.value.trim(); // need to fix

        if (trimmedName) {
            setName(trimmedName);
            setError('');
        } else {
            setName('');
            setError('Name is required');
        }
    };

    const addUser = () => {
        addUserCallback(name);
        alert(`Hello ${name} !`);
        setName('');
    };

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
        addUser()
        }
    };


    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
        />
    );
};

export default GreetingContainer;
