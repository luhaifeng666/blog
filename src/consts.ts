/*
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2023-02-08 06:08:12
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2023-02-14 17:15:36
 * @Description: 
 */
// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'My personal website.';
export const SITE_DESCRIPTION = 'Welcome to my website!';
export const MENU = [
  { name: 'Home', link: '/blog/' },
  { name: 'Blog', link: '/blog/', children: [
    { name: 'blog', link: 'blog/' },
    { name: 'jp',  link: 'jp/' }
  ]},
  { name: 'About', link: '/blog/about' },
  { name: 'GitHub', link: 'https://github.com/luhaifeng666', blank: true },
]
