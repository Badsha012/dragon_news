
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {

    const { id } =useParams();
    const data=useLoaderData();

    const [categoryNews,setcatagoryNews]=useState([]);
    //console.log(data);
   // console.log(id);
   useEffect(()=>{
    if(id=="0"){
     setcatagoryNews(data) ; 
     return ; 
    }
    else if(id=="1"){
          const filterNews=data.filter(news=>news.other.is_today_pick == true);
          setcatagoryNews(filterNews)
   

    }
    else{

         const filterNews=data.filter(news=>news.category_id == id);
   console.log(filterNews);
    setcatagoryNews(filterNews)

   }
    }
  ,[data,id])
    return (
        <div>
          Total {categoryNews.length 
        } news Found       </div>
    );
};

export default CategoryNews;