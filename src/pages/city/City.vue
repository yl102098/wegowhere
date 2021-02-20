<template>
    <div>
        <Header></Header>
        <Search></Search>
        <List></List>
        <Alphabet></Alphabet>
    </div>
</template>

<script>
    import Header from './components/Header'
    import Search from './components/Search'
    import List from './components/List'
    import Alphabet from './components/Alphabet'
    export default {
        name:"City",
        components:{
            Header,
            Search,
            List,
            Alphabet
        }
    }
</script>

<style lang="less" scoped>

</style>