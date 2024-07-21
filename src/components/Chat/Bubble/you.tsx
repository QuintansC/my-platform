
const YouMessage = (props: {whois: string, message: string, time: string}) => {
  return (
     <div className="max-w-125">
        <p className="ml-2.5 text-sm font-medium">{props.whois}</p>
        <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
            <p>{props.message}</p>
        </div>
        <p className="text-xs">{props.time}</p>
    </div>
  );
};

export default YouMessage;
