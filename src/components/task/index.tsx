import { useState } from 'react'

import classNames from 'classnames'

import { ITask, task } from '../../data'
import Modal from '../modal'

import iconFollow from '../../assets/images/iconFollow.svg'
import infoButton from '../../assets/images/info.svg'
import goalIcon from '../../assets/images/goalIcon.svg'
import challengeIcon from '../../assets/images/challengeIcon.svg'
import borderStories from '../../assets/images/borderStoreis.svg'

import styles from './styles.module.css'


export const getImagePath = (imageName: string) => `${process.env.PUBLIC_URL}/assets/images/${imageName}`

export const getTaskTypeIcon = (task: ITask) => {
    switch (task.type) {
        case 'goal':
            return goalIcon
        case 'challenge':
            return challengeIcon
        default: return goalIcon
    }
}

export const getTaskType = (task: ITask) => {
    switch (task.type) {
        case 'goal':
            return 'Цель'
        case 'challenge':
            return 'Челендж'
        default: return 'неизвестный тип'
    }
}

const Task = () => {

    const [isActive, setIsActive] = useState(false);
    const [buttoneSectionIsActive, setButtoneSectionIsActive] = useState(false)

    const toggleButtonSection = () => setButtoneSectionIsActive(!buttoneSectionIsActive)
    const handleClose = () => setIsActive(false);
    const handleShow = () => setIsActive(true);

    return (
        <div className={styles.taskContainer}>
            <div className={styles.taskSection} style={{'backgroundImage': `url(${getImagePath(task.taskBackground)}`}}>
                <div className={styles.taskHead}>
                    <button onClick={handleShow} className={styles.infoButton__img}>
                        <img src={infoButton}/>  
                    </button>
                </div>
                <div className={styles.taskBody}>
                    <div className={styles.taskAvatar}>
                        <div className={styles.avatarSection}>
                            <img className={styles.borderStories__img} src={borderStories}/>
                            <img className={styles.taskAvatar__img} src={getImagePath(task.taskAvatar)}/>
                        </div>
                    </div>
                    <div className={styles.goalTitle}>
                        {task.title}
                    </div>
                </div>
                <div className={styles.taskFooter}>
                    <div className={styles.goalDescription}>
                        <div className={styles.goalType}>
                            <img className={styles.goalType__icon} src={getTaskTypeIcon(task)}/>
                            <div className={styles.goalType__text}>{getTaskType(task)}</div> 
                        </div>
                        <div className={styles.goalDescription__text}>
                            {task.description}
                        </div>
                    </div>
                    <div className={styles.subscribers}>
                        <div className={styles.subscribersAvatars__list}>
                            {task.subscribers.slice(0,4).map((img, i) => {
                                return <img className={styles.subscriberAvatar__img} key={i} src={getImagePath(img)}/>
                            })}
                            <div className={styles.subscribersCount}>
                                <img className={styles.subscriberAvatar__img} src={getImagePath(task.subscribers[4])}/>
                                <div className={styles.subscribersCount__text}>Подписчики: {task.subscribers.length}</div>
                            </div>
                        </div>
                        <div className={styles.subscriptions}>
                            Подписки 
                            <br/> 
                            {task.subscriptionsCount}
                        </div>
                    </div>
                </div>     
            </div>
            <div className={classNames({
                            [styles.buttonSection]: true,
                            [styles.buttonSection__active]: buttoneSectionIsActive
                        })} onClick={toggleButtonSection}>
                <img src={iconFollow}/>
                <div>Подписаться</div>
            </div>
            <Modal onHide={handleClose} show={isActive}/>
        </div>
    )
}

export default Task