/* eslint-disable @next/next/no-img-element */
'use client'
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

import IconPlus from '../../../../public/images/icon/icon-plus.svg';
import IconCorrect from '../../../../public/images/icon/icon-correct.svg';
import MoreOptions from '@/components/MoreOptions/MoreOptions';

const KanbanComponent = () => {
    const session = useSession();
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
                                   <Image className='fill-current' src={IconPlus as any} width={20} height={20} alt=''></Image>
                                    Add task
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className='swim-lane flex flex-col gap-5.5'>
                        <h4 className="text-xl font-semibold text-black dark:text-white">To do (3)</h4>
                        <div draggable className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark">
                            <MoreOptions/>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="taskCheckbox1" className="cursor-pointer">
                                    <div className="relative flex items-center pt-0.5">
                                        <input id="taskCheckbox1" className="taskCheckbox sr-only" type="checkbox" />
                                        <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark dark:bg-boxdark-2">
                                            <span className="text-white opacity-0">
                                                <Image
                                                    src={IconCorrect}
                                                    alt="Logo"
                                                    width={10}
                                                    height={10}
                                                />
                                            </span>
                                        </div>
                                        <p>Here is task one</p>
                                    </div>
                                </label>
                                <label htmlFor="taskCheckbox2" className="cursor-pointer">
                                    <div className="relative flex it ems-center pt-0.5">
                                        <input id="taskCheckbox2" className="taskCheckbox sr-only" type="checkbox" />
                                        <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark dark:bg-boxdark-2">
                                            <span className="text-white opacity-0">
                                                <Image
                                                    src={IconCorrect}
                                                    alt="Logo"
                                                    width={10}
                                                    height={10}
                                                />
                                            </span>
                                        </div>
                                        <p>Here is task one</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div draggable className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark">
                            <MoreOptions/>
                        </div>
                        <div draggable className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark">
                            <MoreOptions/>
                        </div>
                    </div>
                    <div className='swim-lane flex flex-col gap-5.5'>
                        <h4 className="text-xl font-semibold text-black dark:text-white">In Progress (1)</h4>
                        <div draggable className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark">
                            <MoreOptions/>
                        </div>
                    </div>
                    <div className='swim-lane flex flex-col gap-5.5'>
                        <h4 className="text-xl font-semibold text-black dark:text-white">Completed (1)</h4>
                        <div draggable className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark">
                            <MoreOptions/>
                        </div>
                    </div>

                    <div className='swim-lane flex flex-col gap-5.5'>
                        <h4 className="text-xl font-semibold text-black dark:text-white">Completed (1)</h4>
                        <div draggable className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark">
                            <MoreOptions/>
                        </div>
                    </div>
            </div>
        </DefaultLayout>
    );
};

export default KanbanComponent;