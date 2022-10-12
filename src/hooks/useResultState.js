import { useEffect, useState } from 'react';

const initialResultState = null;

const useInitialResultState = () => {
    const [consul, setConsul] = useState(initialResultState);

    const refreshData = (valor) => {
        setConsul(valor);
    };

    return {
        consul, refreshData
    }
}

export default useInitialResultState;