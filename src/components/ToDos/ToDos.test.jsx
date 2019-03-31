import { fireEvent, render } from 'react-testing-library'

import React from 'react'
import ToDos from './ToDos'

const emptyListMessage = '<p>Start adding some todos!</p>'
const { getByTestId } = render(<ToDos />)
const todoInput = getByTestId('todo-input')
const todoList = getByTestId('todo-list')
const todoAddBtn = getByTestId('todo-add-btn')

afterEach(() => {
    todoInput.value = ''
    todoList.innerHTML = emptyListMessage
})

describe('<ToDos />', () => {

    // it('adds a todo if the input is NOT empty and Add button is clicked', () => {
    //     expect(todoInput.value).toBe('')
    //     fireEvent.change(todoInput, { target: { value: 'Hello there!' } })
    //     expect(todoInput.value).toBe('Hello there!')
    //     fireEvent.click(todoAddBtn)
    //     const todoItem = getByTestId('todo-item')
    //     expect(todoList.innerHTML).toBe(todoItem.outerHTML)
    // })
    it('adds a todo if the input is NOT empty and Enter is clicked', () => {
        expect(todoInput.value).toBe('')
        fireEvent.change(todoInput, { target: { value: 'Hello there!' } })
        expect(todoInput.value).toBe('Hello there!')
        fireEvent.keyPress(todoInput, { key: 'Enter', code: 13, charCode: 13 })
        const todoItem = getByTestId('todo-item')
        expect(todoList.innerHTML).toBe(todoItem.outerHTML)
    })
    // it('deletes the corresponding todo item when delete button is clicked', () => {
    //     expect(todoInput.value).toBe('')
    //     fireEvent.change(todoInput, { target: { value: 'Hello there!' } })
    //     expect(todoInput.value).toBe('Hello there!')
    //     fireEvent.click(todoAddBtn)
    //     const todoItem = getByTestId('todo-item')
    //     expect(todoList.innerHTML).toBe(todoItem.outerHTML)
    //     const todoDeleteBtn = getByTestId('todo-delete-btn')
    //     fireEvent.click(todoDeleteBtn)
    //     expect(todoList.innerHTML).toBe(emptyListMessage)
    // })
    it('displays message when todos list is empty', () => {
        expect(todoList.innerHTML).toBe(emptyListMessage)
    })
    it('updates the todo input when typing', () => {
        expect(todoInput.value).toBe('')
        fireEvent.change(todoInput, { target: { value: 'Hello there!' } })
        expect(todoInput.value).toBe('Hello there!')
    })
    it('does NOT add a todo if the input is empty', () => {
        fireEvent.change(todoInput, { target: { value: '' } })
        expect(todoInput.value).toBe('')
        fireEvent.click(todoAddBtn)
        expect(todoList.innerHTML).toBe(emptyListMessage)
    })
})