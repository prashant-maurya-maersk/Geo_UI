export const addsearchtab = ()=>({
    type: 'ADD_NEW_TAB',
});

export const addresulttab = (data) =>({
    type: 'ADD_RESULT_TAB',
    payload:data,
});

export const deletetab =(data) =>({
    type: 'DELETE_TAB',
    payload:data,
});

export const adddatatab = () =>({
    type: 'ADD_DATA_TAB',
});

export const setvalue = (data) => ({
    type: 'SET_VALUE',
    payload: data,
});

export const addresult =(data) =>({
    type: 'ADD_RESULT',
    payload: data,
});

export const deletedatatab =(data) => ({
    type: 'DELETE_DATA',
    payload: data,
});

export const setinsidetab = (data) =>({
    type: 'UPDATE_INSIDE_TAB',
    payload:data,
});

export const setres =(data) =>({
    type: 'SET_RES',
    payload: data,
});

export const setid =(data) => ({
    type: 'SET_ID',
    payload: data,
});

export const updateforms =(data) => ({
    type: 'UPDATE_DATA',
    payload: data,
});



