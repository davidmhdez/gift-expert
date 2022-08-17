import {useEffect, useState} from "react";
import Gift from "../entities/Gift";
import {toast} from "react-toastify";
import axios from "axios";

const useGifts = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [gifts, setGifts] = useState<Gift[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    const loadGifts = async () => {
        setIsLoading(true);
        try {
            const { data } =  await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=uWt6ZqaI9Q7h3Oh8SJjNxEig6Fz43MRP&q=${searchTerm}&limit=25&offset=0&rating=g&lang=es`)
            setGifts(data.data.map((d: any) => {
                return{
                    id: d.id,
                    title: d.title,
                    url: d.images.downsized_still.url
                }
            }));
        }catch (error){
            console.error(error);
            toast.error('Error al obtener los gifts');
            setGifts([]);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        if(searchTerm){
            loadGifts();
        }
    }, [searchTerm]);

    return {
        isLoading,
        gifts,
        searchTerm,
        getGifts: (search: string) => setSearchTerm(search)
    }
};

export default useGifts;
