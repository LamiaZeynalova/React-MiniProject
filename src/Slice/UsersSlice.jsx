import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const apiUrl = 'http://localhost:3002/users';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        throw error;
    }
});

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        items: [],
        loading: false
    },
    reducers: {
        addUser: (state, action) => {
            state.items.push(action.payload);
        },
        removeUser: (state, action) => {
            state.items = state.items.filter(user => user.id !== action.payload);
        },
        updateUser: (state, action) => {
            const index = state.items.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
        });
    }
});

export const { addUser, removeUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
