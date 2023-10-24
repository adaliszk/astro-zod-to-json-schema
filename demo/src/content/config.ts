import { defineCollection, z } from 'astro:content';
import { astroZodCollectionsToJsonSchemas } from 'astro-zod-to-json-schema';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };

await astroZodCollectionsToJsonSchemas(collections);
