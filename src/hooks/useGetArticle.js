import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetArticle = (API) => {
    const [content, setContent] = useState([]);
 
    useEffect(() => {
        async function fetchData() {
            const response = await axios(API);
            setContent(response.data);
        };
        fetchData();
    }, []);

    return content
}

export default useGetArticle;