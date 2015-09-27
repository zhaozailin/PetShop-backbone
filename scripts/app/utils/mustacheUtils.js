/**
 * Created by zhaozl on 2015/9/22.
 * 用于拓展Mustache方法
 */
/**
 * 根据url编译模板
 * @param url
 * @param data
 * @param callback
 */
Mustache.templateFromUrl = function(url, data, callback) {
    $.ajax({
        url : url,
        method : "GET",
        success : function(result) {
            callback(Mustache.render(result, data));
        }
    });
};

Mustache.simpleTemplateFromUrl = function(url, callback) {
    $.ajax({
        url : url,
        method : "GET",
        success : function(result) {
            callback(result);
        }
    });
};

