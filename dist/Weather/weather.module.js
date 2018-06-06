"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_module_1 = require("../DataBase/database.module");
const weather_provider_1 = require("./weather.provider");
const weather_controller_1 = require("./weather.controller");
const weather_service_1 = require("./weather.service");
const common_1 = require("@nestjs/common");
let WeatherModule = class WeatherModule {
};
WeatherModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        components: [
            weather_service_1.WeatherService,
            weather_provider_1.weatherProvider,
        ],
        controllers: [
            weather_controller_1.WeatherController,
        ],
    })
], WeatherModule);
exports.WeatherModule = WeatherModule;
//# sourceMappingURL=weather.module.js.map