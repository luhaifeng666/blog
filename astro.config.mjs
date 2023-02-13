/*
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2023-02-08 06:08:12
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2023-02-13 17:46:23
 * @Description: 
 */
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://luhaifeng666.github.io',
  base: 'blog',
	integrations: [mdx(), sitemap()],
  server: {
    port: 9001
  }
});
