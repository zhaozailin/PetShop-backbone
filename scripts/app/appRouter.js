/**
 * Created by zhaozl on 2015/9/23.
 */
var AppRouter = Backbone.Router.extend({
    routes : {
        "pet/modify/:cid" : "goModify",
        "" : "backList"
    },

    initialize : function() {
        this.pets = new Pets();
        new ViewPetList({collection : this.pets});
    },

    goModify : function(cid) {
        console.log("enter modify page" + cid);
        $("#queryArea").hide();
        $("#editArea").show();
        console.log(this.pets.get(cid));
        new ViewPetModal({model : this.pets.get(cid)});
    },

    backList : function() {
        $("#editArea").hide();
        $("#queryArea").show();
    }
});