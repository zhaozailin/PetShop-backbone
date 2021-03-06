/**
 * Created by zhaozl on 2015/9/22.
 */
var Pet = Backbone.Model.extend({
    defaults : {

        // 0表示不详，1表示猫，2表示狗
        kind : 0,

        name : "",
        color : "",
        age : 0
    },

    initialize : function() {
        this.listenTo(this, "remove", this.remove);
    },

    /**
     * 删除
     */
    remove : function() {
        console.log(this.get("name") + "已经被删除");
    }
});