<template>
    <div class="app">
        <Loading v-if="loading" />
        <header class="app-header">
            <div v-for="link in links" 
                    :key="link.routeName" 
                    @click="goTo(link.routeName)"
                    class="link"
                    :class="{'active-link': link.routeName === activeRouteName}">
                {{ link.name }}
            </div>
        </header>
        <div class="app-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            isMain: true,
            links: [
                {
                    name: 'график',
                    routeName: 'BarChart'
                },
            ]
        }
    },
    computed: {
        ...mapGetters(['loading']),
        activeRouteName() {
            return this.$route.name
        },
    },
    methods: {
        goTo(routeName) {
            this.$router.push({name: routeName})
        }
    },
}
</script>

<style lang="scss" scoped>
    .app {
        & :not(:last-child) {
            margin-bottom: 20px;
        }

        ::v-deep button {
            border: 1px solid;
        }

        .active-link {
            border-bottom: 1px solid blue;
            color: blue;
        }

        &-header {
            display: flex;
            justify-content: center;
        }

        .link {
            margin: 0 10px;
            cursor: pointer;
        }

        button {
            cursor: pointer;
        }

        &-content {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>
