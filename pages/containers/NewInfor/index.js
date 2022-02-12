
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NewsInforList from './NewsInforList';
import NewsMarket from './NewsMarket';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));


function NewInfor () {
    // const classes = useStyles();
    return (    
        <div className={styles.newInfor}>
            <Container maxWidth="lg">
                <div className={styles.newsTitle}> 
                    <h1>Thông tin mới</h1>
                    <div className={styles.newsLine}></div>
                </div>
                <div className={styles.newsContent}> 
                    <Grid container spacing={3} className={styles.inForList}>
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <NewsInforList/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <NewsMarket/>
                        </Grid>

                    </Grid>
                </div>
                
            </Container>
        </div>
    )
}

export default NewInfor;