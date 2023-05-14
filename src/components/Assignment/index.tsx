import styles from "./assignment.module.css";
import { TbTrash, TbCircleCheckFilled } from "react-icons/tb";

import { useState } from "react";

interface Assignment{
  name: string,
  completed: boolean
}

interface Props{
  assignment: Assignment,
  assignmentList: Assignment[],
  setAssignmentList: React.Dispatch<React.SetStateAction<Assignment[]>>,
  completedAssignmentsNumber : number,
  setCompletedAssignmentsNumber: React.Dispatch<React.SetStateAction<number>>
}

export function Assignment( { assignment, assignmentList, setAssignmentList, completedAssignmentsNumber, setCompletedAssignmentsNumber }: Props) {
  const [complete, setComplete] = useState(false);
  console.log(complete);

  const handleDeleteClick = () => {
    setAssignmentList(assignmentList.filter((assignmenttodelete) => assignmenttodelete.name != assignment.name))
  };

  const handleComplete = () => {
    if (complete) {
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

      <p className={complete? styles.textCompleted : ''}>{ assignment.name }</p>

      <button className={styles.deleteButton} onClick={handleDeleteClick}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
