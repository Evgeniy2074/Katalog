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
            type: 'movie',         // или 'tv'
            search: function (query, page) {
                return new Promise(resolve => {
                    const results = [
                        {
                            title: 'Test Movie',
                            url: 'https://example.com/movie1',
                            description: 'Пробный фильм',
                            poster: 'https://via.placeholder.com/200x300?text=Test+Movie',
                            year: '2024'
                        },
                        {
                            title: 'Another Film',
                            url: 'https://example.com/movie2',
                            description: 'Ещё один фильм',
                            poster: 'https://via.placeholder.com/200x300?text=Another+Film',
                            year: '2023'
                        }
                    ];
                    resolve({ list: results, pages: 1 });
                });
            },
            find: function () {
                return Promise.resolve({ list: [], pages: 1 });
            },
            load: function (url) {
                return Promise.resolve({
                    title: 'Test Movie',
                    description: 'Полное описание тестового фильма.',
                    poster: 'https://via.placeholder.com/400x600',
                    lists: [
                        {
                            title: 'Смотреть',
                            items: [
                                {
                                    title: 'Episode 1',
                                    url: 'https://example.com/movie1.mp4',
                                    quality: 'HD',
                                    poster: 'https://via.placeholder.com/200x300'
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
  
