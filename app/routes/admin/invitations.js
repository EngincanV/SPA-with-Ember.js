import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return this.store.findAll('invitation');
    },

    actions: {
        deleteInvitations(invitation) {
            let confirmation = confirm("Are you sure to delete?");

            if(confirmation) {
                invitation.destroyRecord();
            }
        }
    }

});
