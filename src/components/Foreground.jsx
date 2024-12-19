import React, {useState} from 'react';
import Card from './Card';
import { useRef } from 'react';

function Foreground() {
  const ref = useRef(null)
  const data = [
    {
      desc: "Hi, I'm Manav Mehta, a Frontend Developer currently learning ReactJS",
      filesize: ".8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Info", tagColor: "green" },
    },
    {
      desc: "Also having interest in Machine Learning, I have developed multiple projects based on real-world problems",
      filesize: ".5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "More Info", tagColor: "blue" },
    },
    {
      desc: "Email: manavmehta0813@gmail.com ",
      filesize: ".7mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Contact", tagColor: "green" },
    },
    
  ];

  return (
    <>
      <div ref={ref} className='fixed z-[3] top-0 left-0 h-full w-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index) => (
          <Card data={item} reference={ref}/>
        ))}
      </div>
    </>
  );
}

export default Foreground;
