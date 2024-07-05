'use client'

import Image from "next/image";
import IconMoreOptions from '../../../public/images/icon/icon-more-options.svg';

const MoreOptions: React.FC = () => {
    return (
        <div className="absolute right-4 top-4">
            <div className="relative flex">
                <button className="text-[#98A6AD] hover:text-body">
                    <Image className='filter invert-0.5 hover:invert-0.6' src={IconMoreOptions} alt='' width={18} height={19}></Image>
                </button>
            </div>
        </div>
    );
};

export default MoreOptions;