/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateUserDto = {
    email?: string;
    firstName?: string;
    lastName?: string;
    role?: UpdateUserDto.role;
    office?: string;
};
export namespace UpdateUserDto {
    export enum role {
        ADMIN = 'admin',
        OWNER = 'owner',
        EMPLOYEE = 'employee',
    }
}

