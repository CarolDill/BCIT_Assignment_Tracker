import { create } from "zustand";
import AssignmentInterface from "./interfaces/assignments";

interface AssignmentState{
  assignments: AssignmentInterface[]
}

const useStore = create<AssignmentState>(() => {
  
})