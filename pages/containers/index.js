
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import HeaderNovaland from './HeaderNovaland';
import CssBaseline from '@material-ui/core/CssBaseline';
import SlideHome from './SlideHome';
import NewInfor from './NewInfor';
import PjSpecial from './PjSpecial';
import Connective from './Connective';
import FooterNovaland from './FooterNovaland';
import FooterLast from './FooterLast';
// import Container from '@material-ui/core/Container';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import styles from './styles.module.scss';

import { useWindowScroll } from "react-use";



function HomePage (props) {
    const {y: pageYOffset} = useWindowScroll()
    const [isShowBtn, setIsShowBtn] = useState(false)

    useEffect(() => {
        if (pageYOffset > 300) {
            setIsShowBtn(true)
        } else {
            setIsShowBtn(false)
        }
    }, [pageYOffset])
    const handleUpToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return (
        <>
            <CssBaseline />
            <div className={styles.home}
                style={{
                backgroundColor: '#fff',
                padding: 0,
            }}>

                <HeaderNovaland/>
                <SlideHome width="100%"/>
                <NewInfor/>
                <PjSpecial/>
                <Connective/>
                <FooterNovaland/>
                <FooterLast/>
                {isShowBtn && <ArrowUpwardIcon className={styles.btnUpToTop} 
                    style={{
                        fontSize: 40,
                    }}
                    onClick={handleUpToTop}
                />}
            </div>
        </>
        
        
    )
}

export default HomePage;