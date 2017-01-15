/**
 * Created by user on 15.01.2017.
 */
(function (root) {
    'use strict';

    class AddPostFormView {
        constructor() {
            console.log('Tworzę AddPostFormView');

            //1. template w DOM
            this.template = $('#template-add-post').html();
            console.log(this.template);
            //2. wyrenerować
            this.render();
            //3. pobrac referencje do formularza. po to zeby ustawic listenery
            //kontroller bedzie sluchal na zmiane w widoku
            //Pobrac referencje do formularza
            this.$form = $('#add-post-form');

            //4. ustawic listenery na submit.
            this.setupListeners();
        }

        render() {
            //pobrac element(div) do ktorego bedziemy wrzucac.
            //$ - nazewnictwo, jesli zmienna zawiera DOM'a
            let $container = $('#view-container');
            let templateCompiled = root.Handlebars.compile(this.template);
            $container.append(templateCompiled);
        }

        setupListeners() {
            this.$form.submit((event) =>
            this.submitFormHandler(event));
        }

        submitFormHandler() {
            console.log(event);
            console.log(event + 'event');
        }

    }
    root.Blog.AddPostFormView = AddPostFormView;

}(window));