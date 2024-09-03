import { Id } from './_generated/dataModel';
import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

export const addUser = mutation({
	args: {
		userId: v.string(),
	},
	handler: async (ctx, args) => {
		const id = 'j57dxz6ywmw97hhhsw1g1c4vah703zhh' as Id<'documents'>;

		const prevUsers = await ctx.db.get(id);

		const documentId = await ctx.db.patch(id, {
			users: [...prevUsers.users, args.userId],
		});

		const newUsers = await ctx.db.get(id);

		return newUsers.users;
	},
});

export const GetAllUsers = query({
	args: {},
	handler: async (ctx) => {
		const id = 'j57dxz6ywmw97hhhsw1g1c4vah703zhh' as Id<'documents'>;
		const users = await ctx.db.get(id);
		return users;
	},
});
