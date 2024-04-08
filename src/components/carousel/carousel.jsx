import React, { useContext, useState } from 'react';
import Card from './card';
import styles from './carousel.module.css'
import { ProductsData } from '../../App';
import CarouselButton from './carousel_button';


function Carousel() {
    const {products} = useContext(ProductsData);
    const [indexLeft, setIndexLeft] = useState(0);
    const [indexMiddle, setIndexMiddle] = useState(1);
    const [indexRight, setIndexRight] = useState(2);


    function previous(){
        if(indexLeft > 0){
            setIndexLeft(prevIndexLeft => prevIndexLeft - 1)
            setIndexMiddle(prevIndexMiddle => prevIndexMiddle - 1 )
            setIndexRight(prevIndexRight => prevIndexRight - 1)
        }
    }
    function next(){
        if(indexRight < products.length-1){
            setIndexLeft(prevIndexLeft => prevIndexLeft + 1)
            setIndexMiddle(prevIndexMiddle => prevIndexMiddle + 1 )
            setIndexRight(prevIndexRight => prevIndexRight + 1)
        }
    }


    return (
        <section className={styles.carousel}>
            <CarouselButton
                onClick={() => previous()}
                iconUrl='/img/arrow-left.svg'
                alt='button arrow left'
                btnClass={styles.btnLeft}
            />
            {products.length > 0 && (
                <>
                    <Card
                        data={products[indexLeft]}
                    />
                    <Card
                        data={products[indexMiddle]}
                    />
                    <Card
                        data={products[indexRight]}
                    />
                </>
            )}
            <CarouselButton
                onClick={() => next()}
                iconUrl='/img/arrow-right.svg'
                alt='button arrow right'
                btnClass={styles.btnRight}
            />
        </section>
    )
}

export default Carousel