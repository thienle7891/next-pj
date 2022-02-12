
import React, { useEffect, useMemo, useState } from 'react';
import  { Component } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import clsx from 'clsx';
import SlideContent from './SlideContent';
import { Container } from '@material-ui/core';




function SlideHome () {
    const [slideActive, setSlideActive] = useState(0);
    const [isInterval, setIsInterval] = useState(false);

    const images = [
        {
            img: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/1banner-1440-x-609.png",
        },
        {
            img: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-web-novagroup-1440x609px---florida---resize.jpg",
        },
        {
            img: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-1440-x-609.png",
        },
        {
            img: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/cover-15112021_1440x609.jpg",
        },
        {
            img: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-1440-x-609-100.jpg",
        },
        {
            img: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/aqua-3.jpg",
        },
        {
            img: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/aqua-2.jpg",
        },

        {
            img: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/aqua-1.jpg",
        },
        {
            img: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/tgm-1.jpg",
        },
        {
            img: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/54321novahills-hero.png",
        },
    ]

    useEffect(()=> {
        const interval = setInterval(()=> {
            const lenImgs = images.length
            const rusult = setSlideActive(slideActive === lenImgs - 1  ? 0 : slideActive+1)
            clearInterval(interval)
        }, 5000)
        return () => clearInterval(interval)
        

    }, [slideActive, isInterval])
    
    const handleChangeSlide = (index) => {
        setIsInterval(true)
        console.log(index)
        setSlideActive(index);
    };
    return (    
        <div className={styles.slideHomeAll}>
            <div className={styles.slideHome}>
                <div className={styles.slide}>
                    {images.map((item, index) => (
                            <div key={index} 
                                className={clsx(styles.slideBanner,
                                {
                                    [styles.active]: slideActive === index}
                                )}
                            >
                                <img src={item.img} width="100%"/>
                            </div>
                    ))}
                </div>
                <SlideContent/>
                <span className={styles.controlsSlide}>
                    <span>
                    

                        {images.map((item, index) => (
                            <div
                                key={index}
                                className={clsx({
                                    [styles.active] : slideActive === Number(index)
                                })}
                                onClick={() =>handleChangeSlide(index)}
                            ></div>
                            
                        ))}
                    </span>
                </span>
            </div>
        </div>
    )
}

export default SlideHome;