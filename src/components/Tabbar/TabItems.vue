<template>
    <!-- 1. 点击TabItem进行组件切换-->
    <div class="tabitem" @click="changeFlag">
        <span v-if="!flag"><slot name="normalImg"></slot></span>
        <span v-else><slot name="activeImg"></slot></span>
         <!-- 3.动态给文本添加active -->
        <span :class="['title',(flag?'active':'')]">{{txt}}</span>
    </div>
</template>

<script>
export default {
    props:["txt","mark","sel","changeSelected"],
    computed:{
        flag(){//flag标志，控制normal和active图片的切换
            if(this.mark === this.sel){//判断自身mark值和父组件传入的mark是否相等;相等时被点亮
                return true;
            }else{
                return false;
            }
            
        }
    },
    methods:{
        changeFlag(){
            //希望父组件传过来的sel值改变成当前点击的TabItem子组件
            //this.changeSelected(this.mark);
            //this.$emit("changeSelected",this.mark);
             //2.编程式导航实现跳转和组件切换
            this.$router.push("/"+this.mark)
        }
    }
}
</script>

<style lang="scss" scoped>
    .tabitem{
        flex:1;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        img{
            width:40px;
            height:40px;
        }
        .title{
            font-size: 12px;
            position: relative;
            top:-2px;
            &.active{
                color:green;
            }
        }
    }
</style>
