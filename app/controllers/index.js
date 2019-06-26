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
            const email = this.get('emailAdress');
            const newInvitation = this.store.createRecord('invitation', { email : email });
            newInvitation.save().then(() => {
                this.set('responseMessage', `Thank you! We've just saved you email adress : ${this.get('emailAdress')}`);
                this.set('emailAdress', '');
            });
        }
    }

});
