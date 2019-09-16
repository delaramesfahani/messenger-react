const Init = {
  firstName: '',
  lastName: '',
  messageList: [],
  conversationList: [],
  messages: [],
  id: ''
}

const conversation = (state = Init, action) => {
  switch (action.type) {
    case 'SAVE_SELECTED_USER_NAME':
      return {
        ...state,
        firstName: action.name,
        lastName: action.family,
        image: action.image
      }

    case 'SEND_NEW_MESSAGE':
      return {
        ...state,
        messageList: [
          ...state.messageList,
          {
            text: action.newMessage,
            date: new Date().getHours() + ':' + new Date().getMinutes()
          }
        ]
      }
    case 'CREATE_NEW_CONVERSATION':
      return {
        ...state,
        conversationList: [
          {
            firstName: action.payload,
            lastName: '',
            latestMessage: '',
            unseenMessage: '',
            profile: 'http://....'
          },
          ...state.conversationList
        ]
      }
    case 'CONVERSATION_SHOW':
      return {
        ...state,
        conversationList: action.conversations

      }
    // case 'OPEN_CONVERSATION':
    //   return {
    //     ...state,
    //     id: action.id
    //   }
    case 'GET_CONVERSATION_ID' :
      return {
        ...state,
        id: action.id
      }
    case 'GET_MESSAGE_LIST' :
      return {
        ...state,
        messages: [action.messages]
      }

    default:
      return state
  }
}
export default conversation
