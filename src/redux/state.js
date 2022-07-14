

let state = {
    feedback: {
        dialogsData: [
            { id: '1', message: 'message1' },
            { id: '2', message: 'message2' },
            { id: '3', message: 'message3' },
            { id: '4', message: 'message4' }
        ],
        usersData: [
            { id: '1', name: 'User1' },
            { id: '2', name: 'User2' },
            { id: '3', name: 'User3' },
            { id: '4', name: 'User4' }
        ]
    }
};

export let newMessage = (newMessage) => {
  
    let newMes = { id: '5', message: newMessage }
    state.feedback.dialogsData.push(newMes);
   
  
}


export default state;