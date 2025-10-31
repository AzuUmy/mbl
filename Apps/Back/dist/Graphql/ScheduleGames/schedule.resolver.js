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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const schedule_service_1 = require("./schedule.service");
const schedule_entity_1 = require("./Entities/schedule.entity");
let ScheduleResolver = class ScheduleResolver {
    scheduleService;
    constructor(scheduleService) {
        this.scheduleService = scheduleService;
    }
    async scheduleGames(startDate, endDate) {
        return this.scheduleService.getSchedule(startDate, endDate);
    }
};
exports.ScheduleResolver = ScheduleResolver;
__decorate([
    (0, graphql_1.Query)(() => [schedule_entity_1.ScheduleGamesSeries], { name: 'scheduleGames' }),
    __param(0, (0, graphql_1.Args)('startDate', { type: () => String })),
    __param(1, (0, graphql_1.Args)('endDate', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ScheduleResolver.prototype, "scheduleGames", null);
exports.ScheduleResolver = ScheduleResolver = __decorate([
    (0, graphql_1.Resolver)(() => schedule_entity_1.ScheduleGamesSeries),
    __metadata("design:paramtypes", [schedule_service_1.ScheduleService])
], ScheduleResolver);
//# sourceMappingURL=schedule.resolver.js.map