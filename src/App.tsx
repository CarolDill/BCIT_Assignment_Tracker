import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

import { useState } from "react";

function App() {
  const [assignmentList, setAssignmentList] = useState<string[]>([]);
  
  return (
    <>
      <Header assignmentList={assignmentList} setAssignmentList={setAssignmentList}/>
      <Assignments assignmentList={assignmentList}/>
    </>
  );
}

export default App;
