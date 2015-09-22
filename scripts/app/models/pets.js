/**
 * Created by zhaozl on 2015/9/22.
 */
var Pets = Backbone.Collection.extend({
    model : Pet,
    url : "data/pets.json"
});