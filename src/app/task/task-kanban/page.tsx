'use client'
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import Image from 'next/image';
import IconPlus from '../../../../public/images/icon/icon-plus.svg';
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import DraggableItem from '@/components/Dnd/DragabbleItem';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Modal from '@/components/Modal/Modal';

const KanbanComponent = () => { 
    const user = useSession()
    useEffect(()=>{
        fetch(`/api/tasks/get?email=${user.data?.user?.email}&status=To%20do`)
        .then((res) => res.json())
        .then((data) => {
            setColumn1(data.task)
        })

        fetch(`/api/tasks/get?email=${user.data?.user?.email}&status=In%20progress`)
        .then((res) => res.json())
        .then((data) => {
            setColumn2(data.task)
        })

        fetch(`/api/tasks/get?email=${user.data?.user?.email}&status=Completed`)
        .then((res) => res.json())
        .then((data) => {
            setColumn3(data.task)
        })
    }, [])

    const [column1, setColumn1]  = useState([{
        id_task: '',
        qntCheck: 0
    }])

    const [column2, setColumn2]  = useState([{
        id_task: '',
        qntCheck: 0
    }])
    
    const [column3, setColumn3]  = useState([{
        id_task: '',
        qntCheck: 0
    }])

    const reorder = (list: any, startIndex: number, endIndex: number): any => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };


    const onDragEnd = (e: any) => {
        const { destination, source } = e;
        if (!destination) {
            return;
        }
        const newElement = reorder(column1, source.index, destination.index)
        setColumn1(newElement)
    }
    return (
        <DefaultLayout>
            <div className="container pt-10 pb-10 pl-30 pr-30">
                <Breadcrumb pageName="TasksKanban" />
                    <div className="flex flex-col gap-y-4 rounded-sm border border-stroke bg-white p-3 shadow-default dark:border-strokedark dark:bg-boxdark sm:flex-row sm:items-center sm:justify-between">
                        Tasks
                        <div className="flex flex-col gap-4 2xsm:flex-row 2xsm:items-center">   
                            <div className='flex -space-x-2'>
                                <button type='button' title='tes' className="h-9 w-9 rounded-full border-2 border-white dark:border-boxdark">
                                    <Image src={'/images/user/user-07.png'} width="36" height="36" alt="" />
                                </button>
                                <button type='button' title='tes' className="h-9 w-9 rounded-full border-2 border-white dark:border-boxdark">
                                    <Image src={'/images/user/user-08.png'} width="36" height="36" alt="" />
                                </button>
                                <button type='button' title='tes' className="h-9 w-9 rounded-full border-2 border-white dark:border-boxdark">
                                    <Image src={'/images/user/user-09.png'} width="36" height="36" alt="" />
                                </button>
                                <button type='button' title='tes' className="h-9 w-9 rounded-full border-2 border-white dark:border-boxdark">
                                    <Image src={'/images/user/user-10.png'} width="36" height="36" alt="" />
                                </button>
                                <button type='button' title='tes' className="flex h-9 w-9 items-center justify-center rounded-full border border-stroke bg-white text-primary dark:border-strokedark dark:bg-[#4f5e77] dark:text-white">
                                    <Image src={'/images/icon/icon-plus.svg'} width={16} height={16} alt=''></Image>
                                </button>
                            </div>
                            <div>
                                <button className='flex items-center gap-2 rounded bg-primary px-4.5 py-2 font-medium text-white hover:bg-opacity-80'>
                                   <Image className='fill-current' src={IconPlus} width={20} height={20} alt=''></Image>
                                    Add task
                                </button>
                            </div>
                        </div>
                    </div>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <div className="mt-9 grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">
                            <div className='swim-lane flex flex-col gap-5.5'>
                                <h4 className="text-xl font-semibold text-black dark:text-white">To do ({column1.length})</h4>
                                <Droppable 
                                    droppableId="tasks"
                                >
                                    {(provided) => (
                                        <ul 
                                            className='tasks' 
                                            ref={provided.innerRef}
                                            {...provided.droppableProps} 
                                        >
                                            {column1?.map((e, index)=>{
                                                return <DraggableItem key={`k-${index}`} index={`item-${index}`} draggableId={e.id_task} qntCheck={e.qntCheck}/>
                                            })}
                                        </ul>
                                    )} 
                                </Droppable>                                
                            </div>

                        
                            <div className='swim-lane flex flex-col gap-5.5'>
                                <h4 className="text-xl font-semibold text-black dark:text-white">In Progress ({column2.length})</h4>
                                <Droppable 
                                    type="COLUMN"
                                    direction="horizontal"
                                    droppableId="tasks"
                                >
                                    {(provided) => (
                                        <ul 
                                            className='tasks' 
                                            ref={provided.innerRef}
                                            {...provided.droppableProps} 
                                        >
                                            {provided.placeholder}
                                            {column2?.map((e, index)=>{
                                                return <DraggableItem  key={`k-${index}`} index={`item-${index}`} draggableId={e.id_task} qntCheck={e.qntCheck}/>
                                            })}
                                        </ul>
                                    )}
                                </Droppable>
                            </div>
                            <div className='swim-lane flex flex-col gap-5.5'>
                                <h4 className="text-xl font-semibold text-black dark:text-white">Completed ({column3.length})</h4>
                                <Droppable 
                                    type="COLUMN"
                                    direction="horizontal"
                                    droppableId="tasks"
                                >
                                    {(provided) => (
                                        <ul 
                                            className='tasks' 
                                            ref={provided.innerRef}
                                            {...provided.droppableProps} 
                                        >
                                            {provided.placeholder}
                                            {column3?.map((e, index)=>{
                                                return <DraggableItem key={`k-${index}`} index={`item-${index}`} draggableId={e.id_task} qntCheck={e.qntCheck}/>
                                            })}
                                        </ul>
                                    )}
                                </Droppable>
                            </div>
                        </div>
                        <div className='swim-lane flex flex-col gap-5.5'>
                            <h4 className="text-xl font-semibold text-black dark:text-white">Completed (1)</h4>
                            <Droppable 
                                type="COLUMN"
                                direction="horizontal"
                                droppableId="tasks"
                            >
                                {(provided) => (
                                    <ul
                                        className='tasks' 
                                        ref={provided.innerRef}
                                        {...provided.droppableProps} 
                                    >
                                        {provided.placeholder}
                                        {/* {column2?.map((e, index)=>{
                                            return <DraggableItem  key={e.index+ "t"} index={e.index} draggableId={e.draggableId} qntCheck={e.qntCheck}/>
                                        })} */}
                                    </ul>
                                )}
                            </Droppable>
                        </div>
                    </DragDropContext>
            </div>
            <Modal/>
        </DefaultLayout>
    );
};

export default KanbanComponent;