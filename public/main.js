var demo = new Vue({
        el: '#main',
        data: {
            // The layout mode, possible values are "grid" or "list".
            layout: 'list',
            articles: [{
                "title": "Kapit4n: Full Stack Developer",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "url": "https://github.com/kapit4n",
                "image": {
                    "large": "https://avatars3.githubusercontent.com/u/277572?v=3&u=75c48d419b7429b014702b00d6c567ff1cd969a5&s=400",
                    "small": "https://avatars3.githubusercontent.com/u/277572?v=3&u=75c48d419b7429b014702b00d6c567ff1cd969a5&s=400"
                }
            }, {
                "title": "Russia says it views the arrival UI Armi",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "url": "https://github.com/kapit4n",
                "image": {
                    "large": "http://ichef-1.bbci.co.uk/news/736/cpsprodpb/FC83/production/_93534646_a299e706-d779-43f4-bad7-4d95c07b3028.jpg",
                    "small": "http://ichef-1.bbci.co.uk/news/736/cpsprodpb/FC83/production/_93534646_a299e706-d779-43f4-bad7-4d95c07b3028.jpg"
                }
            }, {
                "title": "Building Your First App With Vue.js",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "url": "http://tutorialzine.com/2016/08/building-your-first-app-with-vue-js/",
                "image": {
                    "large": "http://cdn.tutorialzine.com/wp-content/uploads/2016/08/building-your-first-app-with-vuejs.png",
                    "small": "http://cdn.tutorialzine.com/wp-content/uploads/2016/08/building-your-first-app-with-vuejs.png"
                }
            }, {
                "title": "5 Practical Examples For Learning Vue.js",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "url": "http://tutorialzine.com/2016/03/5-practical-examples-for-learning-vue-js/",
                "image": {
                    "large": "http://cdn.tutorialzine.com/wp-content/uploads/2016/03/vue1.png",
                    "small": "http://cdn.tutorialzine.com/wp-content/uploads/2016/03/vue1.png"
                }
            }, {
                "title": "Comparison with Other Frameworks",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "url": "https://vuejs.org/v2/guide/comparison.html",
                "image": {
                    "large": "http://react-etc.net/files/2015-11/danguu.jpg",
                    "small": "http://react-etc.net/files/2015-11/danguu.jpg"
                }
            }]
        },
        filters: {
            truncate: function(string, value) {
                return "....";
            }
        }
    });