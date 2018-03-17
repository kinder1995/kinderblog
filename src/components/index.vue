<template>
    <el-container>
        <el-header>头部</el-header>
        <el-container>
            <el-aside>左边</el-aside>
            <el-container>
                <el-main>
                    <el-row>
                        <el-col :span="24">
                            <el-card class="box-card">
                                <div v-for="o in 4" :key="o" class="text item">
                                    {{'列表'+o}}
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
                    </el-row>
                </el-main>
                <el-footer>尾部</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: 'index',
        data () {
            return {
                list:[]  // 存数据的变量
            }
        },
        mounted() {  // 渲染后的回调

        },
        methods:{

        }
    }
</script>
<style>
    @import '../assets/css/public.css';
    .el-row {
        margin-bottom: 20px;
        &:last-child {
             margin-bottom: 0;
         }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>
