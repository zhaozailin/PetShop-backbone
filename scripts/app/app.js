/**
 * Created by zhaozl on 2015/9/22.
 */
$(document).ready(function() {
    var pet = new Pet();
    var pets = new Pets();
    new ViewPetList({collection : pets});
    pets.fetch({reset: true});
});