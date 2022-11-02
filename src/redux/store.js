import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const myValueSlice = createSlice({
  name: 'myValue',
  initialState: 100,
  reducers: {
    increment(state, action) {
      return state + action.payload
    },
    decrement(state, action) {
      return state - action.payload
    },
  },
})

// слайсы выносить в отдельные файлы

export const { increment, decrement } = myValueSlice.actions

const myItemsSlice = createSlice({
  name: 'items',
  initialState: ['cat', 'dog', 'cow'],
  reducers: {
    add(state, action) {
      state.push(action.payload)
    },
    remove(state, action) {
      return state.filter((item) => item !== action.payload)
    },
  },
})

export const { add, remove } = myItemsSlice.actions

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    items: myItemsSlice.reducer,
  },
})

// import { configureStore } from '@reduxjs/toolkit'
// import { createAction, createReducer, } from '@reduxjs/toolkit'

// export const increment = createAction('myValue/increment')
// export const decrement = createAction('myValue/decrement')
// const myReducer = createReducer(10, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// })

// export const store = configureStore({
//   reducer: {
//     myValue: myReducer,
//   },
// })
