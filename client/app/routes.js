import angular from 'angular';

angular.module('Es6SonApp')
.config(['$urlRouterProvider', '$stateProvider',
  ($urlRouterProvider, $stateProvider) => {

    $urlRouterProvider.otherwise('/list');

    $stateProvider.state('app', {
      abstract: true,
      url: '/#',
      template: '<div ui-view="header"></div>' +
        '<div ui-view="contents" class="main"></div>' +
        '<div ui-view="footer"></div>',
      resolve: {
        regions: ['Region',
          (Region) => {
            return Region.query();
          }
        ]
      }
    })

    // アプリルート
    .state('app.root', {
      url: '^/',
      abstract: true,
      views: {
        'header@app': {
          templateUrl: 'app/view/header.html'
        },
        'contents@app': {
          templateUrl: 'app/view/home.html'
        },
        'footer@app': {
          templateUrl: 'app/view/footer.html'
        }
      }
    })

    // メンバー一覧
    .state('app.root.list', {
      url: '^/list',
      views: {
        'contents@app': {
          templateUrl: 'app/view/list.html',
          controller: 'ListController'
        }
      }
    })

    // メンバー登録
    .state('app.root.add', {
      url: '^/add',
      views: {
        'contents@app': {
          templateUrl: 'app/view/add.html',
          controller: 'AddController'
        }
      }
    })

    // メンバー編集
    .state('app.root.edit', {
      url: '^/edit/:id',
      views: {
        'contents@app': {
          templateUrl: 'app/view/edit.html',
          controller: 'EditController'
        }
      }
    });

  }
]);
