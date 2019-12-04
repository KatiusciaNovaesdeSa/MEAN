(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\n  <head>\n      <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n      <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n      <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n  </head>\n<body>\n  <div class='header'>\n<nav class=\"navbar navbar-dark bg-dark\">\n        <div class=\"container-fluid\">\n            <form class=\"form-inline\">    \n                  <button class=\"btn btn-info\"\n                    routerLink=\"/\" type=\"button\"><a>\n                      Home</a>\n                  </button> <br>\n              <button id=\"qsLoginBtn\"\n                class=\"btn btn-info\"\n                *ngIf=\"!auth.isAuthenticated()\"\n                (click)=\"auth.login()\" type=\"button\">\n                  Log In\n              </button><br>\n      \n              <button id=\"qsLogoutBtn\"\n                class=\"btn btn-info\"\n                *ngIf=\"auth.isAuthenticated()\"\n                (click)=\"auth.logout()\" type=\"button\">\n                  Log Out\n              </button>\n      \n            </form>\n        </div>\n      </nav>\n<h1 style=\"font-family: 'Raleway',sans-serif; font-size: 62px; font-weight: 800; line-height: 72px; margin: -55px 0 0px 24px; text-align: center; text-transform: uppercase;\">{{title}}</h1>\n</div>\n<router-outlet></router-outlet>\n    </body>\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrator/add/add.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrator/add/add.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n\n\n\n<div class=\"card\">  <div class=\"center\">\n  <div class=\"card-header info-color white-text text-center py-4\">\n    <h2 style=\"font-family: 'Raleway',sans-serif; font-size: 35px; font-weight: 800; line-height: 72px; margin: 0 0 24px;\n     text-align: center; text-transform: uppercase;\">{{ title }} </h2>\n  </div>\n\n  \n\n  <div class=\"panel-body\">\n    <form [formGroup]=\"angForm\" novalidate>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Player Name</label><br>\n        <input class=\"tf\" type=\"text\" class=\"form-control\" formControlName=\"playerName\" #playerName />\n      </div>\n      <div *ngIf=\"angForm.controls['playerName'].invalid && (angForm.controls['playerName'].dirty || angForm.controls['playerName'].touched)\" class=\"alert alert-danger\">\n      <div *ngIf=\"angForm.controls['playerName'].errors.required\">Player Name is required.</div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Rank</label><br>\n         <select class=\"form-control tf2\" formControlName=\"rank\" [(ngModel)]='rank.rank'>\n              <option class=\"tf\" *ngFor=\"let r of rank\" [ngValue]='r'>\n                {{r}}\n              </option>\n            </select>\n      </div>\n      <div *ngIf=\"angForm.controls['rank'].invalid && (angForm.controls['rank'].dirty || angForm.controls['rank'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['rank'].errors.required\"> Rank is required.</div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Score</label><br>\n        <input type=\"text\" class=\"form-control\" formControlName=\"score\" #score/>\n      </div>\n      <div *ngIf=\"angForm.controls['score'].invalid && (angForm.controls['score'].dirty || angForm.controls['score'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['score'].errors.required\"> Score is required.</div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Time</label><br>\n        <input type=\"text\" class=\"form-control\" formControlName=\"time\" #time/>\n      </div>\n      <div *ngIf=\"angForm.controls['time'].invalid && (angForm.controls['time'].dirty || angForm.controls['time'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['time'].errors.required\">  Time is required.</div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Games Played</label><br>\n        <select class=\"form-control tf2\" formControlName=\"gamesPlayed\" #gamesPlayed>\n            <option *ngFor=\"let game of games\" [ngValue]='game.title'>\n              {{game.title}}\n            </option>\n          </select>\n      </div>\n      <div *ngIf=\"angForm.controls['gamesPlayed'].invalid && (angForm.controls['gamesPlayed'].dirty || angForm.controls['gamesPlayed'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['gamesPlayed'].errors.required\"> Games Played is required.</div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Status</label><br>\n        <select class=\"tf2\" formControlName=\"status\" [(ngModel)] = \"statuses.status\">\n            <option  *ngFor='let stat of statuses' [ngValue]='stat.st' >\n              {{stat.st}}\n            </option>\n          </select>\n      </div>\n      <div *ngIf=\"angForm.controls['status'].invalid && (angForm.controls['status'].dirty || angForm.controls['status'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['status'].errors.required\"> Status is required.</div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn\" (click)=\"addPlayer(playerName.value, rank.rank, score.value, time.value, gamesPlayed.value, statuses.status)\" [disabled]=\"angForm.pristine || angForm.invalid\" class=\"btn btn-primary\">Add</button>\n     </div>\n     <div class=\"form-group\">\n        <button class=\"btn\"><a routerLink=\"/index\">Back</a></button>\n     </div>\n    </form>\n  </div>\n\n</div></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrator/dashboard/adminDash.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrator/dashboard/adminDash.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n\n<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"/index\">Game Lobby</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n        <li>\n          <a routerLink=\"/admin\" routerLinkActive=\"active\" style=\"font-size: 30px;\">Home</a>\n          <a routerLink=\"/index\" routerLinkActive=\"active\" style=\"font-size: 30px;\">Players</a>\n          <a routerLink=\"/games\" routerLinkActive=\"active\" style=\"font-size: 30px;\">Games</a>\n        </li>\n    </ul>\n  </div>\n</nav>\n\n    <div class=\"center\">\n    <div><br>\n        <h3 style=\"font-family: 'Raleway',sans-serif; font-size: 35px; font-weight: 800; line-height: 72px; margin: 0 0 24px; text-align: center; text-transform: uppercase;\">{{title}}\n        </h3>\n    </div>\n    <p>\n      Welcome Adminstrator!\n    </p>\n   \n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrator/edit/edit.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrator/edit/edit.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n      <div>\n        <ul class=\"nav\">\n          <li>\n            <a routerLink=\"/admin\" routerLinkActive=\"active\">Home</a>\n            <a routerLink=\"/index\" routerLinkActive=\"active\">Players</a>\n            <a routerLink=\"/games\" routerLinkActive=\"active\">Games</a>\n          </li>\n        </ul>\n    </div>\n\n<div class='center'>\n  <div class=\"panel-body\">\n    <form [formGroup]=\"angForm\" novalidate>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Player Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"playerName\" #playerName [(ngModel)] = \"player.playerName\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Current Rank:</label>\n        <label type=\"text\" class=\"form-control\" >{{player.rank}}</label>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">New Rank</label>\n        <select class=\"form-control\" formControlName=\"newrank\" [(ngModel)]='rank.rank'>\n            <option *ngFor=\"let r of rank\" [ngValue]='r'>\n              {{r}}\n            </option>\n          </select>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Score</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"score\" #score [(ngModel)] = \"player.score\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Time</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"time\" #time [(ngModel)] = \"player.time\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Favourite Game</label>\n        <select class=\"form-control\" formControlName=\"gamesPlayed\" #gamesPlayed [(ngModel)]='player.gamesPlayed'>\n            <option *ngFor=\"let game of games\" [ngValue]='game.title'>\n              {{game.title}}\n            </option>\n          </select>\n      </div>\n      \n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Status</label>\n        <select  formControlName=\"status\" [(ngModel)] = \"statuses.status\">\n          <option  *ngFor='let stat of statuses' [ngValue]='stat.st' >\n            {{stat.st}}\n          </option>\n        </select>\n      </div>\n      \n      <div class=\"form-group\">\n        <button  (click)=\"updatePlayer(playerName.value, rank.rank, score.value, time.value, gamesPlayed.value, statuses.status)\">Update</button>\n     </div>\n    </form>\n  </div></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrator/games/games.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrator/games/games.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n  \n    <nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"/index\">Game Lobby</a>\n        </div>\n        <ul class=\"nav navbar-nav\">\n            <li>\n              <a routerLink=\"/admin\" routerLinkActive=\"active\" style=\"font-size: 30px;\">Home</a>\n              <a routerLink=\"/index\" routerLinkActive=\"active\" style=\"font-size: 30px;\">Players</a>\n              <a routerLink=\"/games\" routerLinkActive=\"active\" style=\"font-size: 30px;\">Games</a>\n            </li>\n        </ul>\n      </div>\n    </nav>\n\n\n          <div class=\"center\"><br>\n          <h2 style=\"font-family: 'Raleway',sans-serif; font-size: 35px; font-weight: 800; line-height: 72px; margin: 0 0 24px; text-align: center; text-transform: uppercase;\">{{title}}</h2>\n          <label class='filter'>Filter Search</label>\n          <input [(ngModel)]=\"searchText\" placeholder=\"Search\"><br><br><br>\n          <table class=\"table table-bordered\">\n              <thead>\n              <tr>\n                  <td>Title</td>\n                  <td>Platform</td>\n                  <td>Genre</td>\n                  <td>Rating</td>\n                  <td>Publisher</td>\n                  <td>Release</td>\n                  <td>Status</td>\n              </tr>\n              </thead>\n            \n              <tbody>\n                  <tr *ngFor=\"let game of games | filter : {title: searchText, platform: searchText, \n                      genre: searchText, rating: searchText, publisher: searchText, release: searchText, status: searchText}  \">\n                      <td>{{ game.title }}</td>\n                      <td>{{ game.platform }}</td>\n                      <td>{{ game.genre }}</td>\n                      <td>{{ game.rating }}</td>\n                      <td>{{ game.publisher }}</td>\n                      <td>{{ game.release }}</td>\n                      <td>{{ game.status }}</td>\n                  </tr>\n              </tbody>\n            </table></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrator/index/index.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrator/index/index.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n\n\n<div>\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"/index\">Game Lobby</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n          <li>\n            <a routerLink=\"/admin\" routerLinkActive=\"active\" style=\"font-size: 30px;\">Home</a>\n            <a routerLink=\"/index\" routerLinkActive=\"active\" style=\"font-size: 30px;\">Players</a>\n            <a routerLink=\"/games\" routerLinkActive=\"active\" style=\"font-size: 30px;\">Games</a>\n          </li>\n      </ul>\n    </div>\n  </nav>\n\n\n\n          <div class=\"center\"><br>\n          <h3 style=\"font-family: 'Raleway',sans-serif; font-size: 35px; font-weight: 800; line-height: 72px; margin: 0 0 24px; text-align: center; text-transform: uppercase;\">{{title}}</h3>\n    \n          <button class=\"btn btn-info\"><a routerLink='/add'> Add Player</a></button>\n\n<label class='filter'>Filter Search</label>\n<input style=\"text-align: center;\" [(ngModel)]=\"searchText\" placeholder=\"search text goes here\">\n<br><br><br>\n<table class=\"table table-bordered\">\n    <thead>\n    <tr>\n        <td>Player Name</td>\n        <td>Rank</td>\n        <td>Score</td>\n        <td>Time</td>\n        <td>Games Played</td>\n        <td>Status</td>\n        <td colspan=\"2\">Actions</td>\n    </tr>\n    </thead>\n  \n    <tbody>\n        <tr *ngFor=\"let player of players | filter: {playerName:searchText, rank:searchText,\n            score:searchText, time:searchText, gamesPlayed:searchText, status:searchText}\">\n            <td>{{ player.playerName }}</td>\n            <td>{{ player.rank }}</td>\n            <td>{{ player.score }}</td>\n            <td>{{ player.time }}</td>\n            <td>{{ player.gamesPlayed }}</td>\n            <td>{{ player.status }}</td>\n            <td><button class=\"btn btn-info\"><a [routerLink]=\"['/edit', player._id]\" >Edit</a></button></td>\n            <td><button (click)=\"deletePlayer(player._id)\" class=\"btn btn-primary\">Delete</button></td>\n        </tr>\n    </tbody>\n  </table>\n </div></div>\n\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/callback/callback.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/callback/callback.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loading\">\n  <img src=\"assets/loading.svg\" alt=\"loading\">\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/playerComponents/join/join.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/playerComponents/join/join.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n\n\n  <div>\n        <ul class=\"nav\">\n          <li>\n              <a routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n          </li>\n        </ul>\n    </div>\n    <div class='center'>\n<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      {{ title }}\n    </div>\n\n    <div class=\"panel-body\">\n      <form [formGroup]=\"angForm\" novalidate class=\"modal-content animate\">\n        <div class=\"form-group\">\n          <label class=\"col-md-4\">Player Name: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>\n          <label class=\"form-control\" >{{player.playerName}}</label>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-4\">Rank: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>\n          <label class=\"form-control\" >{{player.rank}}</label>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-4\">Score: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>\n          <label class=\"form-control\" >{{player.score}}</label>\n        </div>\n         <div class=\"form-group\">\n          <label class=\"col-md-4\">Time: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>\n          <label class=\"form-control\" >{{player.time}}</label>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-4\">Games Played: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>\n          <label class=\"form-control\" >{{player.gamesPlayed}}</label>            \n        </div>\n         <div class=\"form-group\">\n          <label class=\"col-md-4\">Status: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>\n          <label class=\"form-control\" >{{player.status}}</label>\n        </div>\n        <div class=\"form-group\">\n        <label class=\"col-md-4\">Game: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>\n        <select class=\"form-control\" normControlName=\"gameControl\"g >\n            <option *ngFor=\"let game of games\">\n              {{game.title}}\n            </option>\n          </select>\n        </div>\n                <div class=\"form-group\">\n                  <button class=\"btn btn-info\" (click)=\"joinGame(player.playerName, player.rank, player.score, player.time, player.gamesPlayed, player.status)\" >Join</button>\n               </div>\n              </form>\n              </div></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/playerComponents/player_dashboard/player_dashboard.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/playerComponents/player_dashboard/player_dashboard.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n\n\n<div>\n\n    <nav class=\"navbar navbar-inverse\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n              <a class=\"navbar-brand\" href=\"/index\">Game Lobby</a>\n            </div>\n        <ul class=\"nav\">\n          <li>\n              <a routerLink=\"/players\" routerLinkActive=\"active\" style=\"font-size: 30px;\">Players</a>\n          </li>\n          <li>\n            <a routerLink=\"/admin\" routerLinkActive=\"active\" *ngIf=\"auth.isAuthenticated()\">Admin</a>\n          </li>\n        </ul>\n    </div><br>\n    </nav>\n\n    <div class='center'>\n    <h2 style=\"font-family: 'Raleway',sans-serif; font-size: 35px; font-weight: 800; line-height: 72px; margin: 0 0 24px; text-align: center; text-transform: uppercase;\">\n    Welcome Players!!</h2>\n    \n    \n</div></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/playerComponents/players/players.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/playerComponents/players/players.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n\n<body>\n\n\n<nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"/index\">Game Lobby</a>\n        </div>\n      <ul class=\"nav navbar-nav\">\n        <li>\n            <a routerLink=\"/home\" routerLinkActive=\"active\" style=\"font-size: 30px;\">Home</a>\n        </li>\n      </ul>\n  </div>\n</nav>\n\n  <div class=\"center\">\n<br>\n  <h2 style=\"font-family: 'Raleway',sans-serif; font-size: 35px; font-weight: 800; line-height: 72px; margin: 0 0 24px; text-align: center; text-transform: uppercase;\">{{title}}</h2>\n  <label class='filter'>Filter Search</label>\n  <input [(ngModel)]=\"searchText\" placeholder=\"search text goes here\">\n<br><br><br>\n\n<table class=\"table table-bordered\">\n    <thead>\n    <tr>\n        <td>Player Name</td>\n        <td>Rank</td>\n        <td>Score</td>\n        <td>Time</td>\n        <td>Games Played</td>\n        <td>Status</td>\n        <td>Action</td>\n    </tr>\n    </thead>\n  \n    <tbody>\n        <tr *ngFor=\"let player of players | filter: {playerName:searchText, rank:searchText,\n            score:searchText, time:searchText, gamesPlayed:searchText, status:searchText}\">\n            <td>{{ player.playerName }}</td>\n            <td>{{ player.rank }}</td>\n            <td>{{ player.score }}</td>\n            <td>{{ player.time }}</td>\n            <td>{{ player.gamesPlayed }}</td>\n            <td>{{ player.status }}</td>\n            <td *ngIf=\"player.status=='Available'\">\n              <button class=\"btn btn-info\"><a [routerLink]=\"['/join', player._id]\">Join Game</a> </button>\n            </td>\n        </tr>\n    </tbody>\n  </table>\n    </div>\n        <router-outlet></router-outlet>\n</body>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nh1{\n    margin-left: 653px;\n}\n.nav{\n    border:1px solid #ccc;\n    border-width:1px 0;\n    list-style:none;\n    margin:0;\n    padding:0;\n    text-align:center;\n}\n.nav li{\n    display:inline;\n}\n.nav a{\n    display:inline-block;\n    padding:10px;\n    margin-left: 100px;\n    padding: 4px 5px;\n    text-align: center;\n    text-decoration: none;\n}\ntable, th, td {\n    border: 1px solid black;\n }\n.containerContent{\n        margin: 15px 270px 0 425px;\n}\n.adminbtnstyle{\n    margin: -45px 0 0 765px;\n}\n.adminbtn{\n    background-color: lightgrey;\n    border: 2px solid darkgray;\n    padding: 4px 5px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    cursor: pointer;\n}\n.adminLink{\n    color: black;\n    text-decoration: none;\n}\n#bg {\n  position: fixed; \n  top: 0; \n  left: 0; \n\n  /* Preserve aspet ratio */\n  min-width: 100%;\n  min-height: 100%;\n}\n.btn\n{\n    width: 150px;\n    color: white;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLHVCQUF1QjtDQUMxQjtBQUNEO1FBQ1EsMEJBQTBCO0FBQ2xDO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87O0VBRVAseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFFQTs7SUFFSSxZQUFZO0lBQ1osWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5oMXtcbiAgICBtYXJnaW4tbGVmdDogNjUzcHg7XG59XG4ubmF2e1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItd2lkdGg6MXB4IDA7XG4gICAgbGlzdC1zdHlsZTpub25lO1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbi5uYXYgbGl7XG4gICAgZGlzcGxheTppbmxpbmU7XG59XG4ubmF2IGF7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnRhYmxlLCB0aCwgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuIH1cbi5jb250YWluZXJDb250ZW50e1xuICAgICAgICBtYXJnaW46IDE1cHggMjcwcHggMCA0MjVweDtcbn1cbi5hZG1pbmJ0bnN0eWxle1xuICAgIG1hcmdpbjogLTQ1cHggMCAwIDc2NXB4O1xufVxuLmFkbWluYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JheTtcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRtaW5MaW5re1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNiZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDsgXG4gIHRvcDogMDsgXG4gIGxlZnQ6IDA7IFxuXG4gIC8qIFByZXNlcnZlIGFzcGV0IHJhdGlvICovXG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmJ0blxue1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/services/auth.service */ "./src/app/services/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'GAME LOBBY';
        auth.handleAuthentication();
    }
    AppComponent.ctorParameters = function () { return [
        { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_players_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/players.service */ "./src/app/services/players.service.ts");
/* harmony import */ var _filter_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter/filter.pipe */ "./src/app/filter/filter.pipe.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_playerComponents_player_dashboard_player_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/playerComponents/player_dashboard/player_dashboard.component */ "./src/app/components/playerComponents/player_dashboard/player_dashboard.component.ts");
/* harmony import */ var _components_administrator_index_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/administrator/index/index.component */ "./src/app/components/administrator/index/index.component.ts");
/* harmony import */ var _components_administrator_add_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/administrator/add/add.component */ "./src/app/components/administrator/add/add.component.ts");
/* harmony import */ var _components_administrator_edit_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/administrator/edit/edit.component */ "./src/app/components/administrator/edit/edit.component.ts");
/* harmony import */ var _components_administrator_dashboard_admDash_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/administrator/dashboard/admDash.component */ "./src/app/components/administrator/dashboard/admDash.component.ts");
/* harmony import */ var _components_administrator_games_games_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/administrator/games/games.component */ "./src/app/components/administrator/games/games.component.ts");
/* harmony import */ var _components_playerComponents_players_players_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/playerComponents/players/players.component */ "./src/app/components/playerComponents/players/players.component.ts");
/* harmony import */ var _components_playerComponents_join_join_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/playerComponents/join/join.component */ "./src/app/components/playerComponents/join/join.component.ts");
/* harmony import */ var _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/callback/callback.component */ "./src/app/components/callback/callback.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



















//auth0

var routes = [
    { path: '', component: _components_playerComponents_player_dashboard_player_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["PlayerDashboardComponent"] },
    { path: 'home', component: _components_playerComponents_player_dashboard_player_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["PlayerDashboardComponent"] },
    { path: 'index', component: _components_administrator_index_index_component__WEBPACK_IMPORTED_MODULE_10__["IndexComponent"] },
    { path: 'add', component: _components_administrator_add_add_component__WEBPACK_IMPORTED_MODULE_11__["AddComponent"] },
    { path: 'edit/:id', component: _components_administrator_edit_edit_component__WEBPACK_IMPORTED_MODULE_12__["EditComponent"] },
    { path: 'admin', component: _components_administrator_dashboard_admDash_component__WEBPACK_IMPORTED_MODULE_13__["AdminDashComponent"] },
    { path: 'players', component: _components_playerComponents_players_players_component__WEBPACK_IMPORTED_MODULE_15__["PlayersComponent"] },
    { path: 'games', component: _components_administrator_games_games_component__WEBPACK_IMPORTED_MODULE_14__["GamesComponent"] },
    { path: 'join/:id', component: _components_playerComponents_join_join_component__WEBPACK_IMPORTED_MODULE_16__["JoinComponent"] },
    { path: 'callback/', component: _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_17__["CallbackComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_playerComponents_player_dashboard_player_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["PlayerDashboardComponent"],
                _components_administrator_index_index_component__WEBPACK_IMPORTED_MODULE_10__["IndexComponent"],
                _components_administrator_add_add_component__WEBPACK_IMPORTED_MODULE_11__["AddComponent"],
                _components_administrator_edit_edit_component__WEBPACK_IMPORTED_MODULE_12__["EditComponent"],
                _components_administrator_dashboard_admDash_component__WEBPACK_IMPORTED_MODULE_13__["AdminDashComponent"],
                _components_administrator_games_games_component__WEBPACK_IMPORTED_MODULE_14__["GamesComponent"],
                _components_playerComponents_players_players_component__WEBPACK_IMPORTED_MODULE_15__["PlayersComponent"],
                _components_playerComponents_join_join_component__WEBPACK_IMPORTED_MODULE_16__["JoinComponent"],
                _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_17__["CallbackComponent"],
                _filter_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            providers: [_services_players_service__WEBPACK_IMPORTED_MODULE_6__["PlayersService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/administrator/add/add.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/administrator/add/add.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.center\n{\n    text-align: center;\n    background-size: cover;\n}\n\nh1{\n    margin-left: 653px;\n}\n\n.nav{\n    border:1px solid #ccc;\n    border-width:1px 0;\n    list-style:none;\n    margin:0;\n    padding:0;\n    text-align:center;\n}\n\n.nav li{\n    display:inline;\n}\n\n.nav a{\n    display:inline-block;\n    padding:10px;\n    margin-left: 100px;\n    padding: 4px 5px;\n    text-align: center;\n    text-decoration: none;\n}\n\ntable, th, td {\n    border: 1px solid black;\n }\n\n.containerContent{\n        margin: 15px 270px 0 425px;\n}\n\n.adminbtnstyle{\n    margin: -45px 0 0 765px;\n}\n\n.adminbtn{\n    background-color: lightgrey;\n    border: 2px solid darkgray;\n    padding: 4px 5px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    cursor: pointer;\n}\n\n.adminLink{\n    color: black;\n    text-decoration: none;\n}\n\n.btn{\n    width: 150px;\n}\n\n.tf\n{\n    width: 300px;\n}\n\n.tf2\n{\n    width:173px;\n}\n\n.btn\n{\n    width: 150px;\n    \n    color: white;\n   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbmlzdHJhdG9yL2FkZC9hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0NBQzFCOztBQUNEO1FBQ1EsMEJBQTBCO0FBQ2xDOztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFDQTs7SUFFSSxZQUFZOztJQUVaLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbmlzdHJhdG9yL2FkZC9hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNlbnRlclxue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5oMXtcbiAgICBtYXJnaW4tbGVmdDogNjUzcHg7XG59XG4ubmF2e1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItd2lkdGg6MXB4IDA7XG4gICAgbGlzdC1zdHlsZTpub25lO1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbi5uYXYgbGl7XG4gICAgZGlzcGxheTppbmxpbmU7XG59XG4ubmF2IGF7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnRhYmxlLCB0aCwgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuIH1cbi5jb250YWluZXJDb250ZW50e1xuICAgICAgICBtYXJnaW46IDE1cHggMjcwcHggMCA0MjVweDtcbn1cbi5hZG1pbmJ0bnN0eWxle1xuICAgIG1hcmdpbjogLTQ1cHggMCAwIDc2NXB4O1xufVxuLmFkbWluYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JheTtcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRtaW5MaW5re1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5idG57XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4udGZcbntcbiAgICB3aWR0aDogMzAwcHg7XG59XG5cbi50ZjJcbntcbiAgICB3aWR0aDoxNzNweDtcbn1cbi5idG5cbntcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgXG4gICAgY29sb3I6IHdoaXRlO1xuICAgXG59Il19 */");

/***/ }),

/***/ "./src/app/components/administrator/add/add.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/administrator/add/add.component.ts ***!
  \***************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_players_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/players.service */ "./src/app/services/players.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/games.service */ "./src/app/services/games.service.ts");






var AddComponent = /** @class */ (function () {
    function AddComponent(gservice, playerservice, fb, router) {
        this.gservice = gservice;
        this.playerservice = playerservice;
        this.fb = fb;
        this.router = router;
        this.rank = [];
        this.statuses = [{ id: 1, st: 'Available' }, { id: 2, st: 'Unavailable' }];
        this.title = 'Add Player';
    }
    AddComponent.prototype.getGames = function () {
        var _this = this;
        this.gservice.getGames().subscribe(function (res) {
            _this.games = res;
        });
    };
    AddComponent.prototype.createRanking = function () {
        for (var i = 1; i <= 100; i++) {
            this.rank.push(i);
        }
        return this.rank;
    };
    AddComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            playerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            score: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gamesPlayed: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    AddComponent.prototype.addPlayer = function (playerName, rank, score, time, gamesPlayed, status) {
        this.playerservice.addPlayer(playerName, rank, score, time, gamesPlayed, status, "Join Game");
    };
    AddComponent.prototype.ngOnInit = function () {
        this.getGames();
        this.createRanking();
        this.createForm();
    };
    AddComponent.ctorParameters = function () { return [
        { type: _services_games_service__WEBPACK_IMPORTED_MODULE_5__["GamesService"] },
        { type: _services_players_service__WEBPACK_IMPORTED_MODULE_2__["PlayersService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrator/add/add.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add.component.css */ "./src/app/components/administrator/add/add.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_games_service__WEBPACK_IMPORTED_MODULE_5__["GamesService"], _services_players_service__WEBPACK_IMPORTED_MODULE_2__["PlayersService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/components/administrator/dashboard/admDash.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/administrator/dashboard/admDash.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminDashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashComponent", function() { return AdminDashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminDashComponent = /** @class */ (function () {
    function AdminDashComponent() {
        this.title = 'Administrator View';
    }
    AdminDashComponent.prototype.ngOnInit = function () {
    };
    AdminDashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminDash',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adminDash.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrator/dashboard/adminDash.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adminDash.component.css */ "./src/app/components/administrator/dashboard/adminDash.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminDashComponent);
    return AdminDashComponent;
}());



/***/ }),

/***/ "./src/app/components/administrator/dashboard/adminDash.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/administrator/dashboard/adminDash.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nul {\n    list-style: none; /* Remove list bullets */\n}\n\n.center\n{\n    text-align: center;\n    background-size: cover;\n}\n\nh1{\n    margin-left: 653px;\n}\n\n.nav{\n    border:1px solid #ccc;\n    border-width:1px 0;\n    list-style:none;\n    margin:0;\n    padding:0;\n    text-align:center;\n    margin-right: 125px;\n}\n\n.nav li{\n    display:inline;\n}\n\n.nav a{\n    display:inline-block;\n    padding:10px;\n    margin-left: 100px;\n    padding: 4px 5px;\n    text-align: center;\n    text-decoration: none;\n}\n\ntable, th, td {\n    border: 1px solid black;\n }\n\n.containerContent{\n        margin: 15px 270px 0 425px;\n}\n\n.adminbtnstyle{\n    margin: -45px 0 0 765px;\n}\n\n.adminbtn{\n    background-color: lightgrey;\n    border: 2px solid darkgray;\n    padding: 4px 5px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    cursor: pointer;\n}\n\n.adminLink{\n    color: black;\n    text-decoration: none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbmlzdHJhdG9yL2Rhc2hib2FyZC9hZG1pbkRhc2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0IsRUFBRSx3QkFBd0I7QUFDOUM7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtDQUMxQjs7QUFDRDtRQUNRLDBCQUEwQjtBQUNsQzs7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5pc3RyYXRvci9kYXNoYm9hcmQvYWRtaW5EYXNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lOyAvKiBSZW1vdmUgbGlzdCBidWxsZXRzICovXG59XG5cbi5jZW50ZXJcbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaDF7XG4gICAgbWFyZ2luLWxlZnQ6IDY1M3B4O1xufVxuLm5hdntcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXdpZHRoOjFweCAwO1xuICAgIGxpc3Qtc3R5bGU6bm9uZTtcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMjVweDtcbn1cbi5uYXYgbGl7XG4gICAgZGlzcGxheTppbmxpbmU7XG59XG4ubmF2IGF7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnRhYmxlLCB0aCwgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuIH1cbi5jb250YWluZXJDb250ZW50e1xuICAgICAgICBtYXJnaW46IDE1cHggMjcwcHggMCA0MjVweDtcbn1cbi5hZG1pbmJ0bnN0eWxle1xuICAgIG1hcmdpbjogLTQ1cHggMCAwIDc2NXB4O1xufVxuLmFkbWluYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JheTtcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRtaW5MaW5re1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/administrator/edit/edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/administrator/edit/edit.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.center\n{\n    text-align: center;\n    background-size: cover;\n}\n\nh1{\n    margin-left: 653px;\n}\n\n.nav{\n    border:1px solid #ccc;\n    border-width:1px 0;\n    list-style:none;\n    margin:0;\n    padding:0;\n    text-align:center;\n}\n\n.nav li{\n    display:inline;\n}\n\n.nav a{\n    display:inline-block;\n    padding:10px;\n    margin-left: 100px;\n    padding: 4px 5px;\n    text-align: center;\n    text-decoration: none;\n}\n\ntable, th, td {\n    border: 1px solid black;\n }\n\n.containerContent{\n        margin: 15px 270px 0 425px;\n}\n\n.adminbtnstyle{\n    margin: -45px 0 0 765px;\n}\n\n.adminbtn{\n    background-color: lightgrey;\n    border: 2px solid darkgray;\n    padding: 4px 5px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    cursor: pointer;\n}\n\n.adminLink{\n    color: black;\n    text-decoration: none;\n}\n\n.btn{\n    width: 150px;\n}\n\n.tf\n{\n    width: 300px;\n}\n\n.tf2\n{\n    width:173px;\n}\n\n.btn\n{\n    width: 150px;\n    background: -webkit-gradient(linear, left top, left bottom, from(#33ccff), to(#ff99cc));\n    background: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%);\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbmlzdHJhdG9yL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7Q0FDMUI7O0FBQ0Q7UUFDUSwwQkFBMEI7QUFDbEM7O0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUNBOztJQUVJLFlBQVk7SUFDWix1RkFBZ0U7SUFBaEUsZ0VBQWdFO0lBQ2hFLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluaXN0cmF0b3IvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jZW50ZXJcbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaDF7XG4gICAgbWFyZ2luLWxlZnQ6IDY1M3B4O1xufVxuLm5hdntcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXdpZHRoOjFweCAwO1xuICAgIGxpc3Qtc3R5bGU6bm9uZTtcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG4ubmF2IGxpe1xuICAgIGRpc3BsYXk6aW5saW5lO1xufVxuLm5hdiBhe1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgcGFkZGluZzogNHB4IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG50YWJsZSwgdGgsIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiB9XG4uY29udGFpbmVyQ29udGVudHtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDI3MHB4IDAgNDI1cHg7XG59XG4uYWRtaW5idG5zdHlsZXtcbiAgICBtYXJnaW46IC00NXB4IDAgMCA3NjVweDtcbn1cbi5hZG1pbmJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgYm9yZGVyOiAycHggc29saWQgZGFya2dyYXk7XG4gICAgcGFkZGluZzogNHB4IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFkbWluTGlua3tcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRue1xuICAgIHdpZHRoOiAxNTBweDtcbn1cblxuLnRmXG57XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuXG4udGYyXG57XG4gICAgd2lkdGg6MTczcHg7XG59XG4uYnRuXG57XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzM2NjZmYgMCUsICNmZjk5Y2MgMTAwJSk7XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/administrator/edit/edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/administrator/edit/edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_players_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/players.service */ "./src/app/services/players.service.ts");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/games.service */ "./src/app/services/games.service.ts");






var EditComponent = /** @class */ (function () {
    function EditComponent(gservice, route, router, service, fb) {
        this.gservice = gservice;
        this.route = route;
        this.router = router;
        this.service = service;
        this.fb = fb;
        this.rank = [];
        this.title = 'Edit Player';
        this.statuses = [{ id: 1, st: 'Available' }, { id: 2, st: 'Unavailable' }];
        this.createForm();
    }
    EditComponent.prototype.getGames = function () {
        var _this = this;
        this.gservice.getGames().subscribe(function (res) {
            _this.games = res;
        });
    };
    EditComponent.prototype.createRanking = function () {
        for (var i = 1; i <= 100; i++) {
            this.rank.push(i);
        }
        return this.rank;
    };
    EditComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            playerName: [''],
            rank: [''],
            newrank: [''],
            score: [''],
            time: [''],
            gamesPlayed: [''],
            status: ['']
        });
    };
    EditComponent.prototype.check = function (status) {
        console.log(status);
    };
    EditComponent.prototype.updatePlayer = function (playerName, rank, score, time, gamesPlayed, status) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.service.updatePlayer(playerName, rank, score, time, gamesPlayed, status, params['id']);
            _this.router.navigate(['index']);
        });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getGames();
        this.createRanking();
        this.route.params.subscribe(function (params) {
            _this.player = _this.service.editPlayer(params['id']).subscribe(function (res) {
                _this.player = res;
            });
        });
    };
    EditComponent.ctorParameters = function () { return [
        { type: _services_games_service__WEBPACK_IMPORTED_MODULE_5__["GamesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_players_service__WEBPACK_IMPORTED_MODULE_4__["PlayersService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrator/edit/edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit.component.css */ "./src/app/components/administrator/edit/edit.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_games_service__WEBPACK_IMPORTED_MODULE_5__["GamesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_players_service__WEBPACK_IMPORTED_MODULE_4__["PlayersService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/administrator/games/games.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/administrator/games/games.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.tablecenter {\n    margin-left:auto; \n    margin-right:auto;\n  }\n\n.center\n{\n    text-align:center;\n    background-size: cover;\n}\n\nh1{\n    margin-left: 653px;\n}\n\n.nav{\n    border:1px solid #ccc;\n    border-width:1px 0;\n    list-style:none;\n    margin:0;\n    padding:0;\n    text-align:center;\n    margin-right: 125px;\n}\n\n.nav li{\n    display:inline;\n}\n\n.nav a{\n    display:inline-block;\n    padding:10px;\n    margin-left: 100px;\n    padding: 4px 5px;\n    text-align: center;\n    text-decoration: none;\n}\n\ntable, th, td {\n    border: 1px solid black;\n }\n\n.containerContent{\n        margin: 15px 270px 0 425px;\n}\n\n.adminbtnstyle{\n    margin: -45px 0 0 765px;\n}\n\n.adminbtn{\n    background-color: lightgrey;\n    border: 2px solid darkgray;\n    padding: 4px 5px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    cursor: pointer;\n}\n\n.adminLink{\n    color: black;\n    text-decoration: none;\n}\n\ntable{\n    background: rgba(183,222,237,1);\n    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(183,222,237,1)), color-stop(50%, rgba(113,206,239,1)), color-stop(51%, rgba(33,180,226,1)), color-stop(100%, rgba(183,222,237,1)));\n    background: -webkit-gradient(linear, left top, right top, from(rgba(183,222,237,1)), color-stop(50%, rgba(113,206,239,1)), color-stop(50%, rgba(113,206,239,1)), to(rgba(183,222,237,1)));\n    background: linear-gradient(to right, rgba(183,222,237,1) 0%, rgba(113,206,239,1) 50%, rgba(113,206,239,1) 50%, rgba(183,222,237,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b7deed', endColorstr='#b7deed', GradientType=1 );\n\n}\n\n.filter{\n    margin: 0 25px 0 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbmlzdHJhdG9yL2dhbWVzL2dhbWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7QUFFRjs7SUFFSSxpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0NBQzFCOztBQUNEO1FBQ1EsMEJBQTBCO0FBQ2xDOztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUdBO0lBQ0ksK0JBQStCO0lBRS9CLHdNQUF3TTtJQUl4TSx5TEFBeUk7SUFBekkseUlBQXlJO0lBQ3pJLG9IQUFvSDs7QUFFeEg7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluaXN0cmF0b3IvZ2FtZXMvZ2FtZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRhYmxlY2VudGVyIHtcbiAgICBtYXJnaW4tbGVmdDphdXRvOyBcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcbiAgfVxuXG4uY2VudGVyXG57XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaDF7XG4gICAgbWFyZ2luLWxlZnQ6IDY1M3B4O1xufVxuLm5hdntcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXdpZHRoOjFweCAwO1xuICAgIGxpc3Qtc3R5bGU6bm9uZTtcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMjVweDtcbn1cbi5uYXYgbGl7XG4gICAgZGlzcGxheTppbmxpbmU7XG59XG4ubmF2IGF7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnRhYmxlLCB0aCwgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuIH1cbi5jb250YWluZXJDb250ZW50e1xuICAgICAgICBtYXJnaW46IDE1cHggMjcwcHggMCA0MjVweDtcbn1cbi5hZG1pbmJ0bnN0eWxle1xuICAgIG1hcmdpbjogLTQ1cHggMCAwIDc2NXB4O1xufVxuLmFkbWluYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JheTtcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRtaW5MaW5re1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxudGFibGV7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxODMsMjIyLDIzNywxKTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDE4MywyMjIsMjM3LDEpIDAlLCByZ2JhKDExMywyMDYsMjM5LDEpIDUwJSwgcmdiYSgzMywxODAsMjI2LDEpIDUxJSwgcmdiYSgxODMsMjIyLDIzNywxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMTgzLDIyMiwyMzcsMSkpLCBjb2xvci1zdG9wKDUwJSwgcmdiYSgxMTMsMjA2LDIzOSwxKSksIGNvbG9yLXN0b3AoNTElLCByZ2JhKDMzLDE4MCwyMjYsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMTgzLDIyMiwyMzcsMSkpKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDE4MywyMjIsMjM3LDEpIDAlLCByZ2JhKDExMywyMDYsMjM5LDEpIDUwJSwgcmdiYSgzMywxODAsMjI2LDEpIDUxJSwgcmdiYSgxODMsMjIyLDIzNywxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgxODMsMjIyLDIzNywxKSAwJSwgcmdiYSgxMTMsMjA2LDIzOSwxKSA1MCUsIHJnYmEoMzMsMTgwLDIyNiwxKSA1MSUsIHJnYmEoMTgzLDIyMiwyMzcsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDE4MywyMjIsMjM3LDEpIDAlLCByZ2JhKDExMywyMDYsMjM5LDEpIDUwJSwgcmdiYSgzMywxODAsMjI2LDEpIDUxJSwgcmdiYSgxODMsMjIyLDIzNywxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMTgzLDIyMiwyMzcsMSkgMCUsIHJnYmEoMTEzLDIwNiwyMzksMSkgNTAlLCByZ2JhKDExMywyMDYsMjM5LDEpIDUwJSwgcmdiYSgxODMsMjIyLDIzNywxKSAxMDAlKTtcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2I3ZGVlZCcsIGVuZENvbG9yc3RyPScjYjdkZWVkJywgR3JhZGllbnRUeXBlPTEgKTtcblxufVxuXG4uZmlsdGVye1xuICAgIG1hcmdpbjogMCAyNXB4IDAgMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/administrator/games/games.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/administrator/games/games.component.ts ***!
  \*******************************************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/games.service */ "./src/app/services/games.service.ts");




var GamesComponent = /** @class */ (function () {
    function GamesComponent(http, service) {
        this.http = http;
        this.service = service;
        this.title = 'Games View';
    }
    GamesComponent.prototype.ngOnInit = function () {
        this.getGames();
    };
    GamesComponent.prototype.getGames = function () {
        var _this = this;
        this.service.getGames().subscribe(function (res) {
            _this.games = res;
        });
    };
    GamesComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _services_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"] }
    ]; };
    GamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-games',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./games.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrator/games/games.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./games.component.css */ "./src/app/components/administrator/games/games.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"]])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "./src/app/components/administrator/index/index.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/administrator/index/index.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center\n{\n    text-align: center;\n    background-size: cover;\n}\n\n.tablecenter {\n    margin-left:auto; \n    margin-right:auto;\n  }\n\nh1{\n    margin-left: 653px;\n}\n\n.nav{\n    border:1px solid #ccc;\n    border-width:1px 0;\n    list-style:none;\n    margin:0;\n    padding:0;\n    text-align:center;\n    margin-right: 125px;\n}\n\n.nav li{\n    display:inline;\n}\n\n.nav a{\n    display:inline-block;\n    padding:10px;\n    margin-left: 100px;\n    padding: 4px 5px;\n    text-align: center;\n    text-decoration: none;\n}\n\ntable, th, td {\n    border: 1px solid black;\n }\n\n.containerContent{\n        margin: 15px 270px 0 425px;\n}\n\n.adminbtnstyle{\n    margin: -45px 0 0 765px;\n}\n\n.adminbtn{\n    background-color: lightgrey;\n    border: 2px solid darkgray;\n    padding: 4px 5px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    cursor: pointer;\n}\n\n.adminLink{\n    color: black;\n    text-decoration: none;\n}\n\ntable{\n    background: rgba(183,222,237,1);\n    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(183,222,237,1)), color-stop(50%, rgba(113,206,239,1)), color-stop(51%, rgba(33,180,226,1)), color-stop(100%, rgba(183,222,237,1)));\n    background: -webkit-gradient(linear, left top, right top, from(rgba(183,222,237,1)), color-stop(50%, rgba(113,206,239,1)), color-stop(50%, rgba(113,206,239,1)), to(rgba(183,222,237,1)));\n    background: linear-gradient(to right, rgba(183,222,237,1) 0%, rgba(113,206,239,1) 50%, rgba(113,206,239,1) 50%, rgba(183,222,237,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b7deed', endColorstr='#b7deed', GradientType=1 );\n\n}\n\n.filter{\n    margin: 0 25px 0 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbmlzdHJhdG9yL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0FBRUY7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7Q0FDMUI7O0FBQ0Q7UUFDUSwwQkFBMEI7QUFDbEM7O0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBR0E7SUFDSSwrQkFBK0I7SUFFL0Isd01BQXdNO0lBSXhNLHlMQUF5STtJQUF6SSx5SUFBeUk7SUFDekksb0hBQW9IOztBQUV4SDs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5pc3RyYXRvci9pbmRleC9pbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlclxue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udGFibGVjZW50ZXIge1xuICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xuICB9XG5cbmgxe1xuICAgIG1hcmdpbi1sZWZ0OiA2NTNweDtcbn1cbi5uYXZ7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci13aWR0aDoxcHggMDtcbiAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTI1cHg7XG59XG4ubmF2IGxpe1xuICAgIGRpc3BsYXk6aW5saW5lO1xufVxuLm5hdiBhe1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgcGFkZGluZzogNHB4IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG50YWJsZSwgdGgsIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiB9XG4uY29udGFpbmVyQ29udGVudHtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDI3MHB4IDAgNDI1cHg7XG59XG4uYWRtaW5idG5zdHlsZXtcbiAgICBtYXJnaW46IC00NXB4IDAgMCA3NjVweDtcbn1cbi5hZG1pbmJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgYm9yZGVyOiAycHggc29saWQgZGFya2dyYXk7XG4gICAgcGFkZGluZzogNHB4IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFkbWluTGlua3tcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cbnRhYmxle1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgzLDIyMiwyMzcsMSk7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgxODMsMjIyLDIzNywxKSAwJSwgcmdiYSgxMTMsMjA2LDIzOSwxKSA1MCUsIHJnYmEoMzMsMTgwLDIyNiwxKSA1MSUsIHJnYmEoMTgzLDIyMiwyMzcsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2JhKDE4MywyMjIsMjM3LDEpKSwgY29sb3Itc3RvcCg1MCUsIHJnYmEoMTEzLDIwNiwyMzksMSkpLCBjb2xvci1zdG9wKDUxJSwgcmdiYSgzMywxODAsMjI2LDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDE4MywyMjIsMjM3LDEpKSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgxODMsMjIyLDIzNywxKSAwJSwgcmdiYSgxMTMsMjA2LDIzOSwxKSA1MCUsIHJnYmEoMzMsMTgwLDIyNiwxKSA1MSUsIHJnYmEoMTgzLDIyMiwyMzcsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMTgzLDIyMiwyMzcsMSkgMCUsIHJnYmEoMTEzLDIwNiwyMzksMSkgNTAlLCByZ2JhKDMzLDE4MCwyMjYsMSkgNTElLCByZ2JhKDE4MywyMjIsMjM3LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgxODMsMjIyLDIzNywxKSAwJSwgcmdiYSgxMTMsMjA2LDIzOSwxKSA1MCUsIHJnYmEoMzMsMTgwLDIyNiwxKSA1MSUsIHJnYmEoMTgzLDIyMiwyMzcsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDE4MywyMjIsMjM3LDEpIDAlLCByZ2JhKDExMywyMDYsMjM5LDEpIDUwJSwgcmdiYSgxMTMsMjA2LDIzOSwxKSA1MCUsIHJnYmEoMTgzLDIyMiwyMzcsMSkgMTAwJSk7XG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNiN2RlZWQnLCBlbmRDb2xvcnN0cj0nI2I3ZGVlZCcsIEdyYWRpZW50VHlwZT0xICk7XG5cbn1cblxuLmZpbHRlcntcbiAgICBtYXJnaW46IDAgMjVweCAwIDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/administrator/index/index.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/administrator/index/index.component.ts ***!
  \*******************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_players_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/players.service */ "./src/app/services/players.service.ts");




var IndexComponent = /** @class */ (function () {
    function IndexComponent(http, service) {
        this.http = http;
        this.service = service;
        this.title = 'Admin Player Options';
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.getPlayers();
    };
    IndexComponent.prototype.getPlayers = function () {
        var _this = this;
        this.service.getPlayers().subscribe(function (res) {
            _this.players = res;
        });
    };
    IndexComponent.prototype.deletePlayer = function (id) {
        this.service.deletePlayer(id).subscribe(function (res) {
            console.log('Deleted');
        });
    };
    IndexComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _services_players_service__WEBPACK_IMPORTED_MODULE_3__["PlayersService"] }
    ]; };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrator/index/index.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.css */ "./src/app/components/administrator/index/index.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_players_service__WEBPACK_IMPORTED_MODULE_3__["PlayersService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/components/callback/callback.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/callback/callback.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loading {\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWxsYmFjay9jYWxsYmFjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1Isc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYWxsYmFjay9jYWxsYmFjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/callback/callback.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/callback/callback.component.ts ***!
  \***********************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CallbackComponent = /** @class */ (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    CallbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-callback',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./callback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/callback/callback.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./callback.component.css */ "./src/app/components/callback/callback.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/components/playerComponents/join/join.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/playerComponents/join/join.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body { \n    background-position: center center;\n    background-repeat:  no-repeat;\n    background-attachment: fixed;\n    background-size:  cover;\n    background-color: #999;\n\n}\n\nh1{\n    margin-left: 653px;\n}\n\n.nav{\n    border:1px solid #ccc;\n    border-width:1px 0;\n    list-style:none;\n    margin:0;\n    padding:0;\n    text-align:center;\n}\n\n.nav li{\n    display:inline;\n}\n\n.nav a{\n    display:inline-block;\n    padding:10px;\n    margin-left: 100px;\n    padding: 4px 5px;\n    text-align: center;\n    text-decoration: none;\n}\n\ntable, th, td {\n    border: 1px solid black;\n }\n\n.containerContent{\n        margin: 15px 270px 0 425px;\n}\n\n.center\n{\n    text-align: center;\n    background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXJDb21wb25lbnRzL2pvaW4vam9pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtDQUMxQjs7QUFDRDtRQUNRLDBCQUEwQjtBQUNsQzs7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXJDb21wb25lbnRzL2pvaW4vam9pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7IFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6ICBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuXG59XG5cbmgxe1xuICAgIG1hcmdpbi1sZWZ0OiA2NTNweDtcbn1cbi5uYXZ7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci13aWR0aDoxcHggMDtcbiAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxuLm5hdiBsaXtcbiAgICBkaXNwbGF5OmlubGluZTtcbn1cbi5uYXYgYXtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDRweCA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxudGFibGUsIHRoLCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gfVxuLmNvbnRhaW5lckNvbnRlbnR7XG4gICAgICAgIG1hcmdpbjogMTVweCAyNzBweCAwIDQyNXB4O1xufVxuLmNlbnRlclxue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/playerComponents/join/join.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/playerComponents/join/join.component.ts ***!
  \********************************************************************/
/*! exports provided: JoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinComponent", function() { return JoinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_players_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/players.service */ "./src/app/services/players.service.ts");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/games.service */ "./src/app/services/games.service.ts");






var JoinComponent = /** @class */ (function () {
    function JoinComponent(gservice, route, router, service, fb) {
        this.gservice = gservice;
        this.route = route;
        this.router = router;
        this.service = service;
        this.fb = fb;
        this.title = 'Join Game';
        this.createForm();
    }
    JoinComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            playerName: [''],
            rank: [''],
            score: [''],
            time: [''],
            gamesPlayed: [''],
            status: [''],
            Game: ['']
        });
    };
    JoinComponent.prototype.getGames = function () {
        var _this = this;
        this.gservice.getGames().subscribe(function (res) {
            _this.games = res;
        });
    };
    JoinComponent.prototype.joinGame = function (playerName, rank, score, time, gamesPlayed, status) {
        var _this = this;
        status = 'In Game';
        this.route.params.subscribe(function (params) {
            _this.service.joinGame(playerName, rank, score, time, gamesPlayed, status, params['id']);
            _this.router.navigate(['players']);
        });
    };
    JoinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getGames();
        this.route.params.subscribe(function (params) {
            _this.player = _this.service.playerGame(params['id']).subscribe(function (res) {
                _this.player = res;
            });
        });
    };
    JoinComponent.ctorParameters = function () { return [
        { type: _services_games_service__WEBPACK_IMPORTED_MODULE_5__["GamesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_players_service__WEBPACK_IMPORTED_MODULE_4__["PlayersService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    JoinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-join',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./join.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/playerComponents/join/join.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./join.component.css */ "./src/app/components/playerComponents/join/join.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_games_service__WEBPACK_IMPORTED_MODULE_5__["GamesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_players_service__WEBPACK_IMPORTED_MODULE_4__["PlayersService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], JoinComponent);
    return JoinComponent;
}());



/***/ }),

/***/ "./src/app/components/playerComponents/player_dashboard/player_dashboard.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/playerComponents/player_dashboard/player_dashboard.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.center\n{\n    text-align: center;\n    background-size: cover;\n    margin: -18px 0 0px 0px;\n}\n\n.tablecenter {\n    margin-left:auto; \n    margin-right:auto;\n  }\n\nh1{\n    margin-left: 653px;\n}\n\n.nav{\n    border:1px solid #ccc;\n    border-width:1px 0;\n    list-style:none;\n    margin:0;\n    padding:0;\n    text-align:center;\n    margin-right: 125px;\n    font-size: 30px;\n    \n    \n}\n\nli{\n    text-decoration: none;\n}\n\n.nav li{\n    display:inline;\n}\n\n.nav a{\n    display:inline-block;\n    padding:10px;\n    margin-left: 100px;\n    padding: 4px 5px;\n    text-align: center;\n    text-decoration: none;\n}\n\ntable, th, td {\n    border: 1px solid black;\n }\n\n.containerContent{\n        margin: 15px 270px 0 425px;\n}\n\n.adminbtnstyle{\n    margin: -45px 0 0 765px;\n}\n\n.adminbtn{\n    background-color: lightgrey;\n    border: 2px solid darkgray;\n    padding: 4px 5px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    cursor: pointer;\n}\n\n.adminLink{\n    color: black;\n    text-decoration: none;\n}\n\n.btn\n{\n    width: 150px;\n    background: -webkit-gradient(linear, left top, left bottom, from(#33ccff), to(#ff99cc));\n    background: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%);\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXJDb21wb25lbnRzL3BsYXllcl9kYXNoYm9hcmQvcGxheWVyX2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0FBRUY7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTs7O0FBR25COztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0NBQzFCOztBQUNEO1FBQ1EsMEJBQTBCO0FBQ2xDOztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLFlBQVk7SUFDWix1RkFBZ0U7SUFBaEUsZ0VBQWdFO0lBQ2hFLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BsYXllckNvbXBvbmVudHMvcGxheWVyX2Rhc2hib2FyZC9wbGF5ZXJfZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jZW50ZXJcbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtYXJnaW46IC0xOHB4IDAgMHB4IDBweDtcbn1cblxuLnRhYmxlY2VudGVyIHtcbiAgICBtYXJnaW4tbGVmdDphdXRvOyBcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcbiAgfVxuXG5oMXtcbiAgICBtYXJnaW4tbGVmdDogNjUzcHg7XG59XG4ubmF2e1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItd2lkdGg6MXB4IDA7XG4gICAgbGlzdC1zdHlsZTpub25lO1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEyNXB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBcbiAgICBcbn1cbmxpe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5uYXYgbGl7XG4gICAgZGlzcGxheTppbmxpbmU7XG59XG4ubmF2IGF7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnRhYmxlLCB0aCwgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuIH1cbi5jb250YWluZXJDb250ZW50e1xuICAgICAgICBtYXJnaW46IDE1cHggMjcwcHggMCA0MjVweDtcbn1cbi5hZG1pbmJ0bnN0eWxle1xuICAgIG1hcmdpbjogLTQ1cHggMCAwIDc2NXB4O1xufVxuLmFkbWluYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JheTtcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRtaW5MaW5re1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5idG5cbntcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzMzY2NmZiAwJSwgI2ZmOTljYyAxMDAlKTtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/playerComponents/player_dashboard/player_dashboard.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/playerComponents/player_dashboard/player_dashboard.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PlayerDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDashboardComponent", function() { return PlayerDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");



var PlayerDashboardComponent = /** @class */ (function () {
    function PlayerDashboardComponent(auth) {
        this.auth = auth;
    }
    PlayerDashboardComponent.prototype.ngOnInit = function () {
    };
    PlayerDashboardComponent.prototype.getIDKey = function () {
        var myItem = localStorage.getItem("email");
        if (myItem == "katiuscianovaes@gmail.com") {
            return true;
        }
        else
            return false;
    };
    PlayerDashboardComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    PlayerDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player_dashboard',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player_dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/playerComponents/player_dashboard/player_dashboard.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player_dashboard.component.css */ "./src/app/components/playerComponents/player_dashboard/player_dashboard.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], PlayerDashboardComponent);
    return PlayerDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/playerComponents/players/players.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/playerComponents/players/players.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.center\n{\n    text-align: center;\n    background-size: cover;\n}\n\n.tablecenter {\n    margin-left:auto; \n    margin-right:auto;\n  }\n\nh1{\n    margin-left: 653px;\n}\n\n.nav{\n    border:1px solid #ccc;\n    border-width:1px 0;\n    list-style:none;\n    margin:0;\n    padding:0;\n    text-align:center;\n    margin-right: 125px;\n    \n}\n\n.nav li{\n    display:inline;\n}\n\n.nav a{\n    display:inline-block;\n    padding:10px;\n    margin-left: 100px;\n    padding: 4px 5px;\n    text-align: center;\n    text-decoration: none;\n}\n\ntable, th, td {\n    border: 1px solid black;\n }\n\n.containerContent{\n        margin: 15px 270px 0 425px;\n}\n\n.adminbtnstyle{\n    margin: -45px 0 0 765px;\n}\n\n.adminbtn{\n    background-color: lightgrey;\n    border: 2px solid darkgray;\n    padding: 4px 5px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    cursor: pointer;\n}\n\n.adminLink{\n    color: black;\n    text-decoration: none;\n}\n\n.btn\n{\n    width: 150px;\n    color: white;\n}\n\ntable{\n    background: rgba(183,222,237,1);\n    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(183,222,237,1)), color-stop(50%, rgba(113,206,239,1)), color-stop(51%, rgba(33,180,226,1)), color-stop(100%, rgba(183,222,237,1)));\n    background: -webkit-gradient(linear, left top, right top, from(rgba(183,222,237,1)), color-stop(50%, rgba(113,206,239,1)), color-stop(50%, rgba(113,206,239,1)), to(rgba(183,222,237,1)));\n    background: linear-gradient(to right, rgba(183,222,237,1) 0%, rgba(113,206,239,1) 50%, rgba(113,206,239,1) 50%, rgba(183,222,237,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b7deed', endColorstr='#b7deed', GradientType=1 );\n\n}\n\n.filter{\n    margin: 0 25px 0 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXJDb21wb25lbnRzL3BsYXllcnMvcGxheWVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7QUFFRjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLG1CQUFtQjs7QUFFdkI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7Q0FDMUI7O0FBQ0Q7UUFDUSwwQkFBMEI7QUFDbEM7O0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSwrQkFBK0I7SUFFL0Isd01BQXdNO0lBSXhNLHlMQUF5STtJQUF6SSx5SUFBeUk7SUFDekksb0hBQW9IOztBQUV4SDs7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWVyQ29tcG9uZW50cy9wbGF5ZXJzL3BsYXllcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNlbnRlclxue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udGFibGVjZW50ZXIge1xuICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xuICB9XG5cbmgxe1xuICAgIG1hcmdpbi1sZWZ0OiA2NTNweDtcbn1cbi5uYXZ7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci13aWR0aDoxcHggMDtcbiAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTI1cHg7XG4gICAgXG59XG4ubmF2IGxpe1xuICAgIGRpc3BsYXk6aW5saW5lO1xufVxuLm5hdiBhe1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgcGFkZGluZzogNHB4IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG50YWJsZSwgdGgsIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiB9XG4uY29udGFpbmVyQ29udGVudHtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDI3MHB4IDAgNDI1cHg7XG59XG4uYWRtaW5idG5zdHlsZXtcbiAgICBtYXJnaW46IC00NXB4IDAgMCA3NjVweDtcbn1cbi5hZG1pbmJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgYm9yZGVyOiAycHggc29saWQgZGFya2dyYXk7XG4gICAgcGFkZGluZzogNHB4IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFkbWluTGlua3tcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuXG57XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbnRhYmxle1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgzLDIyMiwyMzcsMSk7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgxODMsMjIyLDIzNywxKSAwJSwgcmdiYSgxMTMsMjA2LDIzOSwxKSA1MCUsIHJnYmEoMzMsMTgwLDIyNiwxKSA1MSUsIHJnYmEoMTgzLDIyMiwyMzcsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2JhKDE4MywyMjIsMjM3LDEpKSwgY29sb3Itc3RvcCg1MCUsIHJnYmEoMTEzLDIwNiwyMzksMSkpLCBjb2xvci1zdG9wKDUxJSwgcmdiYSgzMywxODAsMjI2LDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDE4MywyMjIsMjM3LDEpKSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgxODMsMjIyLDIzNywxKSAwJSwgcmdiYSgxMTMsMjA2LDIzOSwxKSA1MCUsIHJnYmEoMzMsMTgwLDIyNiwxKSA1MSUsIHJnYmEoMTgzLDIyMiwyMzcsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMTgzLDIyMiwyMzcsMSkgMCUsIHJnYmEoMTEzLDIwNiwyMzksMSkgNTAlLCByZ2JhKDMzLDE4MCwyMjYsMSkgNTElLCByZ2JhKDE4MywyMjIsMjM3LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgxODMsMjIyLDIzNywxKSAwJSwgcmdiYSgxMTMsMjA2LDIzOSwxKSA1MCUsIHJnYmEoMzMsMTgwLDIyNiwxKSA1MSUsIHJnYmEoMTgzLDIyMiwyMzcsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDE4MywyMjIsMjM3LDEpIDAlLCByZ2JhKDExMywyMDYsMjM5LDEpIDUwJSwgcmdiYSgxMTMsMjA2LDIzOSwxKSA1MCUsIHJnYmEoMTgzLDIyMiwyMzcsMSkgMTAwJSk7XG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNiN2RlZWQnLCBlbmRDb2xvcnN0cj0nI2I3ZGVlZCcsIEdyYWRpZW50VHlwZT0xICk7XG5cbn1cbi5maWx0ZXJ7XG4gICAgbWFyZ2luOiAwIDI1cHggMCAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/playerComponents/players/players.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/playerComponents/players/players.component.ts ***!
  \**************************************************************************/
/*! exports provided: PlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersComponent", function() { return PlayersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_players_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/players.service */ "./src/app/services/players.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");





var PlayersComponent = /** @class */ (function () {
    function PlayersComponent(http, service, auth) {
        this.http = http;
        this.service = service;
        this.auth = auth;
        this.title = 'Player View';
    }
    PlayersComponent.prototype.ngOnInit = function () {
        this.getPlayers();
    };
    PlayersComponent.prototype.getPlayers = function () {
        var _this = this;
        this.service.getPlayers().subscribe(function (res) {
            _this.players = res;
        });
    };
    PlayersComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _services_players_service__WEBPACK_IMPORTED_MODULE_3__["PlayersService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    PlayersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-players',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./players.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/playerComponents/players/players.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./players.component.css */ "./src/app/components/playerComponents/players/players.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_players_service__WEBPACK_IMPORTED_MODULE_3__["PlayersService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], PlayersComponent);
    return PlayersComponent;
}());



/***/ }),

/***/ "./src/app/filter/filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/filter/filter.pipe.ts ***!
  \***************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, filter, defaultFilter) {
        if (!filter) {
            return items;
        }
        if (!Array.isArray(items)) {
            return items;
        }
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter);
            if (defaultFilter) {
                return items.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "";
                    }, true);
                });
            }
            else {
                return items.filter(function (item) {
                    return filterKeys_1.some(function (keyName) {
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
                    });
                });
            }
        }
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");




