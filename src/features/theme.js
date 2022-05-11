import {createSlice} from '@reduxjs/toolkit';

const notId=''
export const colorSlice = createSlice({
    name:'color',
    initialState:{value:notId},
    reducers:{
        changeId: (state,action)=>{
            state.value=action.payload
        }
    }
})
export const{changeId}=colorSlice.actions

export default colorSlice.reducer