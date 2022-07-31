<template>
    <div v-show='value' class='preview-value'>

        <div v-if=' type === "title" '>
            <h2>{{ value }}</h2>
            <button :id='id' @click='deleteValue'>x</button>
            <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
        </div>
        
        <div v-else-if=' type === "text" ' :type=type>
            <p>{{ value }}</p>
            <button :id='id' @click='deleteValue'>x</button>
            <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
        </div>

        <li v-else-if=' type === "arrayElement" '>
            {{ value }}
            <button :id='id' @click='deleteValue'>x</button>
            <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
        </li>

        <li v-else-if=' type === "boolean" '>
            {{ value }}
            <button :id='id' @click='deleteValue'>x</button>
            <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
        </li>

    </div>
</template>

<script>
    export default {
        props: {
            'id': {
                type: String,
                default: ''
            },
            'value': { 
                type: String, 
                default: '' 
            },
            'elements': { 
                type: Array,
                default: () => []
            },
            'attribute': {
                type: String,
                default: ''
            },
            'type': {
                type: String,
                default: ''
            }
        },

        methods: {
            deleteValue(e) {
                const value = e.target.id
                
                this.$store.commit('recipe/deleteData', value)
            }
        }
    }
</script>

<style lang="scss">
    .preview-value {
        display: grid;
        grid-template-columns: 32fr 1fr 1fr;
        place-items: center;
        word-wrap: break-word;
        margin-right: 80px;

        & > * {
        max-width: 16vw;
        }

        button {
            display: grid;
            place-items: center;
            margin-left: 8px;
            width: 25px;
            height: 25px;
        }

        .icon-edit {
            margin: auto;
            width: 13px;
            height: 13px;
        }

        ul {
            list-style-type: none;

            li {
                margin-bottom: 6px;
                display: grid;
                grid-template-columns: 8fr 1fr 1fr;
            }
        }
    }
</style>