this["JST"] = this["JST"] || {};
this["JST"]["recipeCard"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"recipe\">\n  <h1>"
    + escapeExpression(((helper = (helper = helpers.recipe || (depth0 != null ? depth0.recipe : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"recipe","hash":{},"data":data}) : helper)))
    + "</h1>\n  <div class=\"toggle\">\n    <img src=\""
    + escapeExpression(((helper = (helper = helpers.photo_url || (depth0 != null ? depth0.photo_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_url","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = helpers.recipe || (depth0 != null ? depth0.recipe : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"recipe","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ingredients\"><h2>Ingredients</h2>"
    + escapeExpression(((helper = (helper = helpers.ingredients || (depth0 != null ? depth0.ingredients : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ingredients","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"directions\"><h2>Directions</h2>"
    + escapeExpression(((helper = (helper = helpers.directions || (depth0 != null ? depth0.directions : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"directions","hash":{},"data":data}) : helper)))
    + "</div>\n  </div>\n</div>\n\n";
},"useData":true});