<template>
    <div id="app">
        <transition
            name="custom"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            :duration="{enter:100,leave:300}">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style>
    #app{width:100%;height:100%;}
</style>
