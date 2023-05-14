import styles from "./assignment.module.css";
import { TbTrash, TbCircleCheckFilled } from "react-icons/tb";

import { useState } from "react";

interface Props{
  assignment: string,
  assignmentList: string[],
  setAssignmentList: React.Dispatch<React.SetStateAction<string[]>>,
  completedAssignmentsNumber : number,
  setCompletedAssignmentsNumber: React.Dispatch<React.SetStateAction<number>>
}

export function Assignment( { assignment, assignmentList, setAssignmentList, completedAssignmentsNumber, setCompletedAssignmentsNumber }: Props) {
  const [complete, setComplete] = useState(false);
  console.log(complete);

  const handleDeleteClick = () => {
    setAssignmentList(assignmentList.filter(assignmenttodelete => assignmenttodelete != assignment))
  };

  const handleComplete = () => {
    if (complete == true) {
      setComplete(false);
      setCompletedAssignmentsNumber(completedAssignmentsNumber - 1);
    } else {
      setComplete(true);
      setCompletedAssignmentsNumber(completedAssignmentsNumber + 1);
    }
  }

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={handleComplete}>
        <div className={complete? styles.checkContainer : ''} >
          <TbCircleCheckFilled size={20} className={complete? styles.checkContainer : styles.none}/>
        </div>
      </button>

      <p className={complete? styles.textCompleted : ''}>{ assignment }</p>

      <button className={styles.deleteButton} onClick={handleDeleteClick}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
