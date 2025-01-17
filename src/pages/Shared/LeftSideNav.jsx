import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[])
    return (
        <div className="px-4">
            <h2 className="text-3xl">All Categories</h2>
            {
                categories.map(category => <Link className="block mb-6" key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;