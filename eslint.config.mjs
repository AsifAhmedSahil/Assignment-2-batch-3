import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions:{
        globals:{
            ...globals.node
        }
    }
  },
  {
    rules: {
        "no-unused-var": "error",
        "no-undef": "error",
        "prefer-const": "error"
    }
  }
);