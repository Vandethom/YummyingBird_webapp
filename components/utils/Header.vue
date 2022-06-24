<template>
    <div class='header-container'>
        <div class="header-main-bar">
            <BrandNameLogo class='name-logo' />
            <SearchBar />
            <AccountOptions class='account-options' />
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

    @media only screen and (max-width: 600px) {
        .header-container {
                width: 80%;
                
                .header-main-bar{
                    .name-logo, .account-options {
                        display: none;
                    }
            }
        }
        
    }
</style>