window.global = window;
var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_3__["WebAuth"]({
            clientID: 'GwzlACmRPjtkaoOg67fcMOjSMDAKfCGq',
            domain: 'dev-1j014x2o.auth0.com',
            responseType: 'token id_token',
            redirectUri: 'https://fullstack-proj-katiuscia.herokuapp.com/admin',
            scope: 'openid'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                _this.setSession(authResult);
                _this.router.navigate(['/home']);
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
                alert("Error: " + err.error + ". Check the console for further details.");
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('user_id', authResult.email);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('email');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
        return new Date().getTime() < expiresAt;
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/games.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/games.service.ts ***!
  \*******************************************/
/*! exports provided: GamesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesService", function() { return GamesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var GamesService = /** @class */ (function () {
    function GamesService(http) {
        this.http = http;
    }
    GamesService.prototype.getGames = function () {
        var uri = 'https://fullstack-proj-katiuscia.herokuapp.com/games';
        return this
            .http
            .get(uri)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    GamesService.prototype.joinGame = function (id) {
        var uri = 'https://fullstack-proj-katiuscia.herokuapp.com/players/join/' + id;
        return this
            .http
            .get(uri)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    GamesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    GamesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GamesService);
    return GamesService;
}());



/***/ }),

/***/ "./src/app/services/players.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/players.service.ts ***!
  \*********************************************/
/*! exports provided: PlayersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersService", function() { return PlayersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var PlayersService = /** @class */ (function () {
    function PlayersService(http) {
        this.http = http;
    }
    PlayersService.prototype.addPlayer = function (playerName, rank, score, time, gamesPlayed, status, join) {
        var uri = 'https://fullstack-proj-katiuscia.herokuapp.com/players/add';
        var obj = {
            playerName: playerName,
            rank: rank,
            score: score,
            time: time,
            gamesPlayed: gamesPlayed,
            status: status,
            join: join
        };
        this.http.post(uri, obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    PlayersService.prototype.getPlayers = function () {
        var uri = 'https://fullstack-proj-katiuscia.herokuapp.com/players';
        return this
            .http
            .get(uri)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    PlayersService.prototype.editPlayer = function (id) {
        var uri = 'https://fullstack-proj-katiuscia.herokuapp.com/players/edit/' + id;
        return this
            .http
            .get(uri)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    PlayersService.prototype.updatePlayer = function (playerName, rank, score, time, gamesPlayed, status, id) {
        var uri = 'https://fullstack-proj-katiuscia.herokuapp.com/players/update/' + id;
        var obj = {
            playerName: playerName,
            rank: rank,
            score: score,
            time: time,
            gamesPlayed: gamesPlayed,
            status: status,
        };
        this
            .http
            .post(uri, obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    PlayersService.prototype.playerGame = function (id) {
        var uri = 'https://fullstack-proj-katiuscia.herokuapp.com/players/join/' + id;
        return this
            .http
            .get(uri)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    PlayersService.prototype.joinGame = function (playerName, rank, score, time, gamesPlayed, status, id) {
        var uri = 'https://fullstack-proj-katiuscia.herokuapp.com/players/joingame/' + id;
        var obj = {
            playerName: playerName,
            rank: rank,
            score: score,
            time: time,
            gamesPlayed: gamesPlayed,
            status: status,
        };
        this
            .http
            .post(uri, obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    PlayersService.prototype.deletePlayer = function (id) {
        var uri = 'https://fullstack-proj-katiuscia.herokuapp.com/players/delete/' + id;
        return this
            .http
            .get(uri)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    PlayersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PlayersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlayersService);
    return PlayersService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raphaelstrada/kati/MEAN/MEAN/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map