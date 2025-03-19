import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'home', renderMode: RenderMode.Prerender },
  { path: 'demo', renderMode: RenderMode.Prerender },

  // { path: '', renderMode: RenderMode.Server, status: 301 },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];
