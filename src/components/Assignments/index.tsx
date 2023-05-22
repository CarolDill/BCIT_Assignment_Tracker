import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

import AssignmentInterface from "../../interfaces/assignments"

interface Props {
  assignmentList: AssignmentInterface[],
  setAssignmentList: React.Dispatch<React.SetStateAction<AssignmentInterface[]>>
}

export function Assignments({ assignmentList, setAssignmentList }: Props) {
  const completedNumber = () => {
    return assignmentList.filter(value => value.completed).length
  }

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignmentList.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedNumber()} of {assignmentList.length}</span>
        </div>
      </header>

      {assignmentList.map((assignment) =>(
        <div className={styles.list}>
          <Assignment assignment={assignment} assignmentList={assignmentList} setAssignmentList={setAssignmentList}/>
      </div>
      ))}
    </section>
  );
}
