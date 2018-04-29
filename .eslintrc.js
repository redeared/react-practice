module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "linebreak-style": ["error", "windows"],
    "indent": ["error", 4],
    "react/jsx-indent": ["error", 4],
    "react/prop-types": 0
  },
  "env": {
    "browser": true
  }

};