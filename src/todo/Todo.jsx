import React,  {Component} from "react";
import axios from "axios";

import PageHeader from "../templete/pageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {

    constructor(props){
        super(props)
        this.state = { description:'', list: []}

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()
    }

    refresh() {

        axios.get(`${URL}?sort=-createAt`)
        .then(resp => this.setState({...this.state, description: '', list: resp.data}))

    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL,{ description }).then(resp => this.refresh())
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }
    
    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh())
    }

    render(){
        return(
            <div>
               <PageHeader name="Tarefas" small='Cadastro'/>
               <TodoForm  description={this.state.description}
               handleChange={this.handleChange}
               handleAdd={this.handleAdd}/>
               <TodoList list={this.state.list} handleRemove={this.handleRemove}/>
            </div>
        )
    }
} 