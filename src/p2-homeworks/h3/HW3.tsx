import React, {useState} from 'react';
import {v1} from 'uuid';
import GreetingContainer from './GreetingContainer';

// types
export type UserType = {
    name: any // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]); // need to fix any ========= ASK WHY AN EMPTY OBJECT FUCKS UP THE LOGIC

    const addUserCallback = (name: string) => { // need to fix any
        let newUser = {id: v1(), name}; // need to fix
        setUsers([...users, newUser]);
    };

    console.log(users);


    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    );
}

export default HW3;
