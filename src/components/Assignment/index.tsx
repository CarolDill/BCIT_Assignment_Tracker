import { TbTrash, TbCircleCheckFilled } from "react-icons/tb";

import AssignmentInterface from "../../interfaces/assignments";
import daysDifference from "../../helpers/daysHelpers";
import { useAssignmentStore } from "../../store";

import styles from "./assignment.module.css";
import 'react-day-picker/dist/style.css';


export function Assignment( assignment: AssignmentInterface) {

  const { assignments, updateAssignmentList } = useAssignmentStore();

  const handleDeleteClick = () => {
    updateAssignmentList(assignments.filter((assignmenttodelete) => assignmenttodelete.id != assignment.id))
  };

  const handleComplete = () => {
    updateAssignmentList(
      assignments.map(item => {
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

  function formatDate(date:Date | undefined) {
    if (date) {
      const diff =  daysDifference(date);
      if (diff == 1) {
        return "Due: tomorrow"
      } else {
        return `Due: ${diff} days`
      }
    }
  }

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={handleComplete}>
        <div className={assignment.completed ? styles.checkContainer : ''} >
          <TbCircleCheckFilled size={20} className={assignment.completed? styles.checkContainer : styles.none}/>
        </div>
      </button>

      <p className={assignment.completed ? styles.textCompleted : ''} >{ assignment.name } <span className={daysDifference(assignment.dueDate) == 1 ? styles.dueTomorrow : styles.dueNDays}>{formatDate(assignment.dueDate)}</span> </p>

      <button className={styles.deleteButton} onClick={handleDeleteClick}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
