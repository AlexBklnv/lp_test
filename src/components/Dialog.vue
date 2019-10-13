<template>
    <div class="dialog">
        <Preloader v-if="isLoading"
                   :size="100"
                   style="margin: auto"/>
        <div v-else
             class="dialog__message-list"
             ref="messageList"
        >
            <Messages class="dialog__message"
                      v-for="message in dialog.parts"
                      :key="message.id"
                      :message="message"
            />
        </div>
        <MessageForm
                ref="messageForm"
                :dialogId="dialogId"
                @messageSent="scrollToLastSentMessage"
        />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "Dialog",
        components: {
            Messages: () => import('./Message'),
            MessageForm: () => import('./MessageForm'),
            Preloader: () => import('./Preloader'),
        },
        data: () => ({
            isLoading: false,
        }),
        beforeRouteUpdate(to, from, next) {
            this.$refs.messageForm.refreshForm();
            next();
        },
        created() {
            this.isLoading = true;

            setTimeout(() => {
                this.isLoading = false;
            }, 1500);
        },
        computed: {
            ...mapGetters([
               'getDialogById'
            ]),
            dialogId() {
                return parseInt(this.$route.params.id, 10);
            },
            dialog() {
                return this.getDialogById(this.dialogId);
            },
        },

        methods: {
            scrollToLastSentMessage() {
                this.$nextTick(() => {
                    this.$refs.messageList.scrollTop = this.$refs.messageList.scrollHeight;
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .dialog {
        display: flex;
        flex-flow: column;
        justify-content: flex-end;
        width: 680px;
    }
    .dialog__message-list {
        padding: 20px 15px 0 40px;
        overflow-y: auto;
    }

</style>