<template>
    <div v-show='value'>

        <div v-if=' type === "title" ' class='preview-value'>
            <h2>{{ value }}</h2>
            <div>
                <button :id='id' @click='deleteValue'>x</button>
                <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
            </div>
        </div>
        
        <div v-else-if=' type === "text" ' class='preview-value' :type=type>
            <p>{{ value }}</p>
            <div>
                <button :id='id' @click='deleteValue'>x</button>
                <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
            </div>
        </div>

        <li v-else-if=' type === "arrayElement" ' class='preview-value'>
            {{ value }}
            <div>
                <button :id='id' @click='deleteValue'>x</button>
                <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
            </div>
        </li>

        <li v-else-if=' type === "boolean" ' class='preview-value'>
            {{ value }}
            <div>
                <button :id='id' @click='deleteValue'>x</button>
                <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
            </div>
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
                
                document.getElementById(`${value}-input`).checked = false
                this.$store.commit('recipe/deleteData', value)
            }
        }
    }
</script>

<style lang="scss">
    .preview-value {
        width: 25vw;
        display: flex;
        justify-content: space-between;
        word-wrap: break-word;
        margin:auto;

        div {
            display: flex;
        }
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