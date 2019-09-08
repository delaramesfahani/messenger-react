const Init = {
  firstName: '',
  lastName: '',
  messageList: [],
  conversationList: [],
  conversation_id: ''
}

const conversation = (state = Init, action) => {
  switch (action.type) {
    case 'SAVE_SELECTED_USER_NAME':
      return {
        ...state,
        firstName: action.name,
        lastName: action.family
      }

    case 'SEND_NEW_MESSAGE':
      return {
        ...state,
        messageList: [
          ...state.messageList,
          {
            text: action.payload,
            date: new Date().getHours(),
            sender: 1,
            receiver: 3
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
        conversationList: action.payload

      }
    case 'OPEN_CONVERSATION':
      return {
        ...state,
        conversation_id: action.payload
      }

    default:
      return state
  }
}
export default conversation
