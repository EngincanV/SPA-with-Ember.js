import Controller from '@ember/controller';
import { or, not, match, gte } from '@ember/object/computed';

export default Controller.extend({

    isValid: match('emailAdress', /^.+@.+\..+$/),
    isDisabled: not('isValid'),

    isLongEnough: gte('message.length', 5),
    isLongNotEnough: not('isLongEnough'),

    isBothTrue: or('isDisabled', 'isLongNotEnough'),

    responseMessage: '',

    actions: {
        saveInvitation() {
            const email = this.get('emailAdress');
            const message = this.get('message');
            const newContact = this.store.createRecord('contact', { email: email, message: message });

            newContact.save().then(() => {
                alert("We saved your informations");
                this.set('responseMessage', `We got your message and we'll get in touch soon.`);
                this.set('emailAdress', '');
                this.set('message', '');
            });
            
        }
    }
});
