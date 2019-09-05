const Init = {
  firstName: '',
  lastName: '',
  messageList: [],
  conversationList: [
    {
      firstName: 'omid',
      lastName: '',
      latestMessage: 'Hi',
      unseenMessage: '1',
      profile: '#'
    },
    {
      firstName: 'Aida',
      lastName: 'Rezakhani',
      latestMessage: 'bye',
      unseenMessage: '3',
      profile: '#'
    },
    {
      firstName: 'Mom',
      lastName: '',
      latestMessage: 'see you',
      unseenMessage: '2',
      profile: '#'
    }
  ]
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
      console.log('kkkkkkkk', action,state)
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

    default:
      return state
  }
}
export default conversation
