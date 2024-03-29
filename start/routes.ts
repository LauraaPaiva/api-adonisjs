/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import PostsController from '#controllers/posts_controller'
import CommentsController from '#controllers/comments_controller'
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('/', async () => {
      return {
        hello: 'world',
      }
    })
    router.resource('/post', PostsController).apiOnly()
    router.delete('/post/delimage/:id', [PostsController, 'deleteImage'])
    router.post('/post/comments/:blogId', [CommentsController, 'store'])
  })
  .prefix('/api')
