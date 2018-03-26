<template>
    <el-container>
        <my-header></my-header>
        <el-container class="body-container">
            <my-aside></my-aside>
            <el-container class="right-container tran300" :class="{'on':isA}">

            </el-container>
        </el-container>
    </el-container>
</template>

<script>

    import axios from 'axios';

    export default {
        name: 'category',
        data() {
            return {
                isA: '',
                list: []  // 存数据的变量
            }
        },
        created: function () {
            this.eventBus.$on('menuToggle', (status) => {
                console.log(status, 'On aside component');
                this.isA = status;
            });
        },
        mounted() {  // 渲染后的回调
            this.getData();
        },
        methods: {
            getData() {
                axios.get('https://www.kinder.vip/api/Index/getList', {})
                    .then(response => {
                        this.list = response.data.info;
                        console.log(response.data.id);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },
            menuToggle() {
                this.isA = !this.isA;
                this.eventBus.$emit('menuToggle', this.isA);
            }
        }
    }
</script>

<style scoped>

</style>
