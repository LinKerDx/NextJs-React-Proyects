import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
    id: string;
    name: string;
    email: string;
    github: string;
    status: "Live" | "Inactive";
}

export interface UserWithId extends User {
    id: string;
}

const initialState: UserWithId[] = [
    {
        id: '1',
        name: 'John Doe',
        email: 'johndoe@example.com',
        status: 'Live',
        github: 'johndoe',
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        status: 'Inactive',
        github: 'janesmith',
    },
    {
        id: '3',
        name: 'Alice Johnson',
        email: 'alicejohnson@example.com',
        status: 'Inactive',
        github: 'alicejohnson',
    },
    {
        id: '4',
        name: 'Bob Brown',
        email: 'bobbrown@example.com',
        status: 'Live',
        github: 'bobbrown',
    },
    {
        id: '5',
        name: 'Charlie Davis',
        email: 'charliedavis@example.com',
        status: 'Live',
        github: 'linkerdx',
    },
    {
        id: '6',
        name: 'Emily White',
        email: 'emilywhite@example.com',
        status: 'Live',
        github: 'midudev',
    },
]

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer