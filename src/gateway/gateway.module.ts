import {Module} from "@nestjs/common";
import {CustomGetWay} from "./gateway";

@Module({
    providers: [CustomGetWay]
})
export class GatewayModule{}