import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

interface Props{
  assignment: string,
  assignmentList: string[],
  setAssignmentList: React.Dispatch<React.SetStateAction<string[]>>
}

export function Assignment( { assignment, assignmentList, setAssignmentList }: Props) {
  const handleClick = () => {
    setAssignmentList(assignmentList.filter(assignmenttodelete => assignmenttodelete != assignment))
  };

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{ assignment }</p>

      <button className={styles.deleteButton} onClick={handleClick}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
