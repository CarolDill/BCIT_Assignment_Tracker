import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

import { useState } from "react";

import AssignmentInterface from "./interfaces/assignments";

// import { format } from 'date-fns';
// import { DayPicker } from 'react-day-picker';

function App() {
  const [assignmentList, setAssignmentList] = useState<AssignmentInterface[]>([]);
  const [assignmentName, setAssignmentName] = useState<string>('');
  const [selected, setSelected] = useState<Date | undefined>();
  
  return (
    <>
      <Header assignmentList={assignmentList} setAssignmentList={setAssignmentList} assignmentName={assignmentName} setAssignmentName={setAssignmentName} selected={selected} setSelected={setSelected}/>
      <Assignments assignmentList={assignmentList} setAssignmentList={setAssignmentList}/>
    </>
  );
}

export default App;
