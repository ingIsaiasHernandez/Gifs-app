import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // esta es la función asincrona
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {

        getImages();

        // se puede obtener las url de las imagenes direcamente en esta líne de código 
        // y tambien se puede mediante una función asincrona independiente
        // getGifs(category)
        // .then( newImages => setImages(newImages));           
    }, []);

    return {
        images: images,
        isLoading
    }
    
}

