import { useEffect, useState } from "react";

const useCreateTextBox = () => {

    const [box, setBox] = useState(['work']);
    
    const createBox = () => {
        setBox((current) => ([...current, 'work']));
    }

    return box;
}

export default useCreateTextBox;