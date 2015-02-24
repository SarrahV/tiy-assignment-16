var Recipe = (function() {

  var template = JST["recipeCard"]

  function Recipe(data) {
    this.data = data;
  }

  Recipe.prototype = {
    render: function() {
      return $( template(this.data) );

    }
  };

  return Recipe;
})();



