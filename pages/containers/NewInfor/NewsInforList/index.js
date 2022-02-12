
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import { Grid } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AccessTimeIcon from '@material-ui/icons/AccessTime';


function NewsInforList () {

    return (    
        <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
                <div className={styles.newsContentItem, styles.newsContentOne}>
                    <div className={styles.inforContent}>
                        <div className={styles.inforContentBgOne}>
                            
                        </div>
                        <span className={styles.inforTimes}>
                            <AccessTimeIcon style={{fontSize: 16}}/>
                            <h3>06/01/2022</h3>
                        </span>
                        <a className={styles.inforTitle} href="#">
                            <h2>NOVALAND KÝ KẾT ĐỒNG HÀNH CÙNG CÁC ĐỐI TÁC TRONG LĨNH VỰC XÂY DỰNG</h2>
                            <ArrowRightIcon/>
                        </a>
                        <h4 className={styles.inforTitleH4}>Ngày 05 - 06/01/2022, tại Novaland Gallery (2Bis Nguyễn Thị Minh Khai, Q.1, TP.HCM), 
                            Novaland đã tiến hành ký kết hợp tác lâu dài với các đối tác trong việc xây dựng các dự án trọng điểm của Novaland.
                        </h4>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
                <div className={styles.newsContentItem, styles.newsContentTwo}>
                    <div className={styles.inforContent}>
                        <div className={styles.inforContentBgTwo}>
                                
                        </div>
                        <span className={styles.inforTimes}>
                            <AccessTimeIcon style={{fontSize: 16}}/>
                            <h3>06/01/2022</h3>
                        </span>
                        <a className={styles.inforTitle} href="#">
                            <h2>PHAN VŨ TIẾP TỤC ĐỒNG HÀNH CÙNG NOVALAND THI CÔNG CÁC CỤM DỰ ÁN NOVAWORLD PHAN THIET VÀ AQUA CITY</h2>
                            <ArrowRightIcon/>
                        </a>
                        
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
                <div className={styles.newsContentItem, styles.newsContentThree}>
                    <div className={styles.inforContent}>
                        <div className={styles.inforContentBgThree}>
                                
                        </div>
                        <span className={styles.inforTimes}>
                            <AccessTimeIcon style={{fontSize: 16}}/>
                            <h3>06/01/2022</h3>
                        </span>
                        <a className={styles.inforTitle} href="#">
                            <h2>NOVAGROUP ĐÓNG GÓP Ý TƯỞNG PHÁT TRIỂN KINH TẾ CHO KHU VỰC BIÊN GIỚI CỦA ĐỒNG THÁP</h2>
                            <ArrowRightIcon/>
                        </a>
                        
                    </div>
                </div>
            </Grid>

        </Grid>
    )
}

export default NewsInforList;