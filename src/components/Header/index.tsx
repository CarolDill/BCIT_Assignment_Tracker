import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase, capitalizeFirstLetter } from "../../helpers/stringHelpers";

import { useState } from "react";

interface Assignment{
  id: number,
  name: string,
  completed: boolean
}
interface Props{
  assignmentList: Assignment[],
  setAssignmentList: React.Dispatch<React.SetStateAction<Assignment[]>>,
  assignmentName: string,
  setAssignmentName: React.Dispatch<React.SetStateAction<string>>,
}

export function Header({assignmentList, setAssignmentList, assignmentName, setAssignmentName}: Props) {

  const [disableCreate, setDisableCreate] = useState(true);
  // const [currentAssignment, setCurrentAssignment] = useState({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAssignmentName(e.target.value);
    if(!/\S/.test(e.target.value)){
      setDisableCreate(true);
    } else {
      e.preventDefault();
      // setCurrentAssignment({
      //   id: Date.now,
      //   name: e.target.value,
      //   completed: false});
      //   console.log(currentAssignment);
        
      setDisableCreate(false);
    }
  }

  function buttonHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log(currentAssignment);
    setAssignmentList([...assignmentList, {
      id: Date.now(),
      name: assignmentName,
      completed: false
    }])

    setAssignmentName('');
  }

  console.log(assignmentList);
  

  return (
    <header className={styles.header} onSubmit={buttonHandler}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" onChange={handleChange} name="assignment" value={capitalizeFirstLetter(assignmentName)}/>
        <button disabled={disableCreate} type="submit">
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
