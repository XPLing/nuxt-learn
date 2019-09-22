<template>
    <div class="page">
        Page is search
        <ul>
            <li v-for="(item,idx) in list" :key="`${idx}`">{{item}}</li>
        </ul>
        <ul>
            <li v-for="(item,idx) in $store.state.navbar.app" :key="idx">{{item}}</li>
        </ul>
        <ul>
            <li v-for="(item,idx) in $store.state.myStore.myList" :key="`myList${idx}`">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        layout: 'search',
        data() {
            return {
                list: [],
                age: 10
            };
        },
        async asyncData() {
            let {status, data: {list}} = await axios.get('http://localhost:3000/city/list');
            console.log(status);
            console.log(list);
            console.log(status === 200);
            if (status === 200) {
                return {
                    list
                };
            }
            return false;
        }
    };
</script>

<style lang="css">
</style>
