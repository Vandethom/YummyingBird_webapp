<template>
    <div class='recipe-body'>
        <h1>{{ title }}</h1>
        <div class='information-circle'>
            <p>{{ duration }} min</p>
            <p>{{ cooking }} min</p>
        </div>
        <div class='quantity-calculator'>
            <span>-</span>
            <p>{{ parts }} personnes</p>
            <span>+</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            cooking: {
                type: Number,
                default: 0
            },
            duration: {
                type: Number,
                default: 0
            },
            parts: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style lang="scss" scoped>
    .recipe-body {
        margin-left: 25%;

        .information-circle {
            width: 320px;
            display: flex;
            justify-content: space-around;

            p {
                width: 60px;
                height: 60px;
                border: 1px solid black;
                border-radius: 50%;
                display: grid;
                place-items: center;
            }
        }

        .quantity-calculator {
            display: flex;
            align-items: center;

            p {
                width: 85px;
                height: 18px;
                padding: 6px;
                text-align: center;
                background: palegreen;
                border-radius: 25px;
            }

            span {
                cursor: pointer;
                background: rgb(10, 156, 66);
                display: grid;
                place-items: center;
                width: 26px;
                height: 26px;
                border-radius: 50%;
                font-size: 22px;
                margin: 6px;
            }
        }
    }
</style>