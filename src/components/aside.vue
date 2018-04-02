<template>
    <el-aside width="150px" class="tran300" :class="{'on':isA}">
        <el-row class="tac">
            <el-col :span="24" :xs="12">
                <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo">
                    <el-menu-item index="1">
                        <span slot="title"><router-link :to="{name:'index'}">首页</router-link></span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <span slot="title"><router-link :to="{name:'Category',params:{id:4}}">工作日记</router-link></span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <span slot="title"><router-link :to="{name:'Category',params:{id:3}}">前端技术</router-link></span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <span slot="title"><router-link :to="{name:'About'}">关于KINDER</router-link></span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </el-aside>
</template>
<script>
    export default {
        name: 'index',
        data() {
            return {
                isA: '',
            }
        },
        created: function () {
            this.eventBus.$on('menuToggle', (status) => {
                this.isA = status;
            });
        },
        methods: {
            menuToggle() {
                this.isA = !this.isA;
                this.eventBus.$emit('menuToggle', this.isA);
            }
        }
    }
</script>
