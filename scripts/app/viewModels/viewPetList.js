/**
 * Created by zhaozl on 2015/9/22.
 */
var ViewPetList = Backbone.View.extend({
    el : "#petList",

    events : {
        "click a[name=modify]" : "modify",
        "click a[name=remove]" : "remove"
    },

    initialize : function() {
        this.listenTo(this.collection, "reset", this.render);
        this.listenTo(this.collection, "remove", this.render);
    },

    render : function() {
        var obj = this;
        Mustache.simpleTemplateFromUrl("views/petList.html", function(result) {
            obj.$el.html(result);
            obj.renderInner();
        });
    },

    renderInner : function() {
        var obj = this;
        _.map(this.collection.models, function(model) {
            obj.$("#tbody").append(new ViewPet({model : model}).el);
        });
    }
});
