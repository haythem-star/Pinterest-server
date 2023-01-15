import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Urls{
    @Field({ nullable: true })
    raw?: string;
    @Field({ nullable: true })
    full?: string;
}