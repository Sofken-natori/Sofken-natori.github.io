import {
    index, route
} from '@react-router/dev/routes';
import type { RouteConfig } from '@react-router/dev/routes';

export default [
    index('routes/home.tsx'),
    route('rationale', 'routes/rationale-index.tsx'),
    route('rationale/:vol', 'routes/rationale.tsx')
] satisfies RouteConfig;
