/**
 * Created by user on 15.01.2017.
 */
(function (root){
    'use strict';

    class Router {
        constructor() {
            console.log('Uruchamian konstruktor Router');
            this.router = new root.Routy.Router();
            console.log(root.Routy.Router);
            this.setupRoutes();
            this.router.run();
            console.log(this.router);
        }

        setupRoutes() {
            this.router
                .add('/posts', function () {
                    $(document).trigger('router:home');
                    //)
                    //console.log('posts');
                })
                .add('/posts/:id', function () {
                    $(document).trigger('router:post');
                    console.log('post:id');
                })
                .otherwise('/posts')
        }

    } //zamkniecie klasy

    root.Blog.Router = Router;


} (window));
