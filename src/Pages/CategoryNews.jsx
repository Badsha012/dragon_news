
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

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
          const filterNews=data.filter(news=>news.others.is_today_pick == true);
          setcatagoryNews(filterNews);
          return;
   

    }
    else{

         const filterNews=data.filter(news=>news.category_id == id);
   console.log(filterNews);
    setcatagoryNews(filterNews)

   }
    }
  ,[data,id])
    return (
        <div className='font-bold md-5'>
          Total<span className='text-secondary'> {categoryNews.length 
        } </span>news Found   
        <div className='grid grid-cols-1 gap-5'>

        {
           categoryNews.map ( news => <NewsCard key={news.id} news={news} ></NewsCard>)
        }

        </div>
        
        
        
            </div>
    );
};

export default CategoryNews;