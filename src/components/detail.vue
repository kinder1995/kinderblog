<template>
    <el-container>
        <my-header></my-header>
        <el-container class="body-container">
            <my-aside></my-aside>
            <el-container class="right-container tran300" :class="{'on':isA}">
                <el-main>
                    <el-row>
                        <el-col :span="24">
                            <el-card class="box-card">
                                <div slot="header" class="clearfix" :title="article.title">{{article.title}}</div>
                                <div class="describe" v-html="article.content"></div>
                                <div class="bottom clearfix">
                                    <div class="fl left">
                                        <div class="fl">{{article.create_time}}</div>
                                        <div class="fl">{{ firstLabelName }}</div>
                                    </div>
                                </div>
                            </el-card>
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
        name: 'detail',
        data() {
            return {
                isA: '',
                id: null,
                article: {}
            }
        },
        watch: { // 观察数据，在id变化时调用闭包
            id: function (value) {
                if (value) {
                    this.getArticle();
                }
            }
        },
        computed: {
            labels() {
                let labels = this.article.label;
                return labels ? labels : [];
            },
            firstLabelName() {
                let label = this.labels.length > 0 ? this.labels[0] : {};
                return label.name;
            }
        },
        created() { // 组件创建完成的回调，此时组件还没渲染 顺序是 beforeCreate > created > beforeMounte > mounted
            this.id = this.$route.params.detail_id; // 在组件创建完成之后，把url参数中的id复制给id变量
            this.eventBus.$on('menuToggle', (status) => {
                this.id = this.$route.params.id;
                this.isA = status;
            });
        },
        methods: {
            getArticle() {
                axios.get('https://www.kinder.vip/api/Index/getNews', {
                    params: {
                        id: this.id
                    }
                })
                .then(response => {
                    this.article = response.data.info;
                })
                .catch(error => {
                    console.log(error);
                });
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
