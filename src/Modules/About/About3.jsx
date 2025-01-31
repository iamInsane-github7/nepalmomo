import React from 'react'
import AboutImage2 from '../../assets/aboutTwo.png'

const About3 = () => {
  return (
    <div>
        <div className="flex gap-44 m-auto w-[1000px] justify-center items-center">
  {/* Left Content */}
  <div className="w-[40%]">
    <h1 className="font-bold text-xl">
      Our momos{" "}
      <span className="text-orange-500">
        are made <br /> with love
      </span>
    </h1>
    <p className="w-[100%] h-[50%]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
      libero vel nemo commodi dicta eum culpa, quasi quae aliquam nostrum
      repellat perspiciatis, neque explicabo delectus dolore voluptatum
      asperiores deleniti hic. Vel expedita itaque ex corrupti non illum.
      Officiis sed quis voluptas pariatur. Vitae blanditiis assumenda
      expedita explicabo molestias aut voluptates maxime quae quod nihil
      dolor rerum, sequi eum eligendi tenetur porro temporibus voluptas
      minima! Esse?
    </p>
  </div>

  {/* Right Image */}
  <div className="w-[40%]">
    <img src={AboutImage2} alt="About Momos" />
  </div>
</div>

    </div>
  )
}

export default About3