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
class UsersController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield api_1.default.get("users");
            return response.status(200).json(data);
        });
    }
    show(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = request.params.id;
            const { data } = yield api_1.default.get(`users/${userId}`);
            return response.json(data);
        });
    }
}
exports.default = new UsersController();
