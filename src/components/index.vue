<template>
    <div class="kinder-body">
        <div class="kinderleft">
            <div class="tx"><div><img src="../assets/images/tx.png" width="130" height="130" alt="kinder"></div><div class="name" title="kinder">Kinder</div></div>
            <div class="search">
                <input type="text" placeholder="Your Keywords">
                <input type="submit" value="">
            </div>
            <div class="nav">
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">BLOG</a></li>
                    <li><a href="">WORKS</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">GUSTBOOK</a></li>
                    <li id="nav-current" class="nav-current"></li>
                </ul>
            </div>
        </div>
        <div class="kinderleftbar">
            <div class="kinder-menu kinder-collapse-r" v-bind:class="{'is-active' : isA, '' : !isA}" @click="toggle">
                <div class="kinder-box">
                    <div class="kinder-inner"></div>
                </div>
            </div>
            <ul>
                <li><a class="sina" href="javascript:" title="谢健达新浪微博" alt="谢健达新浪微博"></a><span>点击展开新浪微博</span></li>
                <li><a class="qq" href="http://wpa.qq.com/msgrd?v=3&uin=805610411&site=qq&menu=yes" target="_blank" title="805610411" alt="805610411"></a><span>QQ：805610411</span></li>
                <li><a class="wechat" href="javascript:" title="kinder0408" alt="kinder0408"></a><span>微信：kinder0408</span></li>
                <li><a class="email" href="mailto:kinder@kinder.vip" title="谢健达" alt="谢健达新浪微博"></a><span>kinder@kinder.vip</span></li>
            </ul>
            <div class="sina-show">
                <iframe width="100%" height="620" class="share_self"  frameborder="0" scrolling="no" src="http://widget.weibo.com/weiboshow/index.php?language=&width=0&height=620&fansRow=1&ptype=1&speed=0&skin=10&isTitle=0&noborder=0&isWeibo=1&isFans=0&uid=1338960600&verifier=fa2fdb00&dpc=1"></iframe>
            </div>
        </div>
        <div class="kinderright">
            <div class="line-content wow fadeInUp animated">
                <canvas id="network" width="1488"></canvas>
                <div class="dg">KINDER博客陪你度过了</div>
                <div class="data">
                    <div class="in-day"><span></span>天</div>
                    <div class="in-hours"><span></span>时</div>
                    <div class="in-min"><span></span>分</div>
                    <div class="in-sec"><span></span>秒</div>
                </div>
            </div>
            <!-- <div class="clock wow fadeInUp animated">
        		<iframe src="../assets/clock.html" scrolling="no" width="230" height="230" frameborder='0'></iframe>
        	</div> -->
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
                <!-- <div class="page">
                    <a class="prev" href=""><</a>
                    <a class="on" href="">1</a>
                    <a href="">2</a>
                    <a href="">3</a>
                    <a class="next" href="">></a>
                </div> -->
            </div>
            <div class="clear"></div>
            <div class="copy">COPYRIGHT © <a href="" title="KINDER个人博客">KINDER.VIP</a> | DESIGN BY <a href="" title="KINDER个人博客">KINDER</a></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';  // 加载 axios 组件
    import Vue from 'vue';

    export default {
        name: 'index',
        data () {
            return {
                isA: '',
                list:[]  // 存数据的变量
            }
        },
        mounted() {  // 渲染后的回调
            this.getData();
        },
        methods:{
            toggle:function(){
                this.isA =! this.isA;
            },
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
