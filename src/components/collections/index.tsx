import { useState } from 'react'

import AliceCarousel from 'react-alice-carousel'
import classNames from 'classnames'

import { task, IColletion } from '../../data'
import { getImagePath } from '../task'

import feed from '../../assets/images/feedMob.svg'
import discussions from '../../assets/images/discussionMob.svg'
import arrowPrev from '../../assets/images/arrowPrev.svg'

import "react-alice-carousel/lib/alice-carousel.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from './styles.module.css'


const Collections = () => {

    const [activeTabType, setActiveTabType] = useState<TabType>('feed')

    const responsive = {
        240: { items: 1 },
        250: { items: 2 },
        260: { items: 3 },
    }

    const items = task.collections.map((img: IColletion, i) => {
        return (
            <div className={styles.carouselItem} key={i}>
                <div className={styles.carouselItem__img} style={{'backgroundImage': `url(${getImagePath(img.img)}`}}>
                    <div className={styles.carouselItem__name}>{img.name}</div>
                </div>
            </div>
        )
    })

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

    const handleTabClick = (tab: ITab) => () => {
        setActiveTabType(tab.type)
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
                    <AliceCarousel
                        mouseTracking
                        items={items}
                        responsive={responsive}
                        controlsStrategy="alternate"
                        infinite={true}
                        disableDotsControls={true}
                        renderPrevButton={() => {
                            return (
                                <button className={styles.carousel__prev}>
                                    <img src={arrowPrev}/>
                                </button>
                            )
                        }}
                        renderNextButton={() => {
                            return (
                                <button className={styles.carousel__next}>
                                    <img  src={arrowPrev}/>
                                </button>
                            )
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Collections