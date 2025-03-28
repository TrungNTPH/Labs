import { configureStore } from "@reduxjs/toolkit";
import reducer, {counterSlice} from "./counterSlice"

export const store = configureStore({
    reducer: {
        counter: reducer
    }
}
)