"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("../services/api"));
class PostsController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data: posts } = yield api_1.default.get("posts");
            if (request.query.company) {
                const { data: users } = yield api_1.default.get("users");
                const filteredPosts = posts.filter((post) => {
                    const postUser = users.filter((user) => user.id === post.userId)[0];
                    return postUser.company.name === request.query.company;
                });
                return response.status(200).json(filteredPosts);
            }
            return response.status(200).json(posts);
        });
    }
    show(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const postId = request.params.id;
            const { data: post } = yield api_1.default.get(`posts/${postId}`);
            const { data: comments } = yield api_1.default.get(`posts/${postId}/comments`);
            return response.json(Object.assign(Object.assign({}, post), { comments }));
        });
    }
}
exports.default = new PostsController();
