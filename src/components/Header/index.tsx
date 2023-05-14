import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

import { useState } from "react";

export function Header() {

  const [disableCreate, setDisableCreate] = useState(true);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if(!/\S/.test(e.target.value)){
      setDisableCreate(true);
    } else {
      setDisableCreate(false);
    }
  }
  
  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" onChange={handleChange}/>
        <button disabled={disableCreate}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
