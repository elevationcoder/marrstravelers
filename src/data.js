import { useState } from 'react';
import testImg from './imgs/Colorado_Winter_large.jpg'

export function useLocalData() {
    const [data, setData] = useState([
        { 
            id: 1, 
            title: 'First Item' 
        },
        { 
            id: 2, 
            title: 'Second Item' 
        },
        { 
            id: 3, 
            title: 'Third Item',
            description: "Test Img"
        },
    ]);
  
    function addItem(item) {
      setData((prevData) => [...prevData, item]);
    }
  
    function deleteItem(id) {
      setData((prevData) => prevData.filter((item) => item.id !== id));
    }
  
    return {
      data,
      addItem,
      deleteItem,
    };
  }