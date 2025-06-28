// Consts
import { ROUTES } from '~/constants/Routes';

// Types
export type RouteKey = keyof typeof ROUTES;
export type RouteType = (typeof ROUTES)[RouteKey];
export type RoutesType = typeof ROUTES;
