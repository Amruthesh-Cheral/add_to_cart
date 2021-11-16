import React from 'react';
import Itemcard from '../src/itemcart';
import data from "./data";

const Home = () => {
    return (
        <>
        <h1 className="text-center mt-3">All Items</h1>
        <section className="container">
            <div className="row justify-content-center">
                {data.productData.map((item, index)=>{
                    return(
                        <Itemcard
                        img={item.img}
                        title={item.title} 
                        item={item}
                        desc={item.desc}
                        price={item.price} 
                        key={index} />
                    )
                })}
            
            </div>
        </section>
        </>
    );
};

export default Home;
