import { useState } from "react";

import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";


function App() {
  const [selected, setSelected] = useState<Date | undefined>();
  
  
  return (
    <>
      <Header selected={selected} setSelected={setSelected}/>
      <Assignments />
    </>
  );
}

export default App;
