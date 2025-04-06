import Image from "next/image";
import { auth } from "../_lib/auth";
import { getConversationUser, getMessages } from "../_lib/data-services";

import { HiCheckCircle } from "react-icons/hi";

type ConversationProps = {
  conversationInfo: {
    id: string;
    user1_id: string;
    user2_id: string;
    created_at: string;
  };
};

const Conversation: React.FC<ConversationProps> = async function ({
  conversationInfo,
}) {
  const { id, user1_id, user2_id } = conversationInfo;

  const session = await auth();

  const messages = await getMessages(id);

  if (!session?.user?.image) return;

  const otherUserId = session.user.id === user1_id ? user2_id : user1_id;

  const lastMesg = messages[messages.length - 1];

  const otherUser = await getConversationUser(otherUserId);

  return (
    <div className="p-3 w-full border-y cursor-pointer border-gray-400 border-solid flex items-center gap-4">
      <Image
        src={otherUser.image}
        className="rounded-full"
        width="50"
        height="50"
        alt="user profile"
      />
      <div className="h-full flex flex-col items-start justify-between flex-grow">
        <h3 className="text-xl text-white whitespace-normal w-12">
          {otherUser.name}
        </h3>
        <p className="text-gray-400 text-sm">{lastMesg.content}</p>
      </div>
      {lastMesg.sender_id === session.user.id ? (
        <div>
          <HiCheckCircle
            style={{
              color: "green",
            }}
          />
        </div>
      ) : null}
    </div>
  );
};
export default Conversation;
