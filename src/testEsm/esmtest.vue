<template>
    <p>안녕하세요</p>
    <p>안녕하세요</p>
    <p>안녕하세요</p>
</template>
<script>
    import {printA, printB, printC} from "./b.js";

    printA();
    printB();
    printC();

    import aJs from "./a.js";

    aJs.print1();
    aJs.print2();
</script>
<style>
</style>