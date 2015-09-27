/**
 * Created by zhaozl on 2015/9/22.
 */
var ViewPetModal = Backbone.View.extend({
    el : "#editArea",

    events : {
        "click button[name=close]" : "close"
        //"click a[name=remove]" : "remove"
    },

    initialize : function() {
        this.render();
    },

    render : function() {
        var obj = this;
        var viewModel = this.switchViewModel();
        Mustache.templateFromUrl("views/petModal.html", viewModel, function(result) {
            console.log(result);
            obj.$el.html(result);
        });
    },

    /**
     * 转为viewModel
     * @returns {string|*}
     */
    switchViewModel : function() {
        var viewModel = this.model.toJSON();

        if (viewModel.kind === 1) {
            viewModel.kind = "猫科";
        }
        else if (viewModel.kind === 2) {
            viewModel.kind = "狗科";
        }

        viewModel.cid = this.model.cid;
        return viewModel;
    },

    /**
     * 关闭
     * @param e
     */
    close : function() {
        appRouter.navigate("", {trigger : true});
    }

    /**
     * 删除
     * @param e
     */
    //remove : function(e) {
    //    var cid = $(e.target).attr("cid");
    //    this.collection.remove(this.collection.get(cid));
    //}
});