import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { DayPicker } from 'react-day-picker';

import { uppercase, capitalizeFirstLetter } from "../../helpers/stringHelpers";
import { useAssignmentStore } from "../../store";

import 'react-day-picker/dist/style.css';
import styles from "./header.module.css";

interface Props{
  selected: Date | undefined,
  setSelected: Dispatch<SetStateAction<Date | undefined>>
}

export function Header({ selected, setSelected}: Props) {

  const { setAssignments, assignmentName, setAssignmentName } = useAssignmentStore();
  const [disableCreate, setDisableCreate] = useState(true);

  function checkInputs() {
    if (assignmentName != ''){
      setDisableCreate(false)
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAssignmentName(e.target.value);
    if(!/^\s*$/.test(e.target.value)){
      e.preventDefault();
    }
  }
  

  function buttonHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(!selected || selected < new Date()) {
      alert("Please select a valid due date!")
    } else {
      setAssignments({
        id: Date.now(),
        name: assignmentName,
        completed: false,
        dueDate: selected
      })
  
      setAssignmentName('');
      setDisableCreate(true);
    }
    
  }
  
  return (
    <header className={styles.header} >
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={buttonHandler}>
        <input placeholder="Add a new assignment" type="text" onChange={handleChange} name="assignment" value={capitalizeFirstLetter(assignmentName)}/>
        <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        onDayClick={checkInputs}
        />
        <button disabled={disableCreate} type="submit">
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
