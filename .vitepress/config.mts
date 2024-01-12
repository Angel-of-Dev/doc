import { defineConfig } from 'vitepress'
import inject from '@rollup/plugin-inject';
import katex from 'markdown-it-katex';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Angel of Dev",
  description: "Software Architect",
  plugins: [
    inject({
      p5: 'p5',
    })
  ],
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      
    // KaTeX, for mathematical notation support in markdown-it.
    ['link', {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'}],
    
    // clarity.microsoft.com  
    [
      'script',
      {},
      `(function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "jknkov0edp");`
    ]
  ],
  markdown: {
    config: md => {
      md.use(katex)
    }
  },
  appearance: "force-dark",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'DCC', link: '/dcc/the-story/' },
      { text: 'Archive', link: '/archive/how-this-site-was-made/' }
    ],
    sidebar: [
      {
        text: 'Archive',
        items: [
          { text: 'How This Site Was Made', link: '/archive/how-this-site-was-made/' }
        ]
      },
      {
        text: 'Dune Coffee Company',
        items: [
          { text: 'The Story', link: '/dcc/the-story/' },
          { text: 'Orbital Dynamics', link: '/dcc/orbital-dynamics/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Angel-of-Dev' }
    ]
  },
  transformHead({assets}) {
    
    // Preload ttf fonts.
    const fontAsset = assets.find(() => /font-name\.\w+\.ttf/)
    if (fontAsset) {
      return [
        [
          'link',
          {
            rel: 'preload',
            href: fontAsset,
            as: 'font',
            type: 'font/ttf'
          }
        ]
      ]
    }
  }
})
