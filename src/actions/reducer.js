const initialState = {
    list: [
        {
        id: 1,
        name: 'Edward',
        email: "johnny@take.com",
        phone: "512-556-8854"
        },
        {
        id: 2,
        name: 'sam',
        email: "jy@take.com",
        phone: "615-739-8673"
        },
        {
        id: 3,
        name: 'Hose',
        email: "hoss@take.com",
        phone: '303-311-5456'
        },
        {
        id: 4,
        name: 'Donald',
        email: "imhere@now.com",
        phone: "525-739-8888"
        },
    ],
    name: '',
    email: '',
    phone: '',
    redirectTo: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_LIST':
        const listItem = state.list.filter(item => item.id === parseInt(action.id, 10));
        return{
            ...state,
            name: listItem[0] ? listItem[0].name : '',
            email: listItem[0] ? listItem[0].email : '',
            phone: listItem[0] ? listItem[0].phone : ''
        
        }
        case 'CAPTURE_INPUT':
  
        return {
            ...state,
            [action.payload.name]: action.payload.value
        }
        case 'UPDATE':
            const updatedList = state.list.map(item => {
                if (item.id === parseInt(action.id, 10)) {
                    item.name = state.name;
                    item.email = state.email;
                    item.phone = state.phone;
                }
                return item;
            });
            return {
                ...state,
                list: updatedList
        }
        case 'DELETE':
        const newList = state.list.filter(item => item.id !== parseInt(action.id, 10));
            return {
                ...state,
                list: newList,
                name: newList[0] ? newList[0].name : '',
                email: newList[0] ? newList[0].email : '',
                phone: newList[0] ? newList[0].phone : '',
                redirectTo: newList.length > 0 ? `/${newList[0].id}` : '/1'
        }
        case 'ADD':
            let id;
            state.list.length > 0 ? id = state.list[state.list.length - 1].id + 1 : id = 1;
            const newToDo = {id: id, name: state.name, email: state.email, phone: state.phone}
            return {
                ...state,
                list: state.list.concat(newToDo)
            }
        default:
        return state;

    }


}
export default reducer;