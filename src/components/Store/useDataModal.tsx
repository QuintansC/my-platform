import { create } from "zustand";

type State = {
  column1: Array<{
    id_task: string
    qntCheck: number
    description: string
  }>
  column2: Array<{
    id_task: string
    qntCheck: number
    description: string
  }>
  column3: Array<{
    id_task: string
    qntCheck: number
    description: string
  }>
}

type Action = {
  updateColumn1: (column1: State['column1']) => void
  updateColumn2: (column2: State['column2']) => void
  updateColumn3: (column3: State['column3']) => void

  updateAllTasks: (updateColumn1: Action['updateColumn1'], updateColumn2: Action['updateColumn2'],  updateColumn3: Action['updateColumn3']) => void
}

const useTaskStore = create<State & Action>((set) => ({
  column1: [],
  column2: [],
  column3: [],

  updateColumn1: (newColumn1) => set(() => ({ column1: newColumn1 })),
  updateColumn2: (newColumn2) => set(() => ({ column2: newColumn2 })),
  updateColumn3: (newColumn3) => set(() => ({ column3: newColumn3 })),

  updateAllTasks: (updateColumn1, updateColumn2, updateColumn3) =>{
    fetch(`/api/tasks/get?status=To%20do`)
    .then((res) => res.json())
    .then((data) => {
      updateColumn1(data.task)
    })

    fetch(`/api/tasks/get?status=In%20progress`)
    .then((res) => res.json())
    .then((data) => {
      updateColumn2(data.task)
    })

    fetch(`/api/tasks/get?status=Completed`)
    .then((res) => res.json())
    .then((data) => {
      updateColumn3(data.task)
    })
        
  }

}))


export default useTaskStore;