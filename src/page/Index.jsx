import React from 'react'
import shirtHero from '../images/shirtHero.png'
import shirtHero2 from '../images/shirtHero2.png'
import shirtAbouUs from '../images/shirtAboutUs.jpg'
import Navbar from '../components/Navbar'
import imgGa1 from '../images/ga1.jpg'
import imgGa2 from '../images/ga2.jpg'
import imgGa3 from '../images/ga3.jpg'
import imgGa4 from '../images/ga4.jpg'
import imgGa5 from '../images/ga5.jpg'
import imgGa6 from '../images/ga6.jpg'
import imgGa7 from '../images/ga7.jpg'
import imgGa8 from '../images/ga8.jpg'
import imgGa9 from '../images/ga9.jpg'
import imgGa10 from '../images/ga10.jpg'
import imgGa11 from '../images/ga11.jpg'
import imgGa12 from '../images/ga12.jpg'

const Index = () => {
    return (

        <section className='body-home'>
            <div className='hero'>
                <Navbar/>
                <div className="content">
                    <p className="subtopic">Mayorkingswear</p>
                    <p className="topic">Ropa exclusiva y de <span>marca</span></p>
                    
                    <div className="bts-container">
                        <button className="style-btn-1">Ingresar</button>
                        <button className="style-btn-2">Conoce más</button>
                    </div>
                </div>

                <div className="container-image-1">
                    <img src={shirtHero} alt=""/>
                </div>

                <div className="container-image-2">
                    <img src={shirtHero2} alt=""/>
                </div>
            </div>
        
        
            <section className='about-us'>
                <div className='left-part'>
                    <img src={shirtAbouUs} alt="" />
                </div>

                <div className='right-part'>
                    <h2 className='title-about'>Acerca de nosotros</h2>
                    <h5 className='litle-title-about'>Calidad y <span>exclusividad</span> </h5>
                    <p className='text-about'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id natus libero earum repellat dolores sint dolorum. Ea, animi laudantium corrupti et hic veritatis autem ipsa ipsam maxime eos, exercitationem optio aperiam fuga, iure sapiente aspernatur magnam obcaecati pariatur accusamus.
                    </p>
                </div>
            </section>

            <section className='gallery-full'>
                <h2 className='title-gallery'>Un vista a nuestros productos</h2>
                <div className='gallery-container'>
                    <div className='gallery'>
                        <img src={imgGa1} alt="" />
                        <img src={imgGa2} alt="" />
                        <img src={imgGa3} alt="" />
                        <img src={imgGa4} alt="" />
                        <img src={imgGa5} alt="" />
                        <img src={imgGa6} alt="" />
                        <img src={imgGa7} alt="" />
                        <img src={imgGa8} alt="" />
                        <img src={imgGa9} alt="" />
                        <img src={imgGa10} alt="" />
                        <img src={imgGa11} alt="" />
                        <img src={imgGa12} alt="" />
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Index