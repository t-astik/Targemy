import { useState, createRef } from 'react'

import Slider from 'react-slick'
import classNames from 'classnames'

import { task, IColletion } from '../../data'
import { getImagePath } from '../task'

import feed from '../../assets/images/feedMob.png'
import discussions from '../../assets/images/discussionMob.png'
import arrowPrev from '../../assets/images/arrowPrev.png'
import arrowNext from '../../assets/images/arrowNext.png'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from './styles.module.css'


const Collections = () => {

    const [activeTabType, setActiveTabType] = useState<TabType>('feed')

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1     
    }

    type TabType = 'feed' | 'discussions'

    interface ITab {
        type: TabType,
        title: string
        iconPath: string
    }
    
    const tabs: ITab[] = [
        {
            type: 'feed',
            title: 'Лента',
            iconPath: feed
        },
        {
            type: 'discussions',
            title: 'Обсуждения',
            iconPath: discussions
        }
    ]

    const sliderRef: any = createRef()

    const handleTabClick = (tab: ITab) => () => {
        setActiveTabType(tab.type)
    }

    const handleClickPrev = (e: any) => {
        e.stopPropagation();
        sliderRef.current.slickPrev();
    }

    const handleClickNext = (e: any) => {
        e.stopPropagation();
        sliderRef.current.slickNext();
    }

    return (
        <div className={styles.collectionContainer}>
            <div className={styles.buttonsSection}>
                {tabs.map((tab, i) => (
                    <div
                        className={classNames( {
                            [styles.tabButton]: true,
                            [styles[`tabButton__${tab.type}`]]: true,
                            [styles.tabButton__active]: activeTabType === tab.type
                        })}
                        onClick={handleTabClick(tab)}
                        key={i}
                    >
                        <img src={tab.iconPath}/>
                        {tab.title}
                    </div>
                ))}
            </div>
            <div className={styles.collectionsSection}>
                <div className={styles.collectionsTitle}>Коллекции</div>
                <div className={styles.carousel}>
                    <Slider ref={sliderRef} {...settings}>
                        {task.collections.map((img: IColletion, i) => {
                            return (
                                <div className={styles.carouselItem} key={i}>
                                    <img className={styles.carouselItem__img} src={getImagePath(img.img)}/>
                                    <div className={styles.carouselItem__name}>{img.name}</div>
                                </div>
                            )
                        })}
                    </Slider>
                    <div onClick={handleClickPrev} className={styles.carousel__prev}>
                        <img src={arrowPrev}/>
                    </div>
                    <div onClick={handleClickNext} className={styles.carousel__next}>
                        <img src={arrowNext}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collections