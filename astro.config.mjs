/*
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2023-02-08 06:08:12
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2023-02-15 13:08:13
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