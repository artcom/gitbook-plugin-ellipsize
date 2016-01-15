"use strict";

module.exports = {
  filters: {
    ellipsize: function(content) {
      return content.replace(/\/\* begin ellipsize \*\/[^]*?\/\* end ellipsize \*\//, "// ...");
    }
  }
};
