import styles from "./assignment.module.css";
import { TbTrash, TbCircleCheckFilled } from "react-icons/tb";


interface Assignment{
  id: number,
  name: string,
  completed: boolean
}

interface Props{
  assignment: Assignment,
  assignmentList: Assignment[],
  setAssignmentList: React.Dispatch<React.SetStateAction<Assignment[]>>,
}

export function Assignment( { assignment, assignmentList, setAssignmentList }: Props) {

  const handleDeleteClick = () => {
    setAssignmentList(assignmentList.filter((assignmenttodelete) => assignmenttodelete.id != assignment.id))
  };

  const handleComplete = () => {
    setAssignmentList(
      assignmentList.map(item => {
        if (item.id === assignment.id) {
          if(item.completed){
            return {...item, completed: false}
          } else {
            return {...item, completed: true}
          }
        }
        else {
          return item
        }
    }))
  }

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={handleComplete}>
        <div className={assignment.completed ? styles.checkContainer : ''} >
          <TbCircleCheckFilled size={20} className={assignment.completed? styles.checkContainer : styles.none}/>
        </div>
      </button>

      <p className={assignment.completed ? styles.textCompleted : ''}>{ assignment.name }</p>

      <button className={styles.deleteButton} onClick={handleDeleteClick}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
