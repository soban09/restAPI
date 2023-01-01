import { v4 as uuidv4 } from 'uuid';
let users = []

export const showUsers = (req, res) => {
    res.send(users);
}

export const addUsers = (req, res) => {
    users.push({...req.body, id:uuidv4()})
    res.send('user was added')
}

export const getUser = (req, res) => {
    const { id } = req.params
    const user = users.find((user) => user.id === id)
    res.send(user)
}

export const updateUser = (req, res) => {
    const { id } = req.params
    const {firstName, lastName, age} = req.body
    let user = users.find((user) => user.id === id)

    if(firstName) user.firstName = firstName
    if(lastName) user.lastName = lastName
    if(age) user.age = age

    res.send('user was updated')
}

export const deleteUser = (req, res) => {
    const { id } = req.params
    users = users.filter((user) => user.id !== id)
    res.send(`User with ${id} was deleted`)
}