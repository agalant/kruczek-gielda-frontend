/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListUsersFiltersDto } from './ListUsersFiltersDto';
export type ListUsersDto = {
    sort: ListUsersDto.sort;
    filterBy?: ListUsersFiltersDto;
    page: number;
    perPage: number;
};
export namespace ListUsersDto {
    export enum sort {
        EMAIL = 'email',
        _EMAIL = '-email',
        FIRST_NAME = 'firstName',
        _FIRST_NAME = '-firstName',
        LAST_NAME = 'lastName',
        _LAST_NAME = '-lastName',
    }
}

