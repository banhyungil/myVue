<template>
    <input type="text" v-model="sNewTodo" @keyup.enter="addTodo">
    <button @click="addTodo">add Todo</button>
    <li v-for="oTodo in filterdTodos" :key="oTodo.id">
        <input type="checkbox" v-model="oTodo.done">
        <span :class="oTodo.done?'done':''">{{oTodo.text}}</span>
        <button @click="deleteTodo(oTodo)">X</button>
    </li>
    <input type="checkbox" v-model="isHideDone">
    <span>{{isHideDone?"Hide Done":"Show All"}}</span>
</template>

<script>
    let id = 0;
    export default{
        data(){
            return {
                todos:[{id:id++, text:'learn javascript', done:false}],
                sNewTodo:'',
                isHideDone:false
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
  color: blue;
}
</style>
