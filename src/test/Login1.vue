<template>
    <section class="sec-login-ctnr">
        <h1>Half Road</h1>
        <form action="">
            <section class="sec-login">
                <div class="login-inp">
                    <input type="text" v-model="id" id="id" name="id" autocomplete="off" required>
                    <label :class="lblIdClass" for="id">USER ID</label>
                </div>
                <div class="login-inp">
                    <input type="text" v-model="pw" id="pw" name="pw" autocomplete="off" required>
                    <label :class="lblPwClass" for="pw">USER PASSWORD</label>
                </div>
                <div class="login-btn">
                    <button @click="login">LOGIN</button>
                </div>
            </section>
        </form>
        <div class="caption">
            <a href="">Forgot Password?</a>
        </div>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                id:"",
                pw:"",
                lblIdClass: "",
                lblPwClass: ""
            }
        },
        methods:{
            login(){
                if(this.id == "" || this.pw == ""){
                    
                    if(this.id == ""){
                        this.lblIdClass = "warning";
                    }else if(this.pw == ""){
                        this.lblPwClass = "warning";
                    }

                    setTimeout(() => {
                        this.lblIdClass = "";
                    }, 1500);   
                }
            }
        }

    }
</script>
<style>
    @import url("@/css/style1.css");
    ul {
        color:rgb(153, 153, 153);
    }
</style>