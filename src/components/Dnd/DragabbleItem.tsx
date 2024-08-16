import { Draggable } from '@hello-pangea/dnd';
import React from 'react';
import MoreOptions from '../MoreOptions/MoreOptions';
import Checkbox from '../Checkbox/Checkbox';

interface DraggableItemProps  {
    qntCheck: number
    draggableId: string
    index: any,
}

const DraggableItem: React.FC<DraggableItemProps> = (e) => {
    return (
        <Draggable
            draggableId={e.draggableId} 
            index={e.index}
        >
            {(provided) => (
                <li 
                ref={provided.innerRef} 
                {...provided.draggableProps} 
                {...provided.dragHandleProps}
                className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark">
                    <MoreOptions />
                    <div className="flex flex-col gap-2">
                        {
                            Array.from({ length: e.qntCheck }, (_, index) => (
                                <Checkbox key={index} id={`${Math.random()}-checkbox-${index}`} label='Here is task one'/>
                            ))
                        }
                    </div>
                </li>
            )}
        </Draggable>
       
    );
};

export default DraggableItem;