import React from 'react';

const useGetContent = (API, state) => {
    const [content, setContent] = useState([]);
 
    useEffect(async() => {
        const response = await axios(API);
        setContent(response.data.ContenidoArticulo);
    }, [state]);

    return content
}

export default useGetContent