$(function(){

  $.ajax("recipes.json", {

    success: function(data) {
       var $el = $(".container");
       _.each(data, function(recipe) {
        var preview = new Recipe(recipe);
        $el.append( preview.render() );
      });    

    $("h1").on("click", function(e) {
        var recipeCard = $(e.currentTarget);
        $(".toggle").hide();
        recipeCard.siblings(".toggle").show();
      });
  },

    error: function() {
      console.log("failed to load recipe.json");
    }

  });

});




 