import { Resolver,Query, Mutation, Args } from "@nestjs/graphql";
import { AxiosResponse } from "axios";
import { Observable } from "rxjs";
import { Pin } from "./Pin.interface";
import { PinsService } from "./Pin.service";

@Resolver()
export class PinsResolver {
  constructor(
    private pinService: PinsService,
  ) {}

  @Query(()=>[Pin])
  async hello(){
    return this.pinService.getAll();
  }

  @Query(()=>[Pin])
  async search(@Args('query') query: string){
    return this.pinService.getBySearch(query);
  }
}