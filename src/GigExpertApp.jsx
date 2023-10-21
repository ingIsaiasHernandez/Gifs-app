import { useState } from "react";
import {AddCategory, GifGrid} from "./components";

const GigExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const addCategory = (newCategory) => {
        // setCategories([...categories, 'Es el Isaias'])
        // console.log(newCategory);
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
        // setCategories( cat => [...cat, 'Es el Isaias'])


    };

    return (
        <>
            {/* titulo */}
            <h1>Git expert app</h1>

            {/* Input */}
            <AddCategory onNewCategory={(value) => addCategory(value)} />

        
            {
                categories.map((category) => {

                    {/* Gif item */ }
                    return <GifGrid
                        key={category}
                        category={category} />
                })
            }

        

        </>
    );
};

export default GigExpertApp;