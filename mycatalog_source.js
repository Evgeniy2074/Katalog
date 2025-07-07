(function () {
    'use strict';

    function startPlugin() {
        if (typeof Lampa === 'undefined' || !Lampa.Catalog || !Lampa.Catalog.add) {
            return setTimeout(startPlugin, 1000);
        }

        Lampa.Catalog.add({
            component: 'mycatalog',
            name: 'MyCatalog',
            version: '1.0',
            author: 'Evgeniy2074',
            type: 'movie',

            search: function (query, page) {
                return Promise.resolve({
                    list: [
                        {
                            title: 'Test Movie',
                            url: '',
                            description: 'Описание тестового фильма',
                            poster: 'https://via.placeholder.com/200x300?text=Test+Movie',
                            year: 2024
                        }
                    ],
                    pages: 1
                });
            },

            find: function () {
                return Promise.resolve({
                    list: [
                        {
                            title: 'Главный фильм',
                            url: '',
                            description: 'Фильм отображается на главной',
                            poster: 'https://via.placeholder.com/200x300?text=Главный+фильм',
                            year: 2023
                        }
                    ],
                    pages: 1
                });
            },

            load: function (url) {
                return Promise.resolve({
                    title: 'Test Movie',
                    description: 'Описание тестового фильма',
                    poster: 'https://via.placeholder.com/400x600?text=Poster',
                    lists: [
                        {
                            title: 'Смотреть',
                            items: [
                                {
                                    title: 'Эпизод 1',
                                    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                                    quality: 'HD',
                                    poster: 'https://via.placeholder.com/200x300?text=Episode+1'
                                }
                            ]
                        }
                    ]
                });
            }
        });
    }

    startPlugin();
})();
