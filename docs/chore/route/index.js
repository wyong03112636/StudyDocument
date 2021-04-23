import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function loadRoutes() {
  const context = require.context('@/router/routes', true, /\.js$/i);
  return context
    .keys()
    .map(context)
    .map(m => m.default)
    .flat();
}

const autoLoadRoutes = loadRoutes();

const routes = autoLoadRoutes.concat([
  {
    path: '*',
    redirect: '/subject/list',
  },
]);

export default new Router({ routes });
