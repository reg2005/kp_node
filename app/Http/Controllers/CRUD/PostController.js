'use strict'
const Post = use('App/Model/Post')
const Example = use('App/Model/Example')
const Validator = use('Validator')

class PostController {

  * index (request, response) {
    //
  }

  * create (request, response) {
    //
  }

  * store (request, response) {
    const id = request.input('id', null)
    const postData = request.only('title')
    const exampleData = request.input('example')
    let validation = yield Validator.validate(postData, Post.rules)

    if (validation.fails()) {
      response.status(401).json({message: validation.messages()})
      return
    }

    for (let i = 0; i < exampleData.length; i++) {
      let validation = yield Validator.validate(exampleData[i], Example.rules)
      if (validation.fails()) {
        response.status(401).json({message: validation.messages()})
        return
      }
    }

    if (id) {
      var post = yield Post.findOrFail(id)
      post.fill(postData)
      post.save()
      //TODO найти все examples в бд
      //определить записи требующие удаления
      //удалить их

      //Обновить записи если это требуется
    } else {
      var post = yield Post.create(postData)
      yield post.example().createMany(exampleData)
    }


    const postResult = yield Post.query()
      .with('example')
      .where('id', post.id)
      .first()

    response.send({post: postResult})

  }

  * show (request, response) {
    //
  }

  * edit (request, response) {
    //
  }

  * update (request, response) {
    //
  }

  * destroy (request, response) {
    //
  }

}

module.exports = PostController
