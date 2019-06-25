import { match, not } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({

    headerMessage: 'Demo Home Page',
    emailAdress: '',

    isValid: match('emailAdress', /^.+@.+\..+$/),
    isDisabled: not('isValid'),

    responseMessage: '',

    actions: {
        saveInvitation() {
            alert("Saving of the following email address is in progress : " + this.get('emailAdress'));
            this.set('responseMessage', `Thank you! We've just saved you email adress : ${this.get('emailAdress')}`);
            this.set('emailAdress', '');
        }
    }

});
