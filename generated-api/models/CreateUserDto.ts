/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateUserDto = {
    email: string;
    firstName: string;
    lastName: string;
    role: CreateUserDto.role;
    office: string;
};
export namespace CreateUserDto {
    export enum role {
        ADMIN = 'admin',
        OWNER = 'owner',
        EMPLOYEE = 'employee',
    }
}

