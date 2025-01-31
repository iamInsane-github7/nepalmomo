import React from 'react'
import person from '../../assets/person.jpg'
import Button from '../../Components/Button'
const Second = () => {
  return (
    <div className="flex gap-24 p-24 ">
      <div className=" ">
        <img className='h-96 w-[400px]' src= {person} alt="blank" /> 
        
      </div>
      <div className='w-[45%] leading-10 text-justify'>
        <h1>Why Customer <span className="text-red-500"> Love US</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate corrupti quos rem placeat cumque, tenetur non veniam perspiciatis optio eos aliquid, nesciunt repellendus similique odio eligendi? Dolorem nam esse modi!
        Quia quidem fugit, quos dicta accusamus eligendi blanditiis asperiores! Nemo vero iure, placeat recusandae iusto impedit facilis eveniet praesentium pariatur, nisi laudantium, ipsam quidem repellendus ratione velit earum officiis molestiae.</p>
        <Button title="Explore our Story"/>

      </div>
    </div>
  )
}

export default Second