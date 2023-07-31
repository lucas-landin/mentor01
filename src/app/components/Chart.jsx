'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Chart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/data.json');
          if (!response.ok) {
            throw new Error('Failed to fetch data.');
          }
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const customColors = ['#FFF7F5', '#FFFCF1', '#F1FBF9', '#F3F3FF'];
    const customText = ['#FF5555','#FFB21E','#00BB8F','#1125D6']
  
    return (
      <div className='  p-6'>
        <h2 className=' font-bold pb-5 text-[20px]'>Summary</h2>
        <ul className="space-y-4 mb-10">
          {data.map((item, index) => (
            <li
            key={item.category}
            className='flex flex-row items-center p-4 rounded-lg justify-between'
            style={{ backgroundColor: customColors[index % customColors.length]}}
          >
              <Image
                src={item.icon}
                alt={item.category}
                width={32}
                height={32}
                className="mr-4"
              />
              <h3 className=" text-base font-semibold ml-[-50px]"
                style={{color: customText[index % customText.length]}}
              >
                {item.category}</h3>
              <div>
                <p className=' font-bold'>{item.score} <span className='text-[#B1A8B1]'>/ 100</span> </p>
              </div>
            </li>
          ))}
        </ul>
        <div className='flex flex-col items-center '>
        <button className=' rounded-[50px] bg-[#303B5A] text-white w-full p-3 hover:bg-gradient-to-b from-[#6643FE] to-[#312BE8]'>
        Continue
        </button>
        </div>
      </div>
    );
}
export default Chart