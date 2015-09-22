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
        var viewModel = this.switchViewModels();
        Mustache.templateFromUrl("views/petList.html", viewModel, function(result) {
            obj.$el.html(result);
        });
    },

    switchViewModels : function() {
        return _.map(this.collection.models, function(model) {
            var viewModel = model.toJSON();

            if (viewModel.kind === 1) {
                viewModel.kind = "猫科";
            }
            else if (viewModel.kind === 2) {
                viewModel.kind = "狗科";
            }

            viewModel.cid = model.cid;
            return viewModel;
        });
    },

    modify : function(e) {
        var cid = $(e.target).attr("cid");
        console.log(this.collection.get(cid));
    },

    remove : function(e) {
        var cid = $(e.target).attr("cid");
        this.collection.remove(this.collection.get(cid));
    }
});
