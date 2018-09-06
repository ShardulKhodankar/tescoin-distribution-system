const conf = {
  "env": {
      "es6": true,
      "node": true,
      "jest": true
  },
  "plugins": [
      "security"
  ],
  "extends": [
      "eslint:recommended",
      "eslint-config-google",
      "plugin:security/recommended"
  ],
  "parserOptions": {
      "sourceType": "module"
  },
  "rules": {
      "linebreak-style": "off",
      "quotes": [
          "error",
          "single"
      ],
      "indent": [
          "error",
          2
      ],
      "semi": [
          "error",
          "always"
      ],
      "max-len": [ // Non-error, some comments might run long
          "warn",
          { "code": 100 }
      ],
      "impliedStrict": true,
      "security/detect-object-injection": "off"

  }
};

module.exports = conf;