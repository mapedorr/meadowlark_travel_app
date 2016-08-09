var fortuneCookies = [
  "Conquer your fears or they will conquer you.",
  "Rivers need springs.",
  "Do not fear what you don't know.",
  "You will have a pleasant surprise.",
  "Whenever possible, keep it simple."
];

// exports >> is a global variable of Node. It must be used if we want to make
//            something visible outside of the module.
// fortuneCookies >> will be completely hidden out of the module (encapsulation!)
exports.getFortune = function() {
  var idx = Math.floor(Math.random() * fortuneCookies.length);
  return fortuneCookies[idx];
};