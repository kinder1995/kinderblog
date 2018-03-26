<template>
    <el-header class="clearfix">
        <div class="logo fl"><a href="/"><img width="45" height="45" src="../assets/images/logo.png" alt="KINDER博客"></a></div>
        <div class="name fl">KINDER博客</div>
        <div class="kinder-menu kinder-collapse-r fr" v-bind:class="{'is-active':isA}" @click="menuToggle">
            <div class="kinder-box">
                <div class="kinder-inner"></div>
            </div>
        </div>
    </el-header>
</template>

<script>

    export default {
        name: 'index',
        data () {
            return {
                isA:'',
            }
        },
        created() {
            this.eventBus.$on('menuToggle', (status) => {
                console.log(status, 'On header component');
                this.isA = status;
            });
        },
        methods:{
            menuToggle:function(){
                this.isA =! this.isA;
                this.eventBus.$emit('menuToggle', this.isA);
            }
        }
    }
</script>
