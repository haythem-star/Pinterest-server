import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class ProfilePicture{
    @Field({ nullable: true })
    small?: string;

    @Field({ nullable: true })
    medium?: string;

    @Field({ nullable: true })
    large?: string;

}