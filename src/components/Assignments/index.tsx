import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

// import AssignmentInterface from "../../interfaces/assignments";
import { useAssignmentStore } from "../../store";

// interface Props {
//   assignmentList: AssignmentInterface[],
//   // setAssignmentList: React.Dispatch<React.SetStateAction<AssignmentInterface[]>>
// }

export function Assignments() {
  const { assignments } = useAssignmentStore();
  const completedNumber = () => {
    return assignments.filter(value => value.completed).length
  }

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedNumber()} of {assignments.length}</span>
        </div>
      </header>

      {assignments.map((assignment) =>(
        <div className={styles.list}>
          <Assignment id={assignment.id} name={assignment.name} completed={assignment.completed} dueDate={assignment.dueDate}/>
      </div>
      ))}
    </section>
  );
}
