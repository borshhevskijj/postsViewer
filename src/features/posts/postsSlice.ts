import {  createSlice, PayloadAction} from "@reduxjs/toolkit";
import { fetchPosts,fetchPostById} from "./postsThunk";
import { Ipost } from "../../shared/types/post";
import { RootState } from "../../app/store/store";



interface InitialState {
    // posts: Ipost[] | Ipost
    posts: Ipost[]
    post: Ipost | null
    status: null | 'loading' | 'fulfilled' | 'rejected'
    error: null | any
    lastId: number
}
const initialState:InitialState={
    posts: [] as Ipost[],
    post: null ,
    status: null,
    error: null,
    lastId: 0
}

//  при удалении из postPage не исчезает пост
export const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
      addPost(state, action) {
          const id = +sessionStorage.getItem('lastId')! || state.lastId
          state.lastId = id + 1
          state.posts.push({...action.payload,id:state.lastId});
          sessionStorage.setItem('lastId',String(state.lastId))
          sessionStorage.setItem('posts',JSON.stringify(state.posts))
        },
        
        deletePost(state, action) {
          state.posts = state.posts.filter(p => p.id !== action.payload) 
          if (action.payload === state.lastId) {
            state.lastId = state.posts.at(-1)?.id || state.lastId - 1
            sessionStorage.setItem('lastId',String(state.lastId))
          }
          else if(state.post?.id === action.payload){
            state.post = null
          }

          sessionStorage.setItem('posts',JSON.stringify(state.posts))
        },
        updatePost(state,action){
          const updatedPostIndex = state.posts.findIndex(post => post.id === action.payload.id) 
          const updatedArr= [...state.posts.slice(0,updatedPostIndex),action.payload,...state.posts.slice(updatedPostIndex+1)]
          state.posts = updatedArr  
          state.post = action.payload
          sessionStorage.setItem('posts',JSON.stringify(state.posts))
        }
    },
      extraReducers: (builder) => {
        builder
          .addCase(fetchPosts.pending, (state) => {
            state.status = 'loading';
            state.error = null  
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.posts = action.payload.data
            
            state.lastId = action.payload.data.at(-1)?.id || action.payload.totalCount // объяснить!
            sessionStorage.setItem('posts',JSON.stringify(action.payload.data))
            sessionStorage.setItem('lastId',String(state.lastId))
            state.error = null

          })
          .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error;
          })
          // fetchPostById cases
          .addCase(fetchPostById.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchPostById.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.post = action.payload;
          })
          .addCase(fetchPostById.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error;  
          })
      }       
})




export const selectPosts = (state: RootState) => state.posts


export default postsSlice.reducer
