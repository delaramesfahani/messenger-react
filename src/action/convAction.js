
export const getUserName = (firstName, lastName, avatar) => ({
  type: 'SAVE_SELECTED_USER_NAME',
  name: firstName,
  family: lastName,
  avatar: avatar 
})

export const sendNewMessage = (newMessage, date) => ({
  type: 'SEND_NEW_MESSAGE',
  newMessage: newMessage,
  date: date
})

export const createNewConversation = (name) => ({
  type: 'CREATE_NEW_CONVERSATION',
  payload: name
})

export const conversationShow = (conversations) => ({
  type: 'CONVERSATION_SHOW',
  conversations: conversations
})

export const creatConversationPage = (name) => ({
  type: 'CREATE_CONVERSATION',
  payload: name
})
export const openConversation = (id) => ({
  type: 'OPEN_CONVERSATION',
  payload: id
})
export const getConversationId = (id) => ({
  type: 'GET_CONVERSATION_ID',
  id: id
})
export const getMessageList = (messages) => ({
  type: 'GET_MESSAGE_LIST',
  messages: messages
})
