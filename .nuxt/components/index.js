export { default as Container } from '../..\\components\\bosons\\Container.vue'
export { default as BookDetails } from '../..\\components\\organisms\\BookDetails.vue'
export { default as BookList } from '../..\\components\\organisms\\BookList.vue'
export { default as Footer } from '../..\\components\\organisms\\Footer.vue'
export { default as Header } from '../..\\components\\organisms\\Header.vue'
export { default as Presentation } from '../..\\components\\organisms\\Presentation.vue'
export { default as Releases } from '../..\\components\\organisms\\Releases.vue'
export { default as Chip } from '../..\\components\\atoms\\Chip.vue'
export { default as Logo } from '../..\\components\\atoms\\Logo.vue'
export { default as PageTitle } from '../..\\components\\atoms\\PageTitle.vue'
export { default as BookCard } from '../..\\components\\molecules\\BookCard.vue'
export { default as BookCategories } from '../..\\components\\molecules\\BookCategories.vue'
export { default as BookCover } from '../..\\components\\molecules\\BookCover.vue'
export { default as BookInfo } from '../..\\components\\molecules\\BookInfo.vue'
export { default as AboutTemplate } from '../..\\components\\templates\\AboutTemplate.vue'
export { default as BookDetailsTemplate } from '../..\\components\\templates\\BookDetailsTemplate.vue'
export { default as HomeTemplate } from '../..\\components\\templates\\HomeTemplate.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
