/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ListUsersFiltersDto = {
    email?: string;
    firstName?: string;
    lastName?: string;
    role?: ListUsersFiltersDto.role;
};
export namespace ListUsersFiltersDto {
    export enum role {
        ADMIN = 'admin',
        OWNER = 'owner',
        EMPLOYEE = 'employee',
    }
}

