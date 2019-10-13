<template>
    <div class="dialogs-list">
        <div class="dialogs-list__title">
            Сообщения
            <span class="dialogs-list__messages-count">{{getMessagesCount}}</span>
        </div>
        <DialogTab v-for="dialogTab in dialogTabs" :key="dialogTab.id" :dialog="dialogTab" />
    </div>
</template>

<script>
    import { mapGetters, mapState } from 'vuex';

    export default {
        name: "DialogsList",
        computed: {
            ...mapState({
                dialogTabs: state => state.dialogs,
            }),
            ...mapGetters([
                'getMessagesCount',
            ])
        },
        components: {
            'DialogTab': () => import('./DialogTab')
        }
    }
</script>

<style scoped lang="scss">
    .dialogs-list {
        width:300px;
        height: 100%;
        background: #F3F6F8;
        font-size: 14px;
        line-height: 20px;
        color: #656B77;
    }
    .dialogs-list__messages-count {
        color: #D2D8DE;
        margin-left: 10px;
        font-weight: 600;
    }
    .dialogs-list__title {
        padding: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #E9EDF2;
    }

</style>