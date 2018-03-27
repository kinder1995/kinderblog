<template>
    <el-container>
        <my-header>12</my-header>
        <el-container class="body-container">
            <my-aside></my-aside>
            <el-container class="right-container tran300" :class="{'on':isA}">
                <el-main>
                    <el-row>
                        <el-col :span="24">
                            <template v-for="item in list">
                                <el-card class="box-card">
                                    <div slot="header" class="clearfix">
                                        <router-link :to="{name:'Detail',params:{detail_id:item.id}}">{{item.title}}
                                        </router-link>
                                    </div>
                                    <div class="describe" v-html="item.abstract"></div>
                                    <div class="bottom clearfix">
                                        <div class="fl left">
                                            <div class="fl">{{item.create_time}}</div>
                                            <div class="fl" v-for="labels in item.label">{{labels.label}}</div>
                                        </div>
                                        <div class="fr">
                                            <router-link class="el-button el-button--primary"
                                                         :to="{name:'Detail',params:{detail_id:item.id}}">阅读全文
                                            </router-link>
                                        </div>
                                    </div>
                                </el-card>
                            </template>
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
                this.id = this.$route.params.id;
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

<style>
    @import '../assets/css/public.css';
</style>
