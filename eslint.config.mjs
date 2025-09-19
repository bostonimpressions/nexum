// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Disable multiple root element check for Vue 3
    'vue/no-multiple-template-root': 'off',
  },
})
