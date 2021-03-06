import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Restaurants } from '../../api/restaurant/Restaurant';
import { Favorites } from '../../api/favorite/Favorite';
import { MenuItems } from '../../api/menuItem/menuItem';
import { Prefs } from '../../api/pref/Prefs';
import { Featureds } from '../../api/featured/Featured';

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise publish nothing.
Meteor.publish(Restaurants.userPublicationName, function () {
  if (this.userId) {
    return Restaurants.collection.find();
  }
  return this.ready();
});

Meteor.publish(MenuItems.userPublicationName, function () {
  if (this.userId) {
    return MenuItems.collection.find();
  }
  return this.ready();
});

Meteor.publish(Prefs.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Prefs.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(Favorites.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Favorites.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(Featureds.userPublicationName, function () {
  if (this.userId) {
    return Featureds.collection.find();
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise publish nothing.
Meteor.publish(Restaurants.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Restaurants.collection.find();
  }
  return this.ready();
});

Meteor.publish(MenuItems.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return MenuItems.collection.find();
  }
  return this.ready();
});

Meteor.publish(Favorites.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Favorites.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
