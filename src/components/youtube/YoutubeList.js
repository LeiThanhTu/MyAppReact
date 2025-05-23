import React from 'react';
import YoutubeItem from './YoutubeItem';
import { YoutubeData } from '../../data';

const YoutubeList = (props) => {
  console.log(props);
  // layout: Header, Footer
  return (
   <div className="youtube-list">
   {props.children}
      {YoutubeData.map((item, index) => {
        /* if (index === 1)  {
    console.log("middle item");
  } */
        // className = {index === 1 ? "abc" : ""}
        /* let newClass = "";
if (index === 1) newClass = "abc"; */
        // hoặc theo cách này
        const newClass = index === 1 ? "abc" : "";
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avatar={item.avatar || item.image} // nếu avatar không có sẽ tự động lấy imageimage
            title={item.title}
            author={item.author}
            className={newClass}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;