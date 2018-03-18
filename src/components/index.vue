<template>
    <el-container>
        <el-header>头部</el-header>
        <el-container>
            <el-aside>左边</el-aside>
            <el-container>
                <el-main>
                    <el-row>
                        <el-col :span="24">
                            <template v-for="item in list">
                                <el-card class="box-card">
                                    <div slot="header" class="clearfix">
                                        <router-link :to="{name:'Detail',params:{detail_id:item.id}}">{{item.title}}</router-link>
                                    </div>
                                    <div class="describe" v-html="item.abstract"></div>
                                    <div class="bottom clearfix">
                                        <div class="fl">
                                            <div class="fl">{{item.create_time}}</div>
                                            <div class="fl" v-for="labels in item.label">{{labels.label}}</div>
                                        </div>
                                        <div class="fr"><router-link class="el-button el-button--primary" :to="{name:'Detail',params:{detail_id:item.id}}">阅读全文</router-link></div>
                                    </div>
                                </el-card>
                            </template>
                        </el-col>
                    </el-row>
                </el-main>
                <el-footer>尾部</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    import axios from 'axios';
    import Vue from 'vue';

    export default {
        name: 'index',
        data () {
            return {
                list:[]  // 存数据的变量
            }
        },
        mounted() {  // 渲染后的回调
            this.getData();
        },
        methods:{
            getData(){
                axios.get('https://www.kinder.vip/api/Index/getList')
                    .then(response => {
                        this.list = response.data.info;
                        console.log(response.data.id);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        }
    }
</script>
<style>
    @import '../assets/css/public.css';
    .box-card{margin-bottom:30px;}
    .box-card .el-card__header{font-size:18px;}
    .box-card .bottom{margin-top:15px;}
</style>
