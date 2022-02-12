import React, { useState } from 'react';
import clsx from 'clsx';

import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import styles from "./style.module.scss";
import HeaderNavBar from './NavBar';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';






function HeaderNovaland () {

    const [isNavBar, setIsNavBar] = useState(false);
    const [isSearchBlock, setIsSearchBlock] = useState(false);
    const handdeShowNav = () => {
        setIsNavBar(!isNavBar)
        if (isSearchBlock) {
            setIsSearchBlock(false)
        }
    }
    const handleCloseBars = () => {
        setIsNavBar(!isNavBar)
        if (isSearchBlock) {
            setIsSearchBlock(false)
        }
    }

    return (
        <div className={styles.headerNovalandMax}>

            <Container maxWidth='lg'>
                <div className={styles.headerNovaland}>
                    <div className={styles.logoImage}>
                        <img src="https://www.novaland.com.vn/Data/Sites/1/media/Default/logo-nvl.jpg"/>
                    </div>
                    <div className={clsx(styles.headerContent, {
                            [styles.showBars] : isNavBar
                        })}>
                        <CloseIcon  className={styles.closeIcon}
                            onClick={handleCloseBars}
                        />
                        
                        <span className={styles.numberPhone}>
                            <h4>Tổng đài CSKH:</h4>
                            <h3>1900 63 6666</h3>
                        </span>
                        <HeaderNavBar 
                            setIsSearchBlock={setIsSearchBlock}/>
                    </div>
                    <MenuIcon className={styles.barIcon}
                        onClick={handdeShowNav}
                    /> 

                </div>
            </Container>
            <div className={clsx(styles.wrapper, {
                    [styles.active]: isSearchBlock
                }
            )}></div>
            <span className={clsx(styles.searchBlock, {
                    [styles.active]: isSearchBlock  
                }
            )} >
                <input type="text"/>
                <SearchIcon className={styles.searchBlockIcon}/>
            </span>
        </div>
    )
}

export default HeaderNovaland;