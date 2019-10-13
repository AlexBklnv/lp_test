<template>
    <div class="message-form">
        <textarea
                ref="messageField"
                class="message-form__message"
                :placeholder="placeholder"
                v-model="message"
                :disabled="isSendingMessage"
                @focus="togglePlaceholder('hide')"
                @blur="togglePlaceholder"
                @keyup.enter="sendMessage"></textarea>
        <button
                class="message-form__submit"
                :disabled="isSendingMessage"
                @click="sendMessage"
        >
            <svg v-if="!isSendingMessage" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.00936317 17.2563C0.00989464 17.6114 0.3701 17.8528 0.698756 17.7183L20.8694 9.46274C21.2835 9.29324 21.2835 8.70676 20.8694 8.53726L0.698758 0.281704C0.370102 0.14719 0.00989463 0.388579 0.00936317 0.743697L0.000660091 6.55894C0.000282918 6.81096 0.187529 7.02387 0.437532 7.05569L11.8171 8.504C12.3996 8.57814 12.3996 9.42186 11.8172 9.496L0.437533 10.9443C0.187529 10.9761 0.000282918 11.189 0.000660091 11.4411L0.00936317 17.2563Z" fill="white"/>
            </svg>
            <Preloader v-else :size="60"/>
        </button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        name: "MessageForm",
        props: {
          dialogId: {
              type: Number,
              require: true
          }
        },
        components: {
          Preloader: () => import('./Preloader')
        },
        data: () => ({
            isSendingMessage: false,
            message: '',
            placeholderDefault: 'Введите текст...',
            placeholder: ''
        }),
        methods: {
            ...mapMutations([
                'addMessage',
            ]),
            refreshForm() {
                this.message = '';
                this.isSendingMessage = false;
            },
            sendMessage() {
                if (!this.message.trim()) {
                    return;
                }
                this.isSendingMessage = true;

                const newMessage = {
                    dialogId: this.dialogId,
                    message: this.message,
                };
                setTimeout(() => {
                    this.addMessage(newMessage);
                    this.$emit('messageSent');
                    this.isSendingMessage = false;
                    this.message = '';
                    this.$nextTick(() => this.$refs.messageField.focus());
                }, 1000);
            },
            togglePlaceholder(action) {
                action = action || 'show';
                if (action === 'hide') {
                    this.placeholder = '';
                } else {
                    this.placeholder = this.placeholderDefault
                }
            },
        },
        created() {
            this.placeholder = this.placeholderDefault;
        }
    }
</script>

<style scoped lang="scss">
    .message-form {
        display: flex;
        width: 100%;
        height: 80px;
        min-height: 80px;
    }
    .message-form__message {
        width: calc(100% - 80px);
        resize: none;
        border: unset;
        border-top: 1px solid #E9EDF2;
        outline: none;
        color: #7D8790;
        font-size: 14px;
        padding: 15px;
        &::placeholder {
            padding: 15px;
        }
    }
    .message-form__submit{
        cursor: pointer;
        width: 80px;
        height: 100%;
        background: #398BFF;
        border: unset;
        &:disabled {
            background: #ebebe4;
            border-left: 1px solid #b1b1ac;
        }
    }
</style>