import { Field, ObjectType } from "@nestjs/graphql";
import { Urls } from "./Urls.interface";
import { User } from "./User.interface";


@ObjectType()
export class Pin{
    @Field({ nullable: true })
    id?: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    urls?: Urls;

    @Field({ nullable: true })
    user?: User;
}