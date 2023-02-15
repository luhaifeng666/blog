/*
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2023-02-08 06:08:12
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2023-02-14 15:05:20
 * @Description: 
 */
import { defineCollection, z } from 'astro:content';

const conllectionGenerator = () => defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
	}),
});

export const collections = { jp: conllectionGenerator(), blog: conllectionGenerator() };
