"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_module_1 = require("../DataBase/database.module");
const address_controller_1 = require("./address.controller");
const address_service_1 = require("./address.service");
const common_1 = require("@nestjs/common");
const address_provider_1 = require("./address.provider");
let AddressModule = class AddressModule {
};
AddressModule = __decorate([
    common_1.Module({
        imports: [
            database_module_1.DatabaseModule,
        ],
        controllers: [
            address_controller_1.AddressController,
        ],
        components: [
            address_service_1.AddressService,
            address_provider_1.AddressProvider,
        ],
    })
], AddressModule);
exports.AddressModule = AddressModule;
//# sourceMappingURL=address.module.js.map