<template>
    <div>
        <h1>this is home page</h1>
        <button @click="gtpp">got to profilePage</button>
        <button @click="gtid">got to id 1</button>
    </div>
</template>
<script>
export default {
    name: 'HomePage',
    methods:{
        gtpp:function(){
            console.log(this.$route);
            this.$router.push('/profile_page');
        },
        gtid:function(){
            this.$router.push('/dynamic_page/100')
        }
    }
}
</script>