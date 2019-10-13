<template>
    <div class="message"
         :class="{'message_sent': message.author === currentUserName}">
        <div class="message__body">
            {{ message.text }}
        </div>
        <div class="message__info">
            <span class="message__author">{{ message.author }}</span>
            <span class="message__date">{{ message.created | formateDateTime }}</span>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "Message",
        props: {
            message: {
                type: Object,
                require: true,
            },
        },
        computed: {
            ...mapState({
                currentUserName: state => state.currentUserName,
            }),
        }

    }
</script>

<style scoped lang="scss">
    .message {
        width: 380px;
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 40px;
        }

        &_sent {
            margin-left: auto;

            .message__body {
                background: #E9F5F4;
                border-radius: 8px 8px 0px 8px;
            }
            .message__info {
                justify-content: flex-end;
            }
        }
    }

    .message__body {
        padding: 20px;
        background: #F6F7F9;
        font-size: 14px;
        line-height: 20px;
        color: #475453;
    }
    .message__info {
        display: flex;
        justify-content: flex-start;
        align-items: baseline;
        margin-top: 10px;
    }
    .message__author {
        font-size: 13px;
        line-height: 18px ;
        color: #000000;
        font-weight: 600;
    }
    .message__date {
        margin-left: 12px;
        font-size: 10px;
        line-height: 14px;
        color: #B7C0C8;
    }
</style>