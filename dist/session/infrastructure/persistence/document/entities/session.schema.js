"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionSchema = exports.SessionSchemaClass = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importStar(require("mongoose"));
const user_schema_1 = require("../../../../../users/infrastructure/persistence/document/entities/user.schema");
const document_entity_helper_1 = require("../../../../../utils/document-entity-helper");
let SessionSchemaClass = class SessionSchemaClass extends document_entity_helper_1.EntityDocumentHelper {
};
exports.SessionSchemaClass = SessionSchemaClass;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'UserSchemaClass' }),
    __metadata("design:type", user_schema_1.UserSchemaClass)
], SessionSchemaClass.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SessionSchemaClass.prototype, "hash", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: mongoose_2.now }),
    __metadata("design:type", Date)
], SessionSchemaClass.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: mongoose_2.now }),
    __metadata("design:type", Date)
], SessionSchemaClass.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], SessionSchemaClass.prototype, "deletedAt", void 0);
exports.SessionSchemaClass = SessionSchemaClass = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: {
            virtuals: true,
            getters: true,
        },
    })
], SessionSchemaClass);
exports.SessionSchema = mongoose_1.SchemaFactory.createForClass(SessionSchemaClass);
exports.SessionSchema.index({ user: 1 });
//# sourceMappingURL=session.schema.js.map