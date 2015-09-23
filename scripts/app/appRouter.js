/**
 * Created by zhaozl on 2015/9/23.
 */
var AppRouter = Backbone.Router.extend({
    routes : {
        "pet/modify" : "goModify"
    },

    initialize : function() {
        var pets = new Pets();
        new ViewPetList({collection : pets});
    },

    goModify : function() {
        console.log("enter modify page");
    }
});