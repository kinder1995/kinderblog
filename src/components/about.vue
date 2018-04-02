<template>
    <el-container>
        <my-header></my-header>
        <el-container class="body-container">
            <my-aside></my-aside>
            <el-container class="right-container tran300" :class="{'on':isA }">
                <el-main>
                    <el-row>
                        <el-col :span="24">
                            <el-card class="box-card" style="font-size:16px;line-height:24px;">
                                这是本人自己在学习 Vue.js 框架的时候，第一个拿来练手的项目，主要有用到 Element-UI，Axios，Vue-Router 。<br/>
                                虽然项目比较简单,不过目前已经掌握了一些知识与基础。目前还在不断学习的路上。
                            </el-card>
                        </el-col>
                        <el-col :span="24">
                            <my-footer></my-footer>
                        </el-col>
                    </el-row>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "about",
        data() {
            return {
                isA: ''
            }
        },
        created() {
            this.eventBus.$on("menuToggle", (status) => {
                this.isA = status;
            })
        },
        methods: {
            menuToggle() {
                this.isA = !this.isA;
                this.eventBus.$emit("menuToggle", this.isA)
            }
        }
    }
</script>

<style>
    @import '../assets/css/animate.min.css';
    @import '../assets/css/public.css';
</style>
