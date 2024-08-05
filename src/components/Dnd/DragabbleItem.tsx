import { Draggable } from '@hello-pangea/dnd';
import React from 'react';
import MoreOptions from '../MoreOptions/MoreOptions';
import Checkbox from '../Checkbox/Checkbox';

interface DraggableItemProps  {
    qntCheck: number
    draggableId: string
    key: number,
}

const DraggableItem: React.FC<DraggableItemProps> = ({qntCheck, draggableId, key}) => {
    
    return (
        <Draggable
            draggableId={draggableId} index={key}>
            {(provided) => (
                <li 
                ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark">
                    <MoreOptions />
                    <div className="flex flex-col gap-2">
                        {
                            Array.from({ length: qntCheck }, (_, index) => (
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