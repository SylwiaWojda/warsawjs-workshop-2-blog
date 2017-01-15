/**
 * Created by user on 15.01.2017.
 */
(function (root) {
    'use strict';
    let AddPostFormView = root.Blog.AddPostFormView;

    let Router = root.Blog.Router;

    class Application {
        constructor() {
            console.log('Tworzę Application');

            this.setupListeners();
            new Router();
        }

        setupListeners() {
            $(document).on('router:home',
                (event) =>
                this.onRouterHomeHandler());

            $(document).on('router:post',
                (event) =>
                    this.onRouterPostHandler());

        }

        onRouterHomeHandler() {
            this.clearDOMContainer();

            new AddPostFormView();

            console.log('jestem w home');
        }

        onRouterPostHandler() {
                    this.clearDOMContainer();
                    $('#view-container').html('<h1>szczegoły</h1>');

                console.log(' jestem w szczegoły router:post');
        }

        clearDOMContainer() {
            $('#view-container').empty();
        }

    }
    new Application();
}(window));