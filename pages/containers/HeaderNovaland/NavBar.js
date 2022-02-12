import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import SearchIcon from '@material-ui/icons/Search';

import styles from './NavBar.module.scss';
// import HeaderNavItem from './NavBarItem';



function HeaderNavBar ({ setIsSearchBlock })  {

    const navs = [
        {
            title:'trang chủ',
        }, 
        {
            title:'giới thiệu',
        }, 
        {
            title:'dự án',
            list: ['bất động sản đô thị', 'bất động sản đô thị du lịch'],
        }, 
        {
            title:'quan hệ đầu tư',
            list: [
                'thông tin về tập đoàn novaland',
                'quản trị doanh nghiệp',
                'công bố thông tin',
                'đại hội đồng cổ đông',
                'hoạt động nhà đầu tư',
                'giá cổ phiếu và thông tin thị trường',
            ],
        }, 
        {
            title:'tin tức',
            list: [
                'thông tin thị trường',
                'thông tin novaland',
                'thông tin báo chí',
                'video'
            ],
        }, 
        {
            title:'phát triển bền vững',
            list: [
                'thông điệp novaland',
                'hội đồng phát triển bền vững',
                'quản trị tập đoàn',
                'quản trị nguồn nhân lực',
                'quản trị thương hiêu novaland',
                'môi trường',
                'hoạt động cộng đồng',
                'thông tin phát triển bền vững'
            ],
        }, 
        {
            title:'tuyển dụng',
        }, 
        {
            title:'liên hệ',
        },
    ]
    return (
        <ul className={styles.headerNav}>
            {navs.map((nav, index) => (
                <li className={styles.headerNavLi}
                    key={index}>
                    <h4 className={styles.headerNavLiH4}>{nav.title.toUpperCase()}</h4>
                    {nav.list && <span className={styles.rightIcon}>
                        <i className="fas fa-chevron-right"></i>
                    </span>}
                    <span className={styles.navItemLine}></span>
                    {nav.list && (
                        <ul className={styles.navsItem}>
                            {navs[index].list.map((item) => (
                                <li key={item} className={styles.navsItemLi}>{item.toUpperCase()}</li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
            <SearchIcon className={styles.navSearchIcon} style={{ fontSize: 40 }}
                onClick={()=> setIsSearchBlock(prev=> !prev)}
            />
            <span className={styles.navSearch}>EN</span>
        </ul>
    )
}

export default HeaderNavBar;