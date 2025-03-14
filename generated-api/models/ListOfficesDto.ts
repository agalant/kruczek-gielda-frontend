/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListOfficesFiltersDto } from './ListOfficesFiltersDto';
export type ListOfficesDto = {
    sort: ListOfficesDto.sort;
    filterBy?: ListOfficesFiltersDto;
    page: number;
    perPage: number;
};
export namespace ListOfficesDto {
    export enum sort {
        NAME = 'name',
        _NAME = '-name',
    }
}

