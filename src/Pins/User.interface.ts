import { Field, ObjectType } from "@nestjs/graphql";
import { ProfilePicture } from "./ProfilePicture.interface";


@ObjectType()
export class User{
    @Field({ nullable: true })
    id?: string;

    @Field({ nullable: true })
    username?: string;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    profile_image?: ProfilePicture;

}