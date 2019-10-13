export default {
    addMessage: (state, payload) => {
        const dialog = state.dialogs.find(dialog => dialog.id === payload.dialogId);
        if (!dialog) {
            return;
        }

        let partId = dialog.parts.length > 0? dialog.parts.reduce((prev,cur) => cur.id > prev.id ? cur:prev, {id: 0}).id: 0;

        const now = new Date();
        const dateFormat = {
            Y: now.getFullYear(),
            m: ('0'+(now.getMonth() + 1)).slice(-2),
            d: ('0'+now.getDate()).slice(-2),
            H: ('0'+now.getHours()).slice(-2),
            i: ('0'+now.getMinutes()).slice(-2),
            s: ('0'+now.getSeconds()).slice(-2)
        };
        dialog.parts.push({
            id: partId + 1,
            author: state.currentUserName,
            text: payload.message,
            created: `${dateFormat.Y}-${dateFormat.m}-${dateFormat.d} ${dateFormat.H}:${dateFormat.i}:${dateFormat.s}`
        });
    },
}