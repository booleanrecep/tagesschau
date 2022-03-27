import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'

import { router } from './routes/routes'
import App from './App.vue'
import './index.css'

const app = createApp(App)
app.use(createPinia())

Sentry.init({
	app,
	dsn: process.env.SENTRY_DSN,
	integrations: [
		new BrowserTracing({
			routingInstrumentation: Sentry.vueRouterInstrumentation(router),
			tracingOrigins: ['localhost', process.env.MY_SITE as '', /^\//],
		}),
	],
	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,
})
app.use(router)

app.mount('#app')
