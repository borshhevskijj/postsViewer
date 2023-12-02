import { createAsyncThunk } from "@reduxjs/toolkit"
import { Ipost } from "../../types/post"
import {postsSlice} from "./postsSlice"
import { RootState } from "../../../app/store/store"

interface Params {
  [key: string]: any;
}
interface baseParams extends Params  {
  _limit:number,
  _start:number
}
const createUrl =(url:string, params?:Params  )=> {
    let baseUrl= `https://jsonplaceholder.typicode.com`
    baseUrl += url
    if (params) {
      const queryParams = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&');
      const urlWithParams = `${baseUrl}?${queryParams}`;
      return urlWithParams
    }
    return baseUrl
}

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async (params:baseParams,{rejectWithValue}) => {
      if (sessionStorage.getItem('posts')) {
        return {data:JSON.parse(sessionStorage.getItem('posts')!),totalCount:null}
      }
      try {
        const response = await fetch(createUrl('/posts', params))
        if (!response.ok) {
          throw new Error ('Server Error')
        }
        const totalCount = response.headers.get('X-Total-Count')
        const data:Ipost[] = await response.json()

        const increasedBodyChars = data.map((post) => {
          // для наглядности увеличиваю количество символов в data.body
          return ({
            ...post,
            body: post.body.repeat(8)
          })
        })
        return {data:increasedBodyChars,totalCount}

      } catch (error: any) {
        return rejectWithValue([error.message, error.response.data.message])
      }
    }
  )


export const fetchPostById = createAsyncThunk(
    "posts/fetchPostById",
    async (id:number,{rejectWithValue,getState}) => {
      const state = getState() as RootState
      const postInState = state.posts.posts.find(post => {
        return post.id === id
      })
      if (postInState) {
        return postInState
      }
      
      try {
        const response = await fetch(createUrl(`/posts/${id}`))
        if (!response.ok) {
          throw new Error ('Server Error')
        }
        const data:Ipost = await response.json()
        const increasedBodyChars = {...data,body:data.body.repeat(8)}
        return increasedBodyChars
      } catch (error: any) {
        return rejectWithValue([error.message, error.response.data.message])
      }
    }
  )
type PostPreview = Omit<Ipost, 'userId' | 'id'>;
export const createPost = createAsyncThunk<void,PostPreview>(
    "posts/createPost",
    async({body,title},{rejectWithValue,dispatch,getState}) => {
      try {
        const response = await fetch(createUrl(`/posts`),{
          method: 'POST',
          body: JSON.stringify({
            title,
            body,
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        if (!response.ok) {
          throw new Error ('Server Error')
        }
        const data = await response.json()
        dispatch(postsSlice.actions.addPost(data))
      } catch (error: any) {
        return rejectWithValue([error.message, error.response.data.message])
      }
    }
  )
  
  type PostUpdate = Omit<Ipost, 'userId'>;
  export const updatePost = createAsyncThunk<void,PostUpdate>(
    "posts/updatePost",
    async({body,title,id},{rejectWithValue,dispatch}) => {
      try {
        const response = await fetch(createUrl(`/posts/${id}`),{
          method: 'PATCH',
          body: JSON.stringify({
            body,
            title,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        if (!response.ok) {
          throw new Error ('Server Error')
        }
        const data = await response.json()

        dispatch(postsSlice.actions.updatePost(data))
      } catch (error: any) {
        console.warn(error.message);
        
        return rejectWithValue([error.message, error.response.data.message])
      }
    }
  )


export const deletePostById = createAsyncThunk(
    "posts/deletePostById",
    async (id:number,{rejectWithValue,dispatch}) => {
      try {
        const response = await fetch(createUrl(`/posts/${id}`),{
          method: 'DELETE',
        })
        if(!response.ok) {
          throw Error('Ошибка удаления поста')  
        }
        dispatch(postsSlice.actions.deletePost(id))

      } catch (error: any) {
        return rejectWithValue([error.message, error.response.data.message])
      }
    }
  )

