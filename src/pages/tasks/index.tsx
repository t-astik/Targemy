import Navbar from '../../components/navbar'
import Task from '../../components/task'
import Collections from '../../components/collections'

import styles from './styles.module.css';

const Tasks = () =>  {
  return (
    <div className={styles.tasks}>
        <Navbar />
        <Task />
        <Collections />
    </div>
  );
}

export default Tasks;
