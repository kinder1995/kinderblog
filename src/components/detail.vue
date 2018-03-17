<template>
      <div class="kinder-body">
            <div class="kinderleft">
                  <div class="tx">
                        <div><img src="../assets/images/tx.png" width="130" height="130" alt="kinder"></div>
                        <div class="name" title="kinder">Kinder</div>
                  </div>
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
                  <div class="kinder-menu kinder-collapse-r" v-bind:class="{'is-active' : isA, '' : !isA}"
                       @click="toggle">
                        <div class="kinder-box">
                              <div class="kinder-inner"></div>
                        </div>
                  </div>
                  <ul>
                        <li><a class="sina" href="javascript:" title="谢健达新浪微博" alt="谢健达新浪微博"></a><span>点击展开新浪微博</span>
                        </li>
                        <li><a class="qq" href="http://wpa.qq.com/msgrd?v=3&uin=805610411&site=qq&menu=yes"
                               target="_blank"
                               title="805610411" alt="805610411"></a><span>QQ：805610411</span></li>
                        <li><a class="wechat" href="javascript:" title="kinder0408"
                               alt="kinder0408"></a><span>微信：kinder0408</span></li>
                        <li><a class="email" href="mailto:kinder@kinder.vip" title="谢健达"
                               alt="谢健达新浪微博"></a><span>kinder@kinder.vip</span></li>
                  </ul>
                  <div class="sina-show">
                        <iframe width="100%" height="620" class="share_self" frameborder="0" scrolling="no"
                                src="http://widget.weibo.com/weiboshow/index.php?language=&width=0&height=620&fansRow=1&ptype=1&speed=0&skin=10&isTitle=0&noborder=0&isWeibo=1&isFans=0&uid=1338960600&verifier=fa2fdb00&dpc=1"></iframe>
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
                        <div class="list wow fadeInUp animated">
                              <h1 :title="article.title">{{article.title}}</h1>
                              <div class="describe" v-html="article.content"></div>
                              <div class="list-b">
                                    <div class="data">{{article.create_time}}</div>
                                    <div class="tag">{{article.label[0].label}}</div>
                              </div>
                        </div>
                  </div>
                  <div class="clear"></div>
                  <div class="copy">COPYRIGHT © <a href="" title="KINDER个人博客">KINDER.VIP</a> | DESIGN BY <a href=""
                                                                                                            title="KINDER个人博客">KINDER</a>
                  </div>
            </div>
      </div>
</template>

<script>
    import axios from 'axios';
    import Vue from 'vue';

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
    @import '../assets/css/animate.css';
    @import '../assets/css/public.css';
    @import '../assets/css/kinder.css';
</style>
