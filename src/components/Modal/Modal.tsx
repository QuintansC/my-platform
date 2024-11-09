'use client'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import SelectGroupTwo from '../SelectGroup/SelectGroupTwo'
import useTaskStore from '../Store/useDataModal'
interface ModalOptions {
  setOpen: Dispatch<SetStateAction<boolean>>
  open: boolean
  session: any
}

export default function Modal({ setOpen, open, session}: ModalOptions) {
  const [authorID, setAuthorID] = useState('') 
  const { updateAllTasks, updateColumn1, updateColumn2, updateColumn3 } = useTaskStore()
  const formRef = useRef<any>()
   useEffect(()=>{
      fetch(`/api/user/get`)
      .then((res) => res.json())
      .then((data) => {
        setAuthorID(data.user)
      })      
    })

    const onSubmit = ()=>{
      fetch(`/api/tasks/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          authorId: authorID,
          qntCheck: Number(formRef.current[0].value),
          status: formRef.current[1].value,
          createdAt: new Date(),
          updatedAt: new Date(),
          description: formRef.current[2].value
        }),
      })
      .then((e)=>e.json())
      .then((e)=>{
        updateAllTasks(updateColumn1, updateColumn2, updateColumn3)
      })
    }

  return (
    <div className={`absolute ${open?'visible':'hidden'} top-30 m-auto w-full max-w-180 rounded-sm border border-stroke bg-gray p-4 shadow-default dark:border-strokedark dark:bg-meta-4 sm:p-8 xl:p-10`}>
        <div className='bg-slate-600'> 
          <button onClick={()=>setOpen(!open)}>CLose</button>
          </div>
          <form ref={formRef}>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Numero de checkbox da task
                </label>
                <input
                  type="number"
                  placeholder="Numero de checkbox da Task"
                  className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
                />
              </div>
              <SelectGroupTwo title={'Status'} />
              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Descrição da task
                </label>
                <textarea
                  placeholder="Descrição da task"
                  className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
                />
              </div>
              <button
                type='button'
                onClick={onSubmit}
                className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
              > 
                Criar Task
              </button>
            </div>
        </form>
    </div>
  )
}

