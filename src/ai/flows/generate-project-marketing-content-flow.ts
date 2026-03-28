'use server';
/**
 * @fileOverview A Genkit flow for generating project names and marketing tags for real estate projects.
 *
 * - generateProjectMarketingContent - A function that handles the generation process.
 * - GenerateProjectMarketingContentInput - The input type for the generateProjectMarketingContent function.
 * - GenerateProjectMarketingContentOutput - The return type for the generateProjectMarketingContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectMarketingContentInputSchema = z.object({
  location: z
    .string()
    .describe('The geographical location of the real estate project (e.g., "Punta Cana, Verón").'),
  features: z
    .string()
    .describe(
      'Key features and amenities of the project (e.g., "Close to beach, luxury amenities, gated community").'
    ),
  targetAudience: z
    .string()
    .describe(
      'The primary demographic or type of buyer the project aims to attract (e.g., "High-net-worth individuals, investors, retirees").'
    ),
  projectType: z
    .string()
    .describe('The type of real estate project (e.g., "lotification", "condominium", "villa").'),
  additionalDetails: z
    .string()
    .optional()
    .describe('Any additional relevant information or unique selling propositions.'),
});
export type GenerateProjectMarketingContentInput = z.infer<
  typeof GenerateProjectMarketingContentInputSchema
>;

const GenerateProjectMarketingContentOutputSchema = z.object({
  projectNames: z
    .array(z.string())
    .describe('A list of catchy and appealing project names.'),
  marketingTags: z
    .array(z.string())
    .describe('A list of strategic marketing tags or keywords.'),
});
export type GenerateProjectMarketingContentOutput = z.infer<
  typeof GenerateProjectMarketingContentOutputSchema
>;

export async function generateProjectMarketingContent(
  input: GenerateProjectMarketingContentInput
): Promise<GenerateProjectMarketingContentOutput> {
  return generateProjectMarketingContentFlow(input);
}

const generateProjectMarketingContentPrompt = ai.definePrompt({
  name: 'generateProjectMarketingContentPrompt',
  input: {schema: GenerateProjectMarketingContentInputSchema},
  output: {schema: GenerateProjectMarketingContentOutputSchema},
  prompt: `You are a highly creative and strategic marketing expert specializing in luxury Caribbean real estate. Your task is to generate compelling project names and strategic marketing tags for a new real estate development. The goal is to attract high-value clients and highlight the unique selling points.

Project Details:
Location: {{{location}}}
Features: {{{features}}}
Target Audience: {{{targetAudience}}}
Project Type: {{{projectType}}}
Additional Information: {{{additionalDetails}}}

Generate 3-5 unique and appealing project names that evoke luxury, exclusivity, and the Caribbean lifestyle.
Generate 5-8 strategic marketing tags (short phrases or keywords) that capture the essence of the project, its benefits, and target market. These tags should be perfect for a landing page to attract investors and luxury buyers.

Ensure the output is in JSON format, matching the defined output schema.`,
});

const generateProjectMarketingContentFlow = ai.defineFlow(
  {
    name: 'generateProjectMarketingContentFlow',
    inputSchema: GenerateProjectMarketingContentInputSchema,
    outputSchema: GenerateProjectMarketingContentOutputSchema,
  },
  async (input) => {
    const {output} = await generateProjectMarketingContentPrompt(input);
    return output!;
  }
);
