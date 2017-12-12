<template>
    <div>
        <div style="position:relative;">
                <el-radio-group v-model="isCollapse" style="margin: 10px;display:block;text-align:left;">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group>
                <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">网站模板</span>
                        </template>
                        <el-menu-item-group>
                            <span slot="title">分组一</span>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <span slot="title">选项4</span>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">登录页面</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                </el-menu>
                <div style="width: 80%;height: 300px;position:absolute; right: 100px; top: 50px;">
                        <div class="module-border">
                                <el-menu
                                :default-active="activeIndex2"
                                class="el-menu-demo"
                                mode="horizontal"
                                @select="handleSelect"
                                background-color="#545c64"
                                text-color="#fff"
                                active-text-color="#ffd04b">
                                <el-menu-item index="1">处理中心</el-menu-item>
                                <el-submenu index="2">
                                <template slot="title">我的工作台</template>
                                <el-menu-item index="2-1">选项1</el-menu-item>
                                <el-menu-item index="2-2">选项2</el-menu-item>
                                <el-menu-item index="2-3">选项3</el-menu-item>
                                </el-submenu>
                                <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                            </el-menu>
                            <div>
                                菜单demo1
                            </div>
                        </div>
                        <div class="module-border">
                                <div style="position: relative;">
                                        <el-menu
                                        default-active="2"
                                        class="el-menu-vertical-demo"
                                        @open="handleOpen"
                                        @close="handleClose"
                                        background-color="#545c64"
                                        text-color="#fff"
                                        active-text-color="#ffd04b">
                                        <el-submenu index="1">
                                          <template slot="title">
                                            <i class="el-icon-location"></i>
                                            <span>导航一</span>
                                          </template>
                                          <el-menu-item-group>
                                            <template slot="title">分组一</template>
                                            <el-menu-item index="1-1">选项1</el-menu-item>
                                            <el-menu-item index="1-2">选项2</el-menu-item>
                                          </el-menu-item-group>
                                          <el-menu-item-group title="分组2">
                                            <el-menu-item index="1-3">选项3</el-menu-item>
                                          </el-menu-item-group>
                                          <el-submenu index="1-4">
                                            <template slot="title">选项4</template>
                                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                                          </el-submenu>
                                        </el-submenu>
                                        <el-menu-item index="2">
                                          <i class="el-icon-menu"></i>
                                          <span slot="title">导航二</span>
                                        </el-menu-item>
                                        <el-menu-item index="3">
                                          <i class="el-icon-setting"></i>
                                          <span slot="title">导航三</span>
                                        </el-menu-item>
                                      </el-menu>
                                    <div class="content-demo2">
                                        菜单demo2
                                    </div>
                                </div>
                        </div>
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
                isCollapse: true,
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