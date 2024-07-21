import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import Image from 'next/image';
import React from 'react';

import YouMessage from '../../components/Chat/Bubble/you';
import MeMessage from '../../components/Chat/Bubble/me';

const Messages = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                <Breadcrumb pageName="TasksKanban" />
                <div className="h-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:flex">
                    <div className="hidden h-full flex-col xl:flex xl:w-1/4">
                        <div className="sticky border-b border-stroke px-6 py-7.5 dark:border-strokedark">
                            <h3 className="text-lg font-medium text-black dark:text-white 2xl:text-xl">Active Conversations<span className="rounded-md border-[.5px] border-stroke bg-gray-2 px-2 py-0.5 text-base font-medium text-black dark:border-strokedark dark:bg-boxdark-2 dark:text-white 2xl:ml-4">7</span></h3>
                        </div>
                        <div className="flex max-h-full flex-col overflow-auto p-5">
                            <form className="sticky mb-7">
                                <input className="w-full rounded border border-stroke bg-gray-2 py-2.5 pl-5 pr-10 text-sm outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark-2" placeholder="Search..." type="text"/>
                                <button className="absolute right-4 top-1/2 -translate-y-1/2">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 3C5.3505 3 3 5.3505 3 8.25C3 11.1495 5.3505 13.5 8.25 13.5C11.1495 13.5 13.5 11.1495 13.5 8.25C13.5 5.3505 11.1495 3 8.25 3ZM1.5 8.25C1.5 4.52208 4.52208 1.5 8.25 1.5C11.9779 1.5 15 4.52208 15 8.25C15 11.9779 11.9779 15 8.25 15C4.52208 15 1.5 11.9779 1.5 8.25Z" fill="#637381"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.957 11.958C12.2499 11.6651 12.7247 11.6651 13.0176 11.958L16.2801 15.2205C16.573 15.5133 16.573 15.9882 16.2801 16.2811C15.9872 16.574 15.5124 16.574 15.2195 16.2811L11.957 13.0186C11.6641 12.7257 11.6641 12.2508 11.957 11.958Z" fill="#637381"></path>
                                    </svg>
                                </button>
                            </form>
                            <div className="no-scrollbar max-h-full space-y-2.5 overflow-auto">
                                <div className="flex cursor-pointer items-center rounded px-4 py-2 hover:bg-gray-2 dark:hover:bg-strokedark">
                                <div className="relative mr-3.5 h-11 w-full max-w-11 rounded-full"><Image alt="profile" loading="lazy" width="44" height="44" decoding="async" data-nimg="1" className="h-full w-full object-cover object-center"  src="/_next/image?url=%2Fimages%2Fuser%2Fuser-03.png&amp;w=96&amp;q=75" style={{ color: 'transparent' }}/><span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-gray-2 bg-success"></span></div>
                                <div className="w-full">
                                    <h5 className="text-sm font-medium text-black dark:text-white">Henry Dholi</h5>
                                    <p className="text-sm">I cam across your profile and...</p>
                                </div>
                                </div>
                                <div className="flex cursor-pointer items-center rounded px-4 py-2 hover:bg-gray-2 dark:hover:bg-strokedark">
                                <div className="relative mr-3.5 h-11 w-full max-w-11 rounded-full"><Image alt="profile" loading="lazy" width="44" height="44" decoding="async" data-nimg="1" className="h-full w-full object-cover object-center"  src="/_next/image?url=%2Fimages%2Fuser%2Fuser-04.png&amp;w=96&amp;q=75" style={{ color: 'transparent' }}/><span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-gray-2 bg-success"></span></div>
                                <div className="w-full">
                                    <h5 className="text-sm font-medium text-black dark:text-white">Mariya Desoja</h5>
                                    <p className="text-sm">I like your confidence 💪</p>
                                </div>
                                </div>
                                <div className="flex cursor-pointer items-center rounded px-4 py-2 hover:bg-gray-2 dark:hover:bg-strokedark">
                                <div className="relative mr-3.5 h-11 w-full max-w-11 rounded-full"><Image alt="profile" loading="lazy" width="44" height="44" decoding="async" data-nimg="1" className="h-full w-full object-cover object-center" src="/_next/image?url=%2Fimages%2Fuser%2Fuser-05.png&amp;w=96&amp;q=75" style={{ color: 'transparent' }}/><span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-gray-2 bg-success"></span></div>
                                <div className="w-full">
                                    <h5 className="text-sm font-medium text-black dark:text-white">Robert Jhon</h5>
                                    <p className="text-sm">Can you share your offer?</p>
                                </div>
                                </div>
                                <div className="flex cursor-pointer items-center rounded px-4 py-2 hover:bg-gray-2 dark:hover:bg-strokedark">
                                <div className="relative mr-3.5 h-11 w-full max-w-11 rounded-full"><Image alt="profile" src="/_next/image?url=%2Fimages%2Fuser%2Fuser-01.png&amp;w=128&amp;q=75" loading="lazy" width="44" height="44" decoding="async" data-nimg="1" className="h-full w-full object-cover object-center" style={{ color: 'transparent' }}/><span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-gray-2 bg-success"></span></div>
                                <div className="w-full">
                                    <h5 className="text-sm font-medium text-black dark:text-white">Cody Fisher</h5>
                                    <p className="text-sm"> Im waiting for you response!</p>
                                </div>
                                </div>
                                <div className="flex cursor-pointer items-center rounded px-4 py-2 hover:bg-gray-2 dark:hover:bg-strokedark">
                                <div className="relative mr-3.5 h-11 w-full max-w-11 rounded-full"><Image alt="profile" loading="lazy" width="44" height="44" decoding="async" data-nimg="1" className="h-full w-full object-cover object-center" src="/_next/image?url=%2Fimages%2Fuser%2Fuser-02.png&amp;w=96&amp;q=75" style={{ color: 'transparent' }}/><span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-gray-2 bg-success"></span></div>
                                <div className="w-full">
                                    <h5 className="text-sm font-medium text-black dark:text-white">Jenny Wilson</h5>
                                    <p className="text-sm">I cam across your profile and...</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full flex-col border-l border-stroke dark:border-strokedark xl:w-3/4">
                        <div className="sticky flex items-center justify-between border-b border-stroke px-6 py-4.5 dark:border-strokedark">
                            <div className="flex items-center">
                                <div className="mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-full">
                                    <Image alt="avatar" loading="lazy" width="52" height="52" decoding="async" data-nimg="1" className="h-full w-full object-cover object-center" src="/_next/image?url=%2Fimages%2Fuser%2Fuser-01.png&amp;w=128&amp;q=75" style={{ color: 'transparent' }}/>
                                </div>
                                <div>
                                    <h5 className="font-medium text-black dark:text-white">Henry Dholi</h5>
                                    <p className="text-sm">Reply to message</p>
                                </div>
                            </div>
                            
                            <div className="relative flex">
                                <button className="text-[#98A6AD] hover:text-body">
                                    <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.25 11.25C3.49264 11.25 4.5 10.2426 4.5 9C4.5 7.75736 3.49264 6.75 2.25 6.75C1.00736 6.75 0 7.75736 0 9C0 10.2426 1.00736 11.25 2.25 11.25Z" fill=""></path>
                                        <path d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z" fill=""></path>
                                        <path d="M15.75 11.25C16.9926 11.25 18 10.2426 18 9C18 7.75736 16.9926 6.75 15.75 6.75C14.5074 6.75 13.5 7.75736 13.5 9C13.5 10.2426 14.5074 11.25 15.75 11.25Z" fill=""></path>
                                    </svg>
                                </button>
                                <div className="absolute right-0 top-full z-40 w-40 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark hidden">
                                    <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4">
                                        <svg className="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_62_9787)">
                                                <path d="M15.55 2.97499C15.55 2.77499 15.475 2.57499 15.325 2.42499C15.025 2.12499 14.725 1.82499 14.45 1.52499C14.175 1.24999 13.925 0.974987 13.65 0.724987C13.525 0.574987 13.375 0.474986 13.175 0.449986C12.95 0.424986 12.75 0.474986 12.575 0.624987L10.875 2.32499H2.02495C1.17495 2.32499 0.449951 3.02499 0.449951 3.89999V14C0.449951 14.85 1.14995 15.575 2.02495 15.575H12.15C13 15.575 13.725 14.875 13.725 14V5.12499L15.35 3.49999C15.475 3.34999 15.55 3.17499 15.55 2.97499ZM8.19995 8.99999C8.17495 9.02499 8.17495 9.02499 8.14995 9.02499L6.34995 9.62499L6.94995 7.82499C6.94995 7.79999 6.97495 7.79999 6.97495 7.77499L11.475 3.27499L12.725 4.49999L8.19995 8.99999ZM12.575 14C12.575 14.25 12.375 14.45 12.125 14.45H2.02495C1.77495 14.45 1.57495 14.25 1.57495 14V3.87499C1.57495 3.62499 1.77495 3.42499 2.02495 3.42499H9.72495L6.17495 6.99999C6.04995 7.12499 5.92495 7.29999 5.87495 7.49999L4.94995 10.3C4.87495 10.5 4.92495 10.675 5.02495 10.85C5.09995 10.95 5.24995 11.1 5.52495 11.1H5.62495L8.49995 10.15C8.67495 10.1 8.84995 9.97499 8.97495 9.84999L12.575 6.24999V14ZM13.5 3.72499L12.25 2.49999L13.025 1.72499C13.225 1.92499 14.05 2.74999 14.25 2.97499L13.5 3.72499Z" fill=""></path>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_62_9787">
                                                <rect width="16" height="16" fill="white"></rect>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                        Edit
                                    </button>
                                    <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4">
                                        <svg className="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.225 2.20005H10.3V1.77505C10.3 1.02505 9.70005 0.425049 8.95005 0.425049H7.02505C6.27505 0.425049 5.67505 1.02505 5.67505 1.77505V2.20005H3.75005C3.02505 2.20005 2.42505 2.80005 2.42505 3.52505V4.27505C2.42505 4.82505 2.75005 5.27505 3.22505 5.47505L3.62505 13.75C3.67505 14.775 4.52505 15.575 5.55005 15.575H10.4C11.425 15.575 12.275 14.775 12.325 13.75L12.75 5.45005C13.225 5.25005 13.55 4.77505 13.55 4.25005V3.50005C13.55 2.80005 12.95 2.20005 12.225 2.20005ZM6.82505 1.77505C6.82505 1.65005 6.92505 1.55005 7.05005 1.55005H8.97505C9.10005 1.55005 9.20005 1.65005 9.20005 1.77505V2.20005H6.85005V1.77505H6.82505ZM3.57505 3.52505C3.57505 3.42505 3.65005 3.32505 3.77505 3.32505H12.225C12.325 3.32505 12.425 3.40005 12.425 3.52505V4.27505C12.425 4.37505 12.35 4.47505 12.225 4.47505H3.77505C3.67505 4.47505 3.57505 4.40005 3.57505 4.27505V3.52505V3.52505ZM10.425 14.45H5.57505C5.15005 14.45 4.80005 14.125 4.77505 13.675L4.40005 5.57505H11.625L11.25 13.675C11.2 14.1 10.85 14.45 10.425 14.45Z" fill=""></path>
                                            <path d="M8.00005 8.1001C7.70005 8.1001 7.42505 8.3501 7.42505 8.6751V11.8501C7.42505 12.1501 7.67505 12.4251 8.00005 12.4251C8.30005 12.4251 8.57505 12.1751 8.57505 11.8501V8.6751C8.57505 8.3501 8.30005 8.1001 8.00005 8.1001Z" fill=""></path>
                                            <path d="M9.99994 8.60004C9.67494 8.57504 9.42494 8.80004 9.39994 9.12504L9.24994 11.325C9.22494 11.625 9.44994 11.9 9.77494 11.925C9.79994 11.925 9.79994 11.925 9.82494 11.925C10.1249 11.925 10.3749 11.7 10.3749 11.4L10.5249 9.20004C10.5249 8.87504 10.2999 8.62504 9.99994 8.60004Z" fill=""></path>
                                            <path d="M5.97497 8.60004C5.67497 8.62504 5.42497 8.90004 5.44997 9.20004L5.62497 11.4C5.64997 11.7 5.89997 11.925 6.17497 11.925C6.19997 11.925 6.19997 11.925 6.22497 11.925C6.52497 11.9 6.77497 11.625 6.74997 11.325L6.57497 9.12504C6.57497 8.80004 6.29997 8.57504 5.97497 8.60004Z" fill=""></path>
                                        </svg>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        
                        </div>
                        <div className="no-scrollbar max-h-full space-y-3.5 overflow-auto px-6 py-7.5">
                            <YouMessage message='I want to make an appointment tomorrow from 2:00 to 5:00pm?' time="1:55pm" whois="Andri Thomas"/>
                            <MeMessage message="Hello, Thomas! I will check the schedule and inform you" time="1:55pm"></MeMessage>
                            <YouMessage message='Ok, Thanks for your reply.' time="1:55pm" whois="Andri Thomas"/>
                            <MeMessage message="You are welcome!" time="1:55pm"></MeMessage>
                            <YouMessage message='I want to make an appointment tomorrow from 2:00 to 5:00pm?' time="1:55pm" whois="Andri Thomas"/>

                            <MeMessage message="Hello, Thomas! I will check the schedule and inform you" time="1:55pm"></MeMessage>
                            <YouMessage message='Ok, Thanks for your reply.' time="1:55pm" whois="Andri Thomas"/>
                            <MeMessage message="Hello, Thomas! I will check the schedule and inform you" time="1:55pm"></MeMessage>
                            <YouMessage message='Ok, Thanks for your reply.' time="1:55pm" whois="Andri Thomas"/>
                            <MeMessage message="Hello, Thomas! I will check the schedule and inform you" time="1:55pm"></MeMessage>
                            <YouMessage message='Ok, Thanks for your reply.' time="1:55pm" whois="Andri Thomas"/>
                    
                        </div>
                        <div className="sticky bottom-0 border-t border-stroke bg-white px-6 py-5 dark:border-strokedark dark:bg-boxdark">
                            <form className="flex items-center justify-between space-x-4.5">
                                <div className="relative w-full">
                                    <input placeholder="Type something here" className="h-13 w-full rounded-md border border-stroke bg-gray pl-5 pr-19 text-black placeholder-body outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark-2 dark:text-white" type="text"/>
                                    <div className="absolute right-5 top-1/2 inline-flex -translate-y-1/2 items-center justify-end space-x-4">
                                        <button className="hover:text-primary">
                                            <svg width="18" height="18" viewBox="0 0 18 18" className="fill-current">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.835 1.79102C11.2378 1.79102 10.6651 2.02824 10.2428 2.45051L3.3503 9.34302C2.64657 10.0467 2.25122 11.0012 2.25122 11.9964C2.25122 12.9917 2.64657 13.9461 3.3503 14.6499C4.05403 15.3536 5.0085 15.7489 6.00372 15.7489C6.99895 15.7489 7.95341 15.3536 8.65714 14.6499L15.5496 7.75736C15.8425 7.46446 16.3174 7.46446 16.6103 7.75736C16.9032 8.05025 16.9032 8.52512 16.6103 8.81802L9.7178 15.7105C8.73277 16.6956 7.39677 17.2489 6.00372 17.2489C4.61067 17.2489 3.27468 16.6956 2.28964 15.7105C1.30461 14.7255 0.751221 13.3895 0.751221 11.9964C0.751221 10.6034 1.30461 9.26739 2.28964 8.28236L9.18214 1.38985C9.88572 0.686279 10.84 0.291016 11.835 0.291016C12.83 0.291016 13.7842 0.686279 14.4878 1.38985C15.1914 2.09343 15.5866 3.04768 15.5866 4.04268C15.5866 5.03769 15.1914 5.99194 14.4878 6.69552L7.5878 13.588C7.16569 14.0101 6.59318 14.2473 5.99622 14.2473C5.39926 14.2473 4.82676 14.0101 4.40464 13.588C3.98253 13.1659 3.74539 12.5934 3.74539 11.9964C3.74539 11.3995 3.98253 10.827 4.40464 10.4049L10.7725 4.04454C11.0655 3.75182 11.5404 3.7521 11.8331 4.04517C12.1258 4.33823 12.1256 4.81311 11.8325 5.10583L5.4653 11.4655C5.32469 11.6063 5.24539 11.7974 5.24539 11.9964C5.24539 12.1956 5.32449 12.3865 5.4653 12.5274C5.60611 12.6682 5.79709 12.7473 5.99622 12.7473C6.19535 12.7473 6.38633 12.6682 6.52714 12.5274L13.4271 5.63486C13.8492 5.21261 14.0866 4.63973 14.0866 4.04268C14.0866 3.4455 13.8494 2.87278 13.4271 2.45051C13.0049 2.02824 12.4321 1.79102 11.835 1.79102Z"></path>
                                            </svg>
                                        </button>
                                        <button className="hover:text-primary">
                                            <svg width="19" height="18" viewBox="0 0 19 18" className="fill-current">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 2.25C5.77208 2.25 2.75 5.27208 2.75 9C2.75 12.7279 5.77208 15.75 9.5 15.75C13.2279 15.75 16.25 12.7279 16.25 9C16.25 5.27208 13.2279 2.25 9.5 2.25ZM1.25 9C1.25 4.44365 4.94365 0.75 9.5 0.75C14.0564 0.75 17.75 4.44365 17.75 9C17.75 13.5564 14.0564 17.25 9.5 17.25C4.94365 17.25 1.25 13.5564 1.25 9Z"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.09769 10.0469C6.84856 9.71825 6.38037 9.6523 6.05004 9.90004C5.71867 10.1486 5.65152 10.6187 5.90004 10.95L6.50004 10.5C5.90004 10.95 5.90022 10.9503 5.90041 10.9505L5.9008 10.9511L5.90167 10.9522L5.90372 10.9549L5.90913 10.962L5.9251 10.9824C5.93803 10.9988 5.95555 11.0204 5.97757 11.0467C6.02155 11.0991 6.08379 11.17 6.16363 11.2533C6.32269 11.4193 6.55512 11.6379 6.85579 11.8566C7.45424 12.2918 8.3559 12.75 9.50004 12.75C10.6442 12.75 11.5458 12.2918 12.1443 11.8566C12.445 11.6379 12.6774 11.4193 12.8365 11.2533C12.9163 11.17 12.9785 11.0991 13.0225 11.0467C13.0445 11.0204 13.0621 10.9988 13.075 10.9824L13.091 10.962L13.0964 10.9549L13.0984 10.9522L13.0993 10.9511L13.0997 10.9505C13.0999 10.9503 13.1 10.95 12.5 10.5L13.1 10.95C13.3486 10.6187 13.2814 10.1486 12.95 9.90004C12.6197 9.6523 12.1515 9.71825 11.9024 10.0469L11.8989 10.0514C11.8945 10.057 11.886 10.0676 11.8736 10.0823C11.8487 10.112 11.8084 10.1582 11.7535 10.2155C11.643 10.3308 11.477 10.4872 11.262 10.6435C10.8292 10.9583 10.2309 11.25 9.50004 11.25C8.76919 11.25 8.17084 10.9583 7.73805 10.6435C7.52309 10.4872 7.35709 10.3308 7.24661 10.2155C7.19168 10.1582 7.15139 10.112 7.12653 10.0823C7.11412 10.0676 7.10563 10.057 7.10117 10.0514L7.09769 10.0469Z"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 6.75C6.5 6.33579 6.83579 6 7.25 6H7.2575C7.67171 6 8.0075 6.33579 8.0075 6.75C8.0075 7.16421 7.67171 7.5 7.2575 7.5H7.25C6.83579 7.5 6.5 7.16421 6.5 6.75Z"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 6.75C11 6.33579 11.3358 6 11.75 6H11.7575C12.1717 6 12.5075 6.33579 12.5075 6.75C12.5075 7.16421 12.1717 7.5 11.7575 7.5H11.75C11.3358 7.5 11 7.16421 11 6.75Z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <button className="flex h-13 w-full max-w-13 items-center justify-center rounded-md bg-primary text-white hover:bg-opacity-90">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 2L11 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>    
            </div>       
        </DefaultLayout>
    );
};

export default Messages;