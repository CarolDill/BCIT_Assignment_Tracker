import { create } from "zustand";
import AssignmentInterface from "./interfaces/assignments";

interface AssignmentState{
  assignments: AssignmentInterface[],
  setAssignments: (assignment: AssignmentInterface) => void,
  updateAssignmentList: (assignments: AssignmentInterface[]) => void,
  assignmentName: string,
  setAssignmentName: (name: string) => void
}

export const useAssignmentStore = create<AssignmentState>((set) => ({
  assignments: [],
  setAssignments: (newassignment) => set((state) => ({assignments: [...state.assignments,newassignment]})),
  updateAssignmentList: (assignmentsList) => set(() => ({assignments: assignmentsList})),
  assignmentName: '',
  setAssignmentName: (name) => set(() => ({assignmentName: name}))
}))