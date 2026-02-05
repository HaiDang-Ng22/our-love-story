// js/choice/choice-api.js

window.choiceAPI = {
    async createChoice(data) {
        return firebase.database().ref('choices/current').set(data);
    },

    async getChoice() {
        const snap = await firebase.database().ref('choices/current').once('value');
        return snap.val();
    },

    async submitChoice(optionKey) {
        return firebase.database().ref('choices/current').update({
            selectedByUser: optionKey
        });
    },

    onChoiceChanged(callback) {
        firebase.database().ref('choices/current')
            .on('value', snap => callback(snap.val()));
    }
};
