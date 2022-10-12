import React, { useState } from 'react';

const initialState = '';

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToSearch = (valor) => {
        setState(valor);
    };

    return {
        state, addToSearch
    }
}

export default useInitialState;