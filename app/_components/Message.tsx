interface MessagePropTypes {
  message: {
    id: string;
    conversation_id: string;
    created_at: string;
    content: string;
    sender_id: string;
  };
  userId: string;
}

const Message: React.FC<MessagePropTypes> = function ({ message, userId }) {
  const date = new Date(message.created_at);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const time = `${hours}:${minutes}`;
  return (
    <div
      className={`flex ${
        message.sender_id === userId ? "justify-start" : "justify-end"
      } items-center my-3`}
    >
      <div
        className={`flex ${
          message.sender_id === userId
            ? "justify-start bg-blue-950"
            : "justify-end bg-slate-700"
        } items-center gap-3 px-3 py-2 bg-slate-800 w-fit text-white rounded-3xl`}
      >
        <span className="text-slate-400 text-xs">{time}</span>
        {message.content}
      </div>
    </div>
  );
};
export default Message;
