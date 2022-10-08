export interface User {
    id: number
    username: string
}

export interface Db {
    users: User[]
}

export const db: Db = {
    users: [{ id: 1, username: '...' }],
}