<template>
    <div class="kinder-body">
        <div class="kinderright" style="display:none;">
            <div class="list-content">
                <template v-for="item in list">
                    <div class="list wow fadeInUp animated">
                        <h1 :title="item.title">
                            <router-link :to="{name:'Detail',params:{detail_id:item.id}}">{{item.title}}</router-link>
                        </h1>
                        <div class="describe" v-html="item.abstract"></div>
                        <div class="list-b">
                            <div class="data">{{item.create_time}}{{item.create_time}}</div>
                            <div class="tag" v-for="labels in item.label">{{labels.label}}</div>
                            <router-link :to="{name:'Detail',params:{detail_id:item.id}}">阅读全文+</router-link>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <el-container>
            <el-header>12</el-header>
        </el-container>
    </div>
</template>

<script>
    import axios from 'axios';  // 加载 axios 组件
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
            getData() {
                axios.get('https://www.kinder.vip/api/Index/getList')
                    .then(response => {  // then是成功后的回调
                        this.list = response.data.info;  // 成功后把数据复制给变量，response.data是返回的内容，info是定义的属性名
                        console.log(response.data.id)
                    })
                    .catch(error => {  // catch是失败的回调
                        console.log(error);
                    });
            }
        }
    }

</script>
<style>
    @import '../assets/css/animate.css';
    @import '../assets/css/public.css';
    @import '../assets/css/kinder.css';
</style>
