const devtools = {
	install(app) {
		// @ts-ignore
		if (process.env.NODE_ENV === 'development' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
			// @ts-ignore
			window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app;
		}
	},
};

export { devtools };