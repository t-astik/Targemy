import { Offcanvas } from 'react-bootstrap'
import moment from 'moment'

import { task } from '../../data'
import { getImagePath, getTaskTypeIcon } from '../task/index'

import closeButton from '../../assets/images/closeButton.png'

import styles from './styles.module.css'

interface IProps {
    onHide: () => void
    show: boolean
}

const Modal = (props: IProps) => {

    const nowDate = moment()
    const deadlineDate = moment(task.deadline)
    const creationDate = moment(task.dateOfCreation)
    const diff = deadlineDate.diff(nowDate, 'day')

    const diffDaysCountPluralText = (count: number): string => {
        if (count === 0 || count > 4) {
            return 'дней'
        } else if (count === 1) {
            return 'день'
        } else return 'дня'
    }

    return (
        <div className={styles.root}>
            <Offcanvas show={props.show} onHide={props.onHide} placement={'bottom'}>
                    <div className={styles.modalContainer}>
                        <div className={styles.head}>
                            <div className={styles.title}>
                                Информация
                            </div>  
                            <div className={styles.closeButton} onClick={props.onHide}>
                                <img src={closeButton}/>
                            </div>
                        </div> 
                        <div className={styles.body}>
                            <div className={styles.section}>
                                <div className={styles.section__title}>
                                    Вы автор
                                </div>
                                <div className={styles.section__body}>
                                    <div className={styles.authorSection}>
                                        <img src={getImagePath(task.authorAvatar)}/>
                                        {task.author}
                                    </div>    
                                </div>
                            </div>
                            <div className={styles.section}>
                                <div className={styles.section__title}>
                                    Посты
                                </div>
                                <div className={styles.section__body}>
                                    25
                                </div>
                            </div>
                            <div className={styles.section}>
                                <div className={styles.section__title}>
                                    Коллекции
                                </div>
                                <div className={styles.section__body}>
                                    {task.collections.length}
                                </div>
                            </div>
                            <div className={styles.section}>
                                <div className={styles.section__title}>
                                    Дедлайн
                                </div>
                                <div className={styles.section__body}>
                                    {moment(deadlineDate).format('DD MMMM YYYY')}
                                    <div className={styles.diff}>
                                        <img src={getTaskTypeIcon(task)}/>
                                        Осталось: {diff} {diffDaysCountPluralText(diff)}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.section}>
                                <div className={styles.section__title}>
                                    Дата создания
                                </div>
                                <div className={styles.section__body}>
                                    {moment(creationDate).format('DD MMMM YYYY')}
                                </div>
                            </div>
                        </div>
                    </div>
            </Offcanvas>
        </div>  
    )
}

export default Modal 