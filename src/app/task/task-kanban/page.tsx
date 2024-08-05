'use client'
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import Image from 'next/image';
import React from 'react';

import IconPlus from '../../../../public/images/icon/icon-plus.svg';
import MoreOptions from '@/components/MoreOptions/MoreOptions';

import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import DraggableItem from '@/components/Dnd/DragabbleItem';

const KanbanComponent = () => {
    const onDragEnd = () => {

    }
    return (
        <DefaultLayout>
            <div className="container pt-10 pb-10 pl-30 pr-30">
                <Breadcrumb pageName="TasksKanban" />
                    <div className="flex flex-col gap-y-4 rounded-sm border border-stroke bg-white p-3 shadow-default dark:border-strokedark dark:bg-boxdark sm:flex-row sm:items-center sm:justify-between">
                        Tasks
                        <div className="flex flex-col gap-4 2xsm:flex-row 2xsm:items-center">   
                            <div className='flex -space-x-2'>
                                <button className="h-9 w-9 rounded-full border-2 border-white dark:border-boxdark">
                                    <Image src={'/images/user/user-07.png'} width="36" height="36" alt="" />
                                </button>
                                <button className="h-9 w-9 rounded-full border-2 border-white dark:border-boxdark">
                                    <Image src={'/images/user/user-08.png'} width="36" height="36" alt="" />
                                </button>
                                <button className="h-9 w-9 rounded-full border-2 border-white dark:border-boxdark">
                                    <Image src={'/images/user/user-09.png'} width="36" height="36" alt="" />
                                </button>
                                <button className="h-9 w-9 rounded-full border-2 border-white dark:border-boxdark">
                                    <Image src={'/images/user/user-10.png'} width="36" height="36" alt="" />
                                </button>
                                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-stroke bg-white text-primary dark:border-strokedark dark:bg-[#4f5e77] dark:text-white">
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
                                <h4 className="text-xl font-semibold text-black dark:text-white">To do (3)</h4>
                                <Droppable droppableId="tasks">
                                    {(provided) => (
                                        <ul className='tasks' {...provided.droppableProps} ref={provided.innerRef}>
                                            {provided.placeholder}
                                            <DraggableItem key={1} draggableId="ta" qntCheck={1}/>
                                            <DraggableItem key={3} draggableId="task" qntCheck={4}/>
                                            <DraggableItem key={2} draggableId="tasks" qntCheck={3}/>
                                        </ul>
                                    )}
                                </Droppable>                                
                            </div>

                        
                            <div className='swim-lane flex flex-col gap-5.5'>
                                <h4 className="text-xl font-semibold text-black dark:text-white">In Progress (1)</h4>
                                <Droppable 
                                    type="COLUMN"
                                    direction="horizontal"
                                    droppableId="tasks"
                                >
                                    {(provided) => (
                                        <ul className='tasks' {...provided.droppableProps} ref={provided.innerRef}>
                                            {provided.placeholder}
                                            <DraggableItem key={4} draggableId="tasks" qntCheck={1}/>
                                        </ul>
                                    )}
                                </Droppable>
                            </div>
                            <div className='swim-lane flex flex-col gap-5.5'>
                                <h4 className="text-xl font-semibold text-black dark:text-white">Completed (1)</h4>
                                <Droppable 
                                    type="COLUMN"
                                    direction="horizontal"
                                    droppableId="tasks"
                                >
                                    {(provided) => (
                                        <ul className='tasks' {...provided.droppableProps} ref={provided.innerRef}>
                                            {provided.placeholder}
                                            <DraggableItem key={4} draggableId="tasks" qntCheck={1}/>
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
                                     <ul className='tasks' {...provided.droppableProps} ref={provided.innerRef}>
                                        {provided.placeholder}
                                        <DraggableItem key={4} draggableId="tasks" qntCheck={1}/>
                                    </ul>
                                )}
                            </Droppable>
                        </div>
                    </DragDropContext>
            </div>
        </DefaultLayout>
    );
};

export default KanbanComponent;