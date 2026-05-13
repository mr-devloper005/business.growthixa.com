import type { SiteFactoryRecipe } from '@/design/factory/types'

export const SITE_FACTORY_RECIPE: SiteFactoryRecipe = {
  brandPack: 'editorial-luxe',
  navbar: 'compact-bar',
  footer: 'columns-footer',
  homeLayout: 'article-home',
  motionPack: 'minimal',
  primaryTask: 'mediaDistribution',
  enabledTasks: ['mediaDistribution'],
  taskLayouts: {
    mediaDistribution: 'article-journal',
    article: 'article-editorial',
  },
}
