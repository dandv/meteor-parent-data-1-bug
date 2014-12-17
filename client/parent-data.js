var players = [{name: 'foo', age: 30}, {name: 'bar', age: 20}];

Template.body.helpers({
  players: players,
  team: {
    captain: {
      name: 'baz - only here does parentData(1) work correctly'
    }
  }
});

['player', 'playerWrapper', 'myEach', 'body'].forEach(function (where) {
  Template[where].events({
    'click': function () {
      console.group('--- from %s ---', where);
      console.log('Current data', Template.currentData());
      console.log('Parent(0) data', Template.parentData(0));
      console.log('Parent(1) data', Template.parentData(1));
      console.log('Parent(2) data', Template.parentData(2));
      console.log('Parent(3) data', Template.parentData(3));
      console.groupEnd();
    }
  })
});
