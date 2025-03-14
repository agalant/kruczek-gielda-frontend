/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserResponseDto = {
    email: string;
    firstName: string;
    lastName: string;
    role: UserResponseDto.role;
    id: string;
    createdAt?: string;
    updatedAt?: string;
};
export namespace UserResponseDto {
    export enum role {
        ADMIN = 'admin',
        OWNER = 'owner',
        EMPLOYEE = 'employee',
    }
}

