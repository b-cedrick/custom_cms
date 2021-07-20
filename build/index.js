"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Routes_1 = __importDefault(require("./route/Routes"));
var Server_1 = __importDefault(require("./Server"));
Routes_1.default.make();
Server_1.default.start();
