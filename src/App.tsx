import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

import { useState } from "react";
interface Assignment{
  name: string,
  completed: boolean
}


function App() {
  const [assignmentList, setAssignmentList] = useState<Assignment[]>([]);
  
  return (
    <>
      <Header assignmentList={assignmentList} setAssignmentList={setAssignmentList}/>
      <Assignments assignmentList={assignmentList} setAssignmentList={setAssignmentList}/>
    </>
  );
}

export default App;
