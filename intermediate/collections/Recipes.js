Recipes = new Meteor.Collection('recipes');

RecipesSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	desc:{
		type: String,
		label: "Description"
	},
	author:{
		type: String
		label: "Author"
		authorValue: function(){
			return this.userId
		}
	},
	createdAt:{
		type: Date,
		label: "Created At",
		authorValue: function(){
			return new Date()
		}
	}
});

Recipes.attachSchema( RecipeSchema );