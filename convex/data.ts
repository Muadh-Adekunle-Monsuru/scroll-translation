import { internal } from './_generated/api';
import { httpAction, mutation } from './_generated/server';

import { Id } from './_generated/dataModel';

export const removeUserRoute = httpAction(async (ctx, request) => {
	const { userId } = await request.json();

	//@ts-ignore
	await ctx.runMutation(internal.data.RemoveUser, {
		userId,
	});

	return new Response(null, {
		status: 200,
		headers: new Headers({
			'Access-Control-Allow-Origin': '*',
			Vary: 'origin',
		}),
	});
});

export const RemoveUser = mutation({
	handler: async (ctx) => {
		const id = 'j57dxz6ywmw97hhhsw1g1c4vah703zhh' as Id<'documents'>;

		const prevUsers = await ctx.db.get(id);
		prevUsers.users.pop();

		await ctx.db.patch(id, {
			users: [...prevUsers.users],
		});
	},
});
