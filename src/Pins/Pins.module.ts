import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { PinsService } from "./Pin.service";
import { PinsResolver } from "./Pins.resolver";

@Module({
    imports: [HttpModule],
    providers: [PinsResolver,PinsService],
})
export class PinsModule {}