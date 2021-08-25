<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" style="background:#5b6270;height: 937px">
                <div id="user">
                    <img :class="img" src="../assets/avatar.jpg">
                    <br/>
                    <span :class="username">猫小玖</span>
                </div>
                <Menu active-name="1-0" theme="dark" width="auto" :class="menuitemClasses"  v-for="(item,index) in $router.options.routes">
                    <MenuItem :name="'1-'+index2" v-for="(item2,index2) in item.children">
                        <router-link :to="item2.path" :class="$route.path==item2.path?'link-active':'link'">
                            <Icon :type="item2.icon"></Icon>&nbsp;
                            <span>{{item2.name}}</span>
                        </router-link>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
	                <div class="left">
		                <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
		                <span class="os_name">图书管理系统</span>
	                </div>
	                <div class="right">
		                <span class="time">{{time}}</span>
	                </div>

                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                    <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 937px;
}
#user{
    height: 200px;
    text-align: center;
}

#user img{
    margin-top:20px;
    margin-bottom:10px;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    transition: all .2s;
}
#user span{
    color: white;
    font-size: 20px;
    transition: all .2s;
}
.span{
    transition: all .2s;
    display: none;
}
.img2{
    transition: all .2s;
    transform: translateX(-10px) scale(0.5);
}
.layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
	position: relative;
}
.layout-header-bar .left{
	width: 50%;
	height: 100%;
	background:#eeeeff;
	clip-path:  polygon(0 0,0 100%,100% 100%,80% 0);
}
.layout-header-bar .right{
	width: 50%;
	height: 100%;
	position: absolute;
	left: 50%;
	top: 0;
}
.time{
	position: absolute;
	right: 20px;
	top: 0px;
	font-size: 20px;
}

.os_name{
  font-size: 24px;
  font-weight: bold;
}
.layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
}
.menu-icon{
    transition: all .3s;
}
.rotate-icon{
    transform: rotate(-90deg);
}
.menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
}
.menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 18px;
}
.collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
}
.collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
}
.link-active{

}
.link{
    color: #f5f7f9;
}
</style>

<script>
export default {
    data () {
        return {
            isCollapsed: false,

            time:'',
        }
    },
    computed: {
        rotateIcon () {
            return [
                'menu-icon',
                this.isCollapsed ? 'rotate-icon' : ''
            ];
        },
        menuitemClasses () {
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
        },
        img(){
            return[
                this.isCollapsed ? 'img2':''
            ]
        },
        username(){
            return[
                this.isCollapsed ? 'span':''
            ]
        }
    },
    methods: {
        collapsedSider () {
            this.$refs.side1.toggleCollapse();
        }
    },

    created() {
        var date = new Date();
        date = date.toLocaleString()
        this.time = date;
    }
}
</script>
