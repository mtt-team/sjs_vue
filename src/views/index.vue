<template>
    <div>
        <div style="position:relative;">
                <el-radio-group v-model="isCollapse" style="margin: 10px;display:block;text-align:left;">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group>
                <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <router-link to="/vue-index">
                        <el-menu-item index="1">
                            <i class="el-icon-location"></i>
                            <span slot="title">网站模板</span>
                        </el-menu-item>
                    </router-link>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">登录页面</span>
                    </el-menu-item>
                    <router-link to="/vuex-demo">
                        <el-menu-item index="3">
                            <i class="el-icon-setting"></i>
                            <span slot="title">vuex用法</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="/upload-plug">
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">ie9  上传</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="/download-code">
                        <el-menu-item index="5">
                            <i class="el-icon-setting"></i>
                            <span slot="title">下载代码</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="/vue-grid-layout">
                        <el-menu-item index="6">
                            <i class="el-icon-setting"></i>
                            <span slot="title">拖拽插件</span>
                        </el-menu-item>
                    </router-link>
                </el-menu>
                <div style="width: 80%;height: 300px;position:absolute; right: 100px; top: 50px;">
                <router-view></router-view>
                </div>
        </div>
        
    </div>
</template>

<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .module-border{
        border: 1px solid #eee;
        padding: 10px;
        margin-bottom: 20px;
        
    }
    .content-demo2{
        position: absolute;
        left: 200px;
        top: 0;
    }
</style>

<script>
    export default {
        data() {
            return {
                isCollapse: false,
                activeIndex2: '1'
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }

</script>