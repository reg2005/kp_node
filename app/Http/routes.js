'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')
Route.group('version1', function () {
  Route.post('auth/register', 'AuthController.register')
  Route.post('auth/login', 'AuthController.login')
  Route.get('get.all.state', 'StateController.allState').middleware('auth')
  Route.resource('crud/post', 'Crud/PostController').middleware('auth')
  Route.resource('users', 'UserController')
}).prefix('api/v1')
Route.any('*', 'NuxtController.render')


