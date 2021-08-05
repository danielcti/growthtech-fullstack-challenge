"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersController_1 = __importDefault(require("../controllers/UsersController"));
const PostsController_1 = __importDefault(require("../controllers/PostsController"));
const CompaniesController_1 = __importDefault(require("../controllers/CompaniesController"));
const UserPostsController_1 = __importDefault(require("../controllers/UserPostsController"));
const routes = express_1.Router();
routes.get("/users", UsersController_1.default.index);
routes.get("/users/:id", UsersController_1.default.show);
routes.get("/users/:id/posts", UserPostsController_1.default.index);
routes.get("/companies", CompaniesController_1.default.index);
routes.get("/posts", PostsController_1.default.index);
routes.get("/posts/:id", PostsController_1.default.show);
exports.default = routes;
