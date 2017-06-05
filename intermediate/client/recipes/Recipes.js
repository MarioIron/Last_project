Meteor.subscribe('recipes');

Templete.Recipes.helpers({
	recipes: ()=> {
		return Recipes.find({});
	}
});