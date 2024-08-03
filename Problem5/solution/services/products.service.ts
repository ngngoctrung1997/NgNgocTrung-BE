import type { Context, Service, ServiceSchema } from "moleculer";
import type { DbAdapter, DbServiceSettings, MoleculerDbMethods } from "moleculer-db";
import DbService from "moleculer-db";
import MongoDbAdapter from "moleculer-db-adapter-mongo";
// import type { DbServiceMethods } from "../mixins/db.mixin";
// import { create } from "domain";
// import DbMixin from "../mixins/db.mixin";

export interface ProductEntity {
	_id: string;
	name: string;
	price: number;
	quantity: number;
}

export type ActionCreateParams = Partial<ProductEntity>;

export interface ActionQuantityParams {
	id: string;
	value: number;
}

interface ProductSettings extends DbServiceSettings {
	indexes?: Record<string, number>[];
}

interface ProductsThis extends Service<ProductSettings>, MoleculerDbMethods {
	adapter: DbAdapter | MongoDbAdapter;
}

const ProductsService: ServiceSchema<ProductSettings> = {
	name: "products",
	// version: 1

	/**
	 * Mixins
	 */
	mixins: [DbService],
	adapter: new MongoDbAdapter("mongodb+srv://ngngoctrung1997:00fUdhyjGWdAZfxF@test.spsj8ym.mongodb.net/?retryWrites=true&w=majority&appName=Test"),
	collection: "products",
	/**
	 * Settings
	 */
	settings: {
		// Available fields in the responses
		fields: ["_id", "name", "quantity", "price"],

		// Validator for the `create` & `insert` actions.
		entityValidator: {
			name: "string|min:3",
			price: "number|positive",
		},

		indexes: [{ name: 1 }],
	},

	/**
	 * Action Hooks
	 */
	hooks: {
	},

	/**
	 * Actions
	 */
	actions: {
		/**
		 * The "moleculer-db" mixin registers the following actions:
		 *  - list
		 *  - find
		 *  - count
		 *  - create
		 *  - insert
		 *  - update
		 *  - remove
		 */

		/**
		 * Disable default action
		 */
		create: {
			visibility: "private"
		},

		update: {
			visibility: "private"
		},

		remove: {
			visibility: "private"
		},

		// --- ADDITIONAL ACTIONS ---

		/**
		 *
		 */
		createProduct: {
			rest: "POST /createProduct",
			params: {
				name: "string|min:1",
				quantity: "number|integer|positive",
				price: "number|integer|positive",
			},
			async handler(this: ProductsThis, ctx: Context<ActionQuantityParams>): Promise<object> {
				const input = ctx.params;
				return this.adapter.insert(input);
			},
		},

		updateProduct: {
			rest: "PUT /updateProduct",
			params: {
				id: "string",
				name: "string|min:1|optional",
				quantity: "number|integer|positive|optional",
				price: "number|integer|positive|optional",
			},
			async handler(this: ProductsThis, ctx: Context<ActionQuantityParams>): Promise<object> {
				const { id, ...input } = ctx.params;
				return this.adapter.updateById(id, { $set: input })
			},
		},

		removeProduct: {
			rest: "DELETE /removeProduct/:id",
			params: {
				id: "string",
			},
			async handler(this: ProductsThis, ctx: Context<ActionQuantityParams>): Promise<object> {
				return this.adapter.removeById(ctx.params.id);
			},
		},

		listProduct: {
			rest: "GET /listProduct",
			async handler(this: ProductsThis, ctx: Context<ActionQuantityParams>): Promise<object> {
				const result: any = await ctx.call("products.list", {});
				return result.rows;
			},
		},


	},

	/**
	 * Methods
	 */
	methods: {
	},
};

export default ProductsService;
