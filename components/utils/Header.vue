<template>
    <div class='header-container'>
        <div class="header-main-bar">
            <BrandNameLogo />
            <SearchBar />
            <AccountOptions />
        </div>
        <hr />
    </div>
</template>

<script>
import AccountOptions from '../header/accountOptions.vue'
import BrandNameLogo from '../header/brandNameLogo.vue'
import SearchBar from '../header/searchBar.vue'

export default {
    'components': {
        AccountOptions,
        BrandNameLogo,
        SearchBar
    }
}
</script>

<style lang="scss" scoped>
    .header-main-bar {
        display: flex;
        align-items: center;
    }
    .header-container {
        width: 100vw;
        margin-left: 25%;   

        hr {
            width: 65vw;
            margin-left: 2vw;
        }
    }
</style>
