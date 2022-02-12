
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { Grid } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AccessTimeIcon from '@material-ui/icons/AccessTime';


function NewsMarket () {
    const [activeIndex, setactiveIndex] = useState(0);
    const [activeList, setActiveList] = useState([])
    const btns = ['THÔNG TIN THỊ TRƯỜNG', 'TIN TỨC']

    const news0 = [
        {
            times: '06/01/2022',
            title: 'CỤM SÂN GOLF PGA TẠI NOVAWORLD PHAN THIET SẴN SÀNG CHO CÁC GIẢI ĐẤU',
            content: 'Cụm sân golf PGA độc quyền duy nhất tại Việt Nam sẽ vận hành toàn khu từ đầu năm 2022. Nova Golf Clubs - đơn vị vận hành cụm sân vừa hợp tác với Binh Minh Golf - Entertainment, nhằm đồng hành mở rộng chuỗi giải đấu lớn tại đây.',
        },
        {
            times: '04/01/2022',
            title: 'CẬN CẢNH THẢM NHỰA CAO TỐC PHAN THIẾT - DẦU GIÂY NGÀY ĐẦU NĂM 2022',
            content: 'Tận dụng "thời gian vàng" các nhà thầu thi công cao tốc Phan Thiết - Dầu Giây đang thi công ngày đêm không nghỉ Tết dương lịch 2022.',
        },
        {
            times: '06/01/2022',
            title: 'CỤM SÂN GOLF PGA TẠI NOVAWORLD PHAN THIET SẴN SÀNG CHO CÁC GIẢI ĐẤU',
            content: 'Cụm sân golf PGA độc quyền duy nhất tại Việt Nam sẽ vận hành toàn khu từ đầu năm 2022. Nova Golf Clubs - đơn vị vận hành cụm sân vừa hợp tác với Binh Minh Golf - Entertainment, nhằm đồng hành mở rộng chuỗi giải đấu lớn tại đây.',
        },

    ]

    const news1 = [
        {
            times: '04/01/2022',
            title: 'CẬN CẢNH THẢM NHỰA CAO TỐC PHAN THIẾT - DẦU GIÂY NGÀY ĐẦU NĂM 2022',
            content: 'Tận dụng "thời gian vàng" các nhà thầu thi công cao tốc Phan Thiết - Dầu Giây đang thi công ngày đêm không nghỉ Tết dương lịch 2022.',
        },
        {
            times: '06/01/2022',
            title: 'CỤM SÂN GOLF PGA TẠI NOVAWORLD PHAN THIET SẴN SÀNG CHO CÁC GIẢI ĐẤU',
            content: 'Cụm sân golf PGA độc quyền duy nhất tại Việt Nam sẽ vận hành toàn khu từ đầu năm 2022. Nova Golf Clubs - đơn vị vận hành cụm sân vừa hợp tác với Binh Minh Golf - Entertainment, nhằm đồng hành mở rộng chuỗi giải đấu lớn tại đây.',
        },
        {
            times: '04/01/2022',
            title: 'CẬN CẢNH THẢM NHỰA CAO TỐC PHAN THIẾT - DẦU GIÂY NGÀY ĐẦU NĂM 2022',
            content: 'Tận dụng "thời gian vàng" các nhà thầu thi công cao tốc Phan Thiết - Dầu Giây đang thi công ngày đêm không nghỉ Tết dương lịch 2022.',
        },
    ]

    useEffect(()=> {
        if (activeIndex === 0) {
            setActiveList(news0)
        }
        if (activeIndex === 1) {
            setActiveList(news1)
        }
        
    }, [`new${activeIndex}`])
    const handleChangList = (index) => {
        setactiveIndex(index);
        console.log(typeof index)
    }
    return (
        <div className={styles.inforMarketAll}>
            
            <div className={styles.inforMarket}>
                <div className={styles.inforMarketHeader}>
                    {btns.map((btn, index) => (
                        <span key={index} 
                            className={clsx({
                                [styles.active] : activeIndex === Number(index)
                            })}
                            onClick={() => handleChangList(index)}
                        >
                            {btn}
                        </span>
                    ))}

                    
                </div>
                {activeList.map((activeItem, index) => (
                    <div key={index} className={styles.newsListActive}>
                        <span>
                            <AccessTimeIcon style={{fontSize: 16}}/>
                            <h2>{activeItem.times}</h2>
                        </span>
                        <a href="#">
                            <h2>{activeItem.title}</h2>
                            <ArrowRightIcon/>
                        </a>
                        <p>{activeItem.content}</p>
                    </div>
                ))}
                    <span className={styles.btnShowAll}>
                        <h1>XEM TẤT CẢ</h1>
                        <ArrowRightIcon/>
                    </span>
            </div>
        </div>   
    )
}

export default NewsMarket;