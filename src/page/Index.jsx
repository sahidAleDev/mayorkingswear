import React from 'react'
import shirtHero from '../images/shirtHero.png'
import shirtHero2 from '../images/shirtHero2.png'
import shirtAbouUs from '../images/shirtAboutUs.jpg'
import Navbar from '../components/Navbar'

const Index = () => {
    return (

        <>
            <div className='hero'>
                <Navbar/>
                <div className="content">
                    <p className="subtopic">Mayorkingswear</p>
                    <p class="topic">Ropa exclusiva y de <span>marca</span></p>
                    
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
        </>
    )
}

export default Index