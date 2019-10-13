<template>
    <RouterLink class="dialog-tab"
                active-class=""
                exact-active-class="dialog-tab__selected"
                :to="{name: 'im', params: { id: dialog.id }}">
        <div class="dialog-tab__header">
            <span class="dialog-tab__subject">{{ dialog.subject}}</span>
            <span class="dialog-tab__date">{{ dialog.created | formateDate  }}</span>
        </div>
        <span class="dialog-tab__preview">{{ getLastPreviewMessage }}</span>
    </RouterLink>
</template>

<script>
    export default {
        name: "DialogTab",
        props: {
            dialog: {
                type: Object,
                required: true,
            },
        },
        computed: {
            getLastPreviewMessage() {
                let lastMessage = this.dialog.parts.length > 0? this.dialog.parts.reduce((prev,cur) => cur.id > prev.id ? cur:prev, {id: 0}).text: '';
                return lastMessage.length > 100? lastMessage.substr(0, 70) + '...': lastMessage;
            }
        },
    }
</script>

<style scoped lang="scss">
    .dialog-tab {
        display: block;
        text-decoration: unset;
        padding: 20px;
        border-bottom: 1px solid #E9EDF2;
        &__selected {
            background: #FFF;
        }
    }
    .dialog-tab__header {
        display: flex;
        align-items: baseline;
    }
    .dialog-tab__subject {
        color: #35383D;
        width: 150px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .dialog-tab__date {
        margin-left: auto;
        font-size: 10px;
        line-height: 14px;
        text-align: right;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #B7C0C8;
    }
    .dialog-tab__preview {
        font-size: 13px;
        line-height: 18px;
        color: #7D8790;
    }

</style>