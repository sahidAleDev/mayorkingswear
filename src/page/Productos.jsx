import React from 'react'
import Card from '../components/Card'
import shirt from '../images/shirt1.png'

const shirts = [
    {
        name: 'Pysho Bunny',
        desc: 'Las costuras selladas en los hombros garantizan un aspecto impecable desgaste tras desgaste... tras desgaste. Un atrevido gráfico Psycho Bunny en el pecho le da un toque expresivo que llevará tu juego de capas al siguiente nivel.',
        imgShirt: shirt,
    },
    {
        name: 'Pysho Bunny',
        desc: 'Las costuras selladas en los hombros garantizan un aspecto impecable desgaste tras desgaste... tras desgaste. Un atrevido gráfico Psycho Bunny en el pecho le da un toque expresivo que llevará tu juego de capas al siguiente nivel.',
        imgShirt: shirt,
    },
    {
        name: 'Pysho Bunny',
        desc: 'Las costuras selladas en los hombros garantizan un aspecto impecable desgaste tras desgaste... tras desgaste. Un atrevido gráfico Psycho Bunny en el pecho le da un toque expresivo que llevará tu juego de capas al siguiente nivel.',
        imgShirt: shirt,
    },
    {
        name: 'Pysho Bunny',
        desc: 'Las costuras selladas en los hombros garantizan un aspecto impecable desgaste tras desgaste... tras desgaste. Un atrevido gráfico Psycho Bunny en el pecho le da un toque expresivo que llevará tu juego de capas al siguiente nivel.',
        imgShirt: shirt,
    },
    {
        name: 'Pysho Bunny',
        desc: 'Las costuras selladas en los hombros garantizan un aspecto impecable desgaste tras desgaste... tras desgaste. Un atrevido gráfico Psycho Bunny en el pecho le da un toque expresivo que llevará tu juego de capas al siguiente nivel.',
        imgShirt: shirt,
    },
    {
        name: 'Pysho Bunny',
        desc: 'Las costuras selladas en los hombros garantizan un aspecto impecable desgaste tras desgaste... tras desgaste. Un atrevido gráfico Psycho Bunny en el pecho le da un toque expresivo que llevará tu juego de capas al siguiente nivel.',
        imgShirt: shirt,
    },
    {
        name: 'Pysho Bunny',
        desc: 'Las costuras selladas en los hombros garantizan un aspecto impecable desgaste tras desgaste... tras desgaste. Un atrevido gráfico Psycho Bunny en el pecho le da un toque expresivo que llevará tu juego de capas al siguiente nivel.',
        imgShirt: shirt,
    },
    {
        name: 'Pysho Bunny',
        desc: 'Las costuras selladas en los hombros garantizan un aspecto impecable desgaste tras desgaste... tras desgaste. Un atrevido gráfico Psycho Bunny en el pecho le da un toque expresivo que llevará tu juego de capas al siguiente nivel.',
        imgShirt: shirt,
    },
    {
        name: 'Pysho Bunny',
        desc: 'Las costuras selladas en los hombros garantizan un aspecto impecable desgaste tras desgaste... tras desgaste. Un atrevido gráfico Psycho Bunny en el pecho le da un toque expresivo que llevará tu juego de capas al siguiente nivel.',
        imgShirt: shirt,
    },
    {
        name: 'Pysho Bunny',
        desc: 'Las costuras selladas en los hombros garantizan un aspecto impecable desgaste tras desgaste... tras desgaste. Un atrevido gráfico Psycho Bunny en el pecho le da un toque expresivo que llevará tu juego de capas al siguiente nivel.',
        imgShirt: shirt,
    },
    {
        name: 'Pysho Bunny',
        desc: 'Las costuras selladas en los hombros garantizan un aspecto impecable desgaste tras desgaste... tras desgaste. Un atrevido gráfico Psycho Bunny en el pecho le da un toque expresivo que llevará tu juego de capas al siguiente nivel.',
        imgShirt: shirt,
    },
]

const Productos = () => {
    return (
        <section className='body-productos'>

            <h1>Productos</h1>


            <div className='container-product'>
                {
                    shirts.map(shirtMap => <Card key={shirtMap.name} shirt={shirtMap}/>)
                }
            </div>
        </section>
    )
}

export default Productos