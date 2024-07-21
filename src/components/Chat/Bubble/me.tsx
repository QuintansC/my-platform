
const MeMessage = (props: {message: string, time: string}) => {
  return (
     <div className="ml-auto max-w-125">
        <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3">
            <p className="text-white">{props.message}</p>
        </div>
        <p className="text-right text-xs">{props.time}</p>
    </div>
  );
};

export default MeMessage;
