"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const graphql_1 = require("@nestjs/graphql");
const venu_entity_1 = require("./venu.entity");
const team_entity_1 = require("./team.entity");
const broadcast_entity_1 = require("./broadcast.entity");
let Game = class Game {
    id;
    status;
    coverage;
    game_number;
    day_night;
    scheduled;
    home_team;
    away_team;
    ps_round;
    ps_game;
    attendance;
    duration;
    double_header;
    entry_mode;
    reference;
    venue;
    home;
    away;
    broadcasts;
};
exports.Game = Game;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], Game.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "coverage", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "game_number", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "day_night", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "scheduled", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "home_team", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "away_team", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "ps_round", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "ps_game", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Game.prototype, "attendance", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Game.prototype, "duration", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Game.prototype, "double_header", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "entry_mode", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "reference", void 0);
__decorate([
    (0, graphql_1.Field)(() => venu_entity_1.Venue),
    __metadata("design:type", venu_entity_1.Venue)
], Game.prototype, "venue", void 0);
__decorate([
    (0, graphql_1.Field)(() => team_entity_1.Team),
    __metadata("design:type", team_entity_1.Team)
], Game.prototype, "home", void 0);
__decorate([
    (0, graphql_1.Field)(() => team_entity_1.Team),
    __metadata("design:type", team_entity_1.Team)
], Game.prototype, "away", void 0);
__decorate([
    (0, graphql_1.Field)(() => [broadcast_entity_1.Broadcast]),
    __metadata("design:type", Array)
], Game.prototype, "broadcasts", void 0);
exports.Game = Game = __decorate([
    (0, graphql_1.ObjectType)()
], Game);
//# sourceMappingURL=games.entity.js.map