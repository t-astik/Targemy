export interface IColletion {
    img: string
    name: string
}

export type TaskType = 'goal' | 'challenge'

export interface ITask {
    id: number
    type: TaskType
    author: string
    authorAvatar: string
    taskAvatar: string
    taskBackground: string
    title: string
    description: string
    dateOfCreation: string
    deadline: string
    subscribers: string[]
    subscriptionsCount: number
    collections: IColletion[]
    posts: number
}

export const task:ITask = {
    id: 1,
    type: 'goal',
    author: 'Amolika Shaikh',
    authorAvatar: 'authorAvatar1.jpg',
    taskAvatar: 'taskAvatar1.jpg',
    taskBackground: 'taskBackground1.png',
    title: 'Выучить английский язык за 30 дней',
    description: 'Probabo, inquit, sic agam, ut dolore suo sanciret militaris imperii disciplinam exercitumque in gravissimo bello animadversionis metu contineret, saluti prospexit civium, qua sd intellegebat continer.',
    dateOfCreation: '2020-05-15',
    deadline: '2022-09-20',
    subscribers: ['subscriber11.jpg', 'subscriber12.jpg', 'subscriber13.jpg', 'subscriber14.jpg', 'subscriber15.jpg','subscriber11.png', 'subscriber12.png', 'subscriber13.png', 'subscriber14.png', 'subscriber15.png','subscriber11.png', 'subscriber12.png', 'subscriber13.png', 'subscriber14.png', 'subscriber15.png','subscriber11.png', 'subscriber12.png', 'subscriber13.png', 'subscriber14.png', 'subscriber15.png','subscriber11.png', 'subscriber12.png', 'subscriber13.png', 'subscriber14.png', 'subscriber15.png'],
    subscriptionsCount: 65,
    collections: [
        {img: 'collection11.jpg', name: 'Глава первая'},
        {img: 'collection12.jpg', name: 'Глава вторая'},
        {img: 'collection13.jpg', name: 'Глава третья'},
        {img: 'collection14.jpg', name: 'Глава четвертая'}    
    ],
    posts: 25,
}

