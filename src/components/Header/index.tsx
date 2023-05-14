import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase, capitalizeFirstLetter } from "../../helpers/stringHelpers";

import { useState } from "react";

interface Assignment{
  name: string,
  completed: boolean
}
interface Props{
  assignmentList: Assignment[],
  setAssignmentList: React.Dispatch<React.SetStateAction<Assignment[]>>
}

export function Header({assignmentList, setAssignmentList}: Props) {

  const [disableCreate, setDisableCreate] = useState(true);
  const [currentAssignment, setCurrentAssignment] = useState({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if(!/\S/.test(e.target.value)){
      setDisableCreate(true);
    } else {
      e.preventDefault();
      setCurrentAssignment({
        name: e.target.value,
        completed: false});
        console.log(currentAssignment);
        
      setDisableCreate(false);
    }
  }

  function buttonHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log(currentAssignment);
    setAssignmentList({...assignmentList, currentAssignment });
    setCurrentAssignment({});
  }

  console.log(assignmentList);
  

  return (
    <header className={styles.header} onSubmit={buttonHandler}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" onChange={handleChange} name="assignment" /*value={capitalizeFirstLetter(currentAssignment)}*//>
        <button disabled={disableCreate} type="submit">
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
