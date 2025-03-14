/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListLawsuitsFiltersDto } from './ListLawsuitsFiltersDto';
export type ListLawsuitsDto = {
    sort: ListLawsuitsDto.sort;
    filterBy?: ListLawsuitsFiltersDto;
    page: number;
    perPage: number;
};
export namespace ListLawsuitsDto {
    export enum sort {
        CREATED_AT = 'createdAt',
        _CREATED_AT = '-createdAt',
        UPDATED_AT = 'updatedAt',
        _UPDATED_AT = '-updatedAt',
        TITLE = 'title',
        _TITLE = '-title',
    }
}

