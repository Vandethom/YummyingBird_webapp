<template>
    <div class='accountOptions-container'>
        <div class="language-options">
            <p>Fr</p>
        </div>
        <div class="account-options">
            <img id='icon-menu' src="~assets/icons/icon-menu.svg" alt="">
            <img id='icon-account' src="~assets/icons/icon-account.svg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .accountOptions-container {
        display: flex;
        align-items: center;
        margin-left: 6vw;

        .language-options {
            background-color: #B6D8F2;
            border-radius: 6px;
            width: 45px;
            height: 45px;
            text-align: center;
        }

        .account-options {
            margin-left: 2vw;
            background-color: #B6D8F2;
            border-radius: 25px;
            width: 95px;
            height: 50px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            img {
                cursor: pointer;
            }

            #icon-menu {
                width: 32px;
                height: 32px;
            }
        }
    }
</style>