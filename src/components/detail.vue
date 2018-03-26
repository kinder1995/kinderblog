<template>
    <div class="kinder-body">
        <div class="list-content">
            <div class="list wow fadeInUp animated">
                <h1 :title="article.title">{{article.title}}</h1>
                <div class="describe" v-html="article.content"></div>
                <div class="list-b">
                    <div class="data">{{article.create_time}}</div>
                    <div class="tag">{{article.label[0].label}}</div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'index',
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
        created() { // 组件创建完成的回调，此时组件还没渲染 顺序是 beforeCreate > created > beforeMounte > mounted
            this.id = this.$route.params.detail_id; // 在组件创建完成之后，把url参数中的id复制给id变量
        },
        methods: {
            toggle: function () {
                this.isA = !this.isA;
            },
            getArticle() {
                axios.get('https://www.kinder.vip/api/Index/getNews', {
                    params: {
                        id: this.id
                    }
                })
                    .then(response => {
                        this.article = response.data.info;
                        console.log(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }

</script>
<style>
    @import '../assets/css/public.css';
</style>
