/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListOffersFiltersDto } from './ListOffersFiltersDto';
export type ListOffersDto = {
    sort: ListOffersDto.sort;
    filterBy?: ListOffersFiltersDto;
    page: number;
    perPage: number;
};
export namespace ListOffersDto {
    export enum sort {
        CREATED_AT = 'createdAt',
        _CREATED_AT = '-createdAt',
        UPDATED_AT = 'updatedAt',
        _UPDATED_AT = '-updatedAt',
    }
}

