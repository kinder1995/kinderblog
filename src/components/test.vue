<template>
    <div>
        <div>
            <pre v-bind:class="classObject">{{ username }}</pre>
        </div>
        <div>
            <button @click="setUsername">Set Username</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "test",
        data: function () {
            return {
                user: {
                    username: 'Default Name'
                },
                isActive:false,
                'text':true
            };
        },
        computed: {
            username () {
                return this.user.username
            },
            classObject:function(){
                return{
                    active:this.isActive && !this.error,
                    'text':this.error && this.error.type === 'fatal'
                }
            }
        },
        methods: {
            setUsername() {
                this.user.username = this.randomString();
            },
            randomString (length = 5) {
                let text = "";
                let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for (let i = 0; i < length; i++) {
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                }

                return text;
            }
        }
    }
</script>
<style scoped>
    @import '../assets/css/animate.css';
    @import '../assets/css/public.css';
    @import '../assets/css/kinder.css';
</style>
