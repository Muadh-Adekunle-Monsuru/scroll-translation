import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

export const addUser = mutation({
	args: {
		userId: v.string(),
	},
	handler: async (ctx, args) => {
		const documentId = await ctx.db.insert('documents', {
			user: args.userId,
		});

		return documentId;
	},
});

export const GetAllUsers = query({
	args: {},
	handler: async (ctx) => {
		const users = await ctx.db.query('documents').collect();
		return users;
	},
});

export const RemoveUser = mutation({
	args: {
		userId: v.id('documents'),
	},
	handler: async (ctx, args) => {
		const users = await ctx.db.delete(args.userId);
	},
});
