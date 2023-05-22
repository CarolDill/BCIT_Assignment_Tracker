// import React from "react";
import {Dispatch, SetStateAction} from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase, capitalizeFirstLetter } from "../../helpers/stringHelpers";

import AssignmentInterface from "../../interfaces/assignments";

import { useState } from "react";

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
interface Props{
  assignmentList: AssignmentInterface[],
  setAssignmentList: Dispatch<SetStateAction<AssignmentInterface[]>>,
  assignmentName: string,
  setAssignmentName: Dispatch<SetStateAction<string>>,
  selected: Date | undefined,
  setSelected: Dispatch<SetStateAction<Date | undefined>>
}

export function Header({assignmentList, setAssignmentList, assignmentName, setAssignmentName, selected, setSelected}: Props) {

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
    console.log(selected);
    if(!selected || selected == undefined) {
      alert("Please select a valid due date!")
    } else {
      setAssignmentList([...assignmentList, {
        id: Date.now(),
        name: assignmentName,
        completed: false,
        dueDate: selected
      }])
  
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
