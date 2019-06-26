import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');

  this.route('admin', function() {
    this.route('invitations');
    this.route('contacts');
  });

  //creating a route is exactly right that
  this.route('libraries', () =>{
    this.route('new');
  }, function() {
    this.route('new');
  });

});

export default Router;
