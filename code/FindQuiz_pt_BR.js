var console = require("console");
// Constante que chamar ação  util_pt-BR.js, onde esse ourtra contar as questões do quiz do json
const { buildQuizzes } = require("./lib/util_pt_BR.js");

exports.function = function(searchTerm) {
  return buildQuizzes(searchTerm);
};
