

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import HeaderNovaland from '../Home/HeaderNovaland';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import SlideHome from '../Home/SlideHome';
import NewInfor from '../Home/NewInfor';
import PjSpecial from '../Home/PjSpecial';
import Connective from '../Home/Connective';
import FooterNovaland from '../Home/FooterNovaland';
import FooterLast from '../Home/FooterLast';



function HomePage (props) {

    return (
        <>
            <CssBaseline />
            <div style={{backgroundColor: '#fff'}}>

                <HeaderNovaland/>
                <SlideHome/>
                <NewInfor/>
                <PjSpecial/>
                <Connective/>
                <FooterNovaland/>
                <FooterLast/>
            </div>
        </>
        
        
    )
}

export default HomePage;