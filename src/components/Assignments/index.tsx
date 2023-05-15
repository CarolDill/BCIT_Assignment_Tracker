import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

import { useState } from "react";

interface Assignment{
  id: number,
  name: string,
  completed: boolean
}

interface Props {
  assignmentList: Assignment[],
  setAssignmentList: React.Dispatch<React.SetStateAction<Assignment[]>>
}

export function Assignments({ assignmentList, setAssignmentList }: Props) {
  const [completedAssignmentsNumber, setCompletedAssignmentsNumber] = useState(0);

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignmentList.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedAssignmentsNumber} of {assignmentList.length}</span>
        </div>
      </header>

      {assignmentList.map((assignment) =>(
        <div className={styles.list}>
          <Assignment assignment={assignment} assignmentList={assignmentList} setAssignmentList={setAssignmentList} completedAssignmentsNumber={completedAssignmentsNumber} setCompletedAssignmentsNumber={setCompletedAssignmentsNumber}/>
      </div>
      ))}
    </section>
  );
}
