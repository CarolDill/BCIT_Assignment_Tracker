import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

import { useState } from "react";
interface Assignment{
  id: number,
  name: string,
  completed: boolean
}

function App() {
  const [assignmentList, setAssignmentList] = useState<Assignment[]>([]);
  const [assignmentName, setAssignmentName] = useState<string>('');
  
  return (
    <>
      <Header assignmentList={assignmentList} setAssignmentList={setAssignmentList} assignmentName={assignmentName} setAssignmentName={setAssignmentName}/>
      <Assignments assignmentList={assignmentList} setAssignmentList={setAssignmentList}/>
    </>
  );
}

export default App;
