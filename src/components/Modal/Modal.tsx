'use client'

import { useState } from 'react'
import FormElements from '../FormElements'

export default function Modal() {
  const [open, setOpen] = useState(true)

  return (
    <div className='absolute top-30 m-auto w-full max-w-180 rounded-sm border border-stroke bg-gray p-4 shadow-default dark:border-strokedark dark:bg-meta-4 sm:p-8 xl:p-10'>
        <div className='bg-slate-600'></div>
        <form>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Titulo da Task
                </label>
                <input
                  type="text"
                  placeholder="Titulo da Task"
                  className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Descrição da task
                </label>
                <textarea
                  placeholder="Descrição da task"
                  className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
        </form>
    </div>
  )
}
