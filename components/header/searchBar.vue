<template>
    <div class='search-bar'>
        <p>Rechercher...</p>
        <div class='filters'>
            <img src="~assets/icons/icon_filter.svg" alt="icon of filters">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .search-bar {
        display: flex;
        width: 620px;
        height: 55px;
        margin-left: 8vw;
        background: #B6D8F2;
        border-radius: 6px;
        justify-content: space-between;
        
        p {
            font-family: 'Barlow Light';
            margin-left: 14px;
        }

        .filters {
            width: 160px;
            background-color: #5784BA;
            border-radius: 0 6px 6px 0;
            width: 100px;
            display: grid;
            place-items: center;
            
            img {
                margin: auto;
                cursor: pointer;
            }
        }
    }

    @media only screen and (max-width: 600px) {
        .search-bar {
            width: 85%;
            margin-left: 0;
        }
    }
</style>