import React from 'react';

type AffairPropsType = {
    // key не нужно типизировать
    affair: any // need to fix any
    deleteAffairCallback: any // need to fix any
}

function Affair(props: AffairPropsType) {
    console.log(props)
    const deleteCallback = () => {
    };// need to fix

    return (
        <div>
            <div>

            </div>
            <button onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
