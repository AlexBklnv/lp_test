export const GET_DIALOG_BY_ID = 'getDialogById';
export const GET_MESSAGES_COUNT = 'getMessagesCount';

export default {
    [GET_DIALOG_BY_ID]:  state => id => state.dialogs.find(dialog => dialog.id === id),
    [GET_MESSAGES_COUNT]: state => state.dialogs.reduce((a, b) => a + b.parts.length, 0),
}