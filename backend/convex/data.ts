import { query, mutation } from './_generated/server';
import { v } from 'convex/values';
import { httpAction } from './_generated/server';

export const RemoveUser = mutation({
	args: {
		userId: v.id('documents'),
	},
	handler: async (ctx, args) => {
		const users = await ctx.db.delete(args.userId);
	},
});
