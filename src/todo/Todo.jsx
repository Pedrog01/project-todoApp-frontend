import React,  {Component} from "react";
import PageHeader from "../templete/pageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default class Todo extends Component {

    constructor(props){
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd(){
        console.log('add')
    }

    render(){
        return(
            <div>
               <PageHeader name="Tarefas" small='Cadastro'/>
               <TodoForm handleAdd={this.handleAdd}/>
               <TodoList/>
            </div>
        )
    }
}