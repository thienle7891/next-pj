
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import { Container, Grid } from '@material-ui/core';
import Slider from "react-slick";
import clsx from 'clsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function PjSpecial () {

    const [rowShow, setRowShow] = useState(1);
    const [leftRowOne , setLeftRowOne] = useState(-1)
    const [leftRowTwo , setLeftRowTwo] = useState(-4)

    const settings ={
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      };
   
    const pJ1 = [
        [
            {
                name: 'aqua city',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nologo-aqua.jpg',
            },
            {
                name: 'novaworld phan thiet',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nologo-centara.jpg',
            },
            {
                name: 'aqua city',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/tgm.jpg',
            },
            {
                name: 'novaworld phan thiet',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/tgm.jpg',
            },
            {
                name: 'aqua city',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nvw-pt.jpg',
            },
            {
                name: 'novaworld phan thiet',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/lagoon-1600x1111.jpg',
            },
        ],
        [
            {
                name: 'novaworld phan thiet',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/lagoon-1600x1111.jpg',
            },
            {
                name: 'aqua city',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nologo-aqua.jpg',
            },
            {
                name: 'novaworld phan thiet',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nologo-centara.jpg',
            },
            {
                name: 'aqua city',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/tgm.jpg',
            },
            {
                name: 'novaworld phan thiet',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/tgm.jpg',
            },
            {
                name: 'aqua city',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nvw-pt.jpg',
            },
        ],
        [
            {
                name: 'aqua city',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nologo-aqua.jpg',
            },
            {
                name: 'novaworld phan thiet',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nologo-centara.jpg',
            },
            {
                name: 'aqua city',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/tgm.jpg',
            },
            {
                name: 'novaworld phan thiet',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/tgm.jpg',
            },
            {
                name: 'aqua city',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nvw-pt.jpg',
            },
            {
                name: 'novaworld phan thiet',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/lagoon-1600x1111.jpg',
            },
        ],
        [
            {
                name: 'novaworld phan thiet',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/lagoon-1600x1111.jpg',
            },
            {
                name: 'aqua city',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nologo-aqua.jpg',
            },
            {
                name: 'novaworld phan thiet',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nologo-centara.jpg',
            },
            {
                name: 'aqua city',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/tgm.jpg',
            },
            {
                name: 'novaworld phan thiet',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/tgm.jpg',
            },
            {
                name: 'aqua city',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nvw-pt.jpg',
            },
        ],
        [
            {
                name: 'aqua city',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nologo-aqua.jpg',
            },
            {
                name: 'novaworld phan thiet',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nologo-centara.jpg',
            },
            {
                name: 'aqua city',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/tgm.jpg',
            },
            {
                name: 'novaworld phan thiet',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/tgm.jpg',
            },
            {
                name: 'aqua city',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nvw-pt.jpg',
            },
            {
                name: 'novaworld phan thiet',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/lagoon-1600x1111.jpg',
            },
        ],
        [
            {
                name: 'novaworld phan thiet',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/lagoon-1600x1111.jpg',
            },
            {
                name: 'aqua city',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nologo-aqua.jpg',
            },
            {
                name: 'novaworld phan thiet',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nologo-centara.jpg',
            },
            {
                name: 'aqua city',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/tgm.jpg',
            },
            {
                name: 'novaworld phan thiet',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/tgm.jpg',
            },
            {
                name: 'aqua city',
                image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nvw-pt.jpg',
            },
        ],
       
    ]

    
   

    return (
        <div >
            <div   className={styles.pjSpecial}>
                <div className={styles.pjSpecialTitle}>
                    <h2>Dự án tiêu biểu</h2>
                    <div className={styles.newsLine}></div>
                </div>
                <Slider {...settings}>

                    {pJ1.map((item, index) => (
                        <div  className={styles.pjSpecialRow}
                            key={index}
                        >
                            {pJ1[index].map((itemPj, i) => (
                                <Grid key={i} className={styles.pjSpecialItem} style={{
                                    
                                }}
                                    item xs={6} sm={4} lg={4}>
                                    <span className={styles.pjSpecialImg}>
                                        <img src={itemPj.image}/>
                                        <h3>
                                            {itemPj.name.toUpperCase()}
                                        </h3>
                                        
                                    </span>
                                </Grid>
                            ))}
                        </div>
                    ))}
                </Slider>
                <div className={styles.bgCoverFisrt}></div>
                <div className={styles.bgCoverLast}></div>

            </div> 

        </div>   

        
    )
}

export default PjSpecial;