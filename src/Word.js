import React from 'react'
import Cubes from './componenets/Cubes';
import { useState } from "react";
function Word(props) {
    const mainWord = ['R','E','A','C','T'];
    const [bgcolor,setbgColor] = useState('white');

    const handleColor = () => {
        props.word.map((key,index)=>{
            mainWord.map((wordkey,wordindex)=>{
                if(key.toUpperCase()===wordkey&&index===wordindex) {
                    setbgColor((prev)=>{
                        let newColor = 'green';
                        prev = newColor;
                        console.log(props.bgcolor);                       
                        return bgcolor;                       
                    })
                }
            })
        }) 

        

    }
  return (
    <div>
        <Cubes bgcolor={handleColor()}/>
    </div>
  )
}

export default Word