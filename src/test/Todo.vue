<template>
    <input type="text" v-model="sNewTodo" v-on:keyup.enter="addTodo">
    <button @click="addTodo">add</button>
    <button @click="deleteTodo">delete</button>
    <li v-for="oTodo in filterdTodos" :key="oTodo.id">
        <input type="checkbox" v-model="oTodo.done">
        <span :class="oTodo.done === true ? 'done' : ''">{{oTodo.text}}</span>
        <button @click="deleteTodo(oTodo)">X</button>
    </li>
    <input type="checkbox" v-model="isHideDone">{{isHideDone?"hide Done":"show all"}}
    <p>{{log}}</p>

</template>

<script>
    let id = 0;
    export default {
        data(){
            return {
                greet: '안녕',
                sNewTodo:'',
                todos:[{id:id++, text:"first", done:true}],
                isHideDone:''
            }
        },
        methods:{
            addTodo(){
                let oTodo = {id:id++, text:this.sNewTodo, done:false};
                this.todos.push(oTodo);
                this.sNewTodo = '';
            },
            deleteTodo(oTodo){
                let idx = this.todos.indexOf(oTodo);
                this.todos.splice(idx, 1);
            }
        },
        computed:{
            filterdTodos(){
                return this.isHideDone ? this.todos.filter((oTodo) => !oTodo.done) : this.todos;
            }
        }
    }
</script>

<style>
    .done {
        color:blue;
    }
</style>