
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import { Container, Grid } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';


function Connective () {

    return (    
        <Container maxWidth="lg">
            <div className={styles.connective}>

                <Grid className={styles.connectiveItem, styles.connectByEmail} 
                    item xs={12} sm={6} lg={4}>
                    <h2>Đăng ký nhận bảng tin</h2>
                    <p>Kết nối với chúng tôi để theo dõi thông tin mới nhất.</p>
                    <input type="text" placeholder="Địa chỉ emai"/>
                    <button>Đăng ký</button>
                </Grid>
                <Grid className={styles.connectiveItem, styles.connectByBrochure} 
                    item xs={12} sm={6} lg={4}>
                    <div className={styles.connectByBrochureIcon}>
                        <GetAppIcon style={{
                            fontSize: 100,
                            margin: 'auto',
                            color: '#fff'
                        }} />
                    </div>
                    <span className={styles.connectByBrochureContent}>
                        <h2>Brochure Công ty</h2>
                        <p>Download Bruchure mới nhất của Novaland để hiểu rõ hơn về chứng tôi</p>
                        <a href="#">
                            Tải Brochure
                            {/* <i className="fas fa-caret-right"></i> */}
                        </a>
                    </span>
                </Grid>
                <Grid className={styles.connectiveItem, styles.connectByPhone} item xs={12} sm={6} lg={4}>
                    <span className={styles.connectByPhone}>
                        <h2>Tổng đài CSKH:</h2>
                        <h3>1900 63 6666</h3>
                    </span>
                    <span className={styles.connectByPhon}>
                        <h2>Email:</h2>
                        <h3>chamsockhachang@novaland.com</h3>
                    </span>
                </Grid>
            </div>
        </Container>
    )
}

export default Connective;