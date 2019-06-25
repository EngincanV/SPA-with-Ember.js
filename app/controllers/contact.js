import Controller from '@ember/controller';
import { not, match } from '@ember/object/computed';

export default Controller.extend({

    isValid: match('emailAdress', /^.+@.+\..+$/),
    isDisabled: not('isValid'),

    responseMessage: '',

    actions: {
        saveInvitation() {
            alert("We saved your informations");
            this.set('responseMessage', `We got your message and we'll get in touch soon.`);
            this.set('emailAdress', '');
            this.set('message', '');
        }
    }
});
