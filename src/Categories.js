import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({categories,filterItems}) => {
  return (
    <div className="btn-wrapper">
      {categories.map((category,index)=>{
        return(
          <Link key={index} onClick={()=>filterItems(category)}>
          {category}
        </Link>
        )
      })}
    </div>
  );
};

export default Categories;
