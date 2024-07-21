import Image from 'next/image';
import React, { useState } from 'react';
import IconCorrect from '../../../public/images/icon/icon-correct.svg';

interface CheckboxProps {
    label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
    return (
        <label htmlFor="taskCheckbox1" className="cursor-pointer">
            <div className="relative flex items-center pt-0.5">
                <input id="taskCheckbox1" className="taskCheckbox sr-only" type="checkbox" />
                <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark dark:bg-boxdark-2">
                    <span className="text-white opacity-0">
                        <Image
                            src={IconCorrect}
                            alt="Logo"
                            width={10}
                            height={10} />
                    </span>
                </div>
                <p>{label}</p>
            </div>
        </label>
    );
};

export default Checkbox;