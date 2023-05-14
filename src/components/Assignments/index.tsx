import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface Props {
  assignmentList: string[],
}

export function Assignments({ assignmentList }: Props) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignmentList.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>1 of {assignmentList.length}</span>
        </div>
      </header>

      {assignmentList.map((assignment) =>(
        <div className={styles.list}>
          <Assignment assignment={assignment}/>
      </div>
      ))}
    </section>
  );
}
