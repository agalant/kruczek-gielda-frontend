/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOfficeDto } from '../models/CreateOfficeDto';
import type { ListOfficesFiltersDto } from '../models/ListOfficesFiltersDto';
import type { OfficeResponseDto } from '../models/OfficeResponseDto';
import type { PaginationMetaResponseDto } from '../models/PaginationMetaResponseDto';
import type { UpdateOfficeDto } from '../models/UpdateOfficeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OfficeService {
    /**
     * Create single office
     * @param requestBody
     * @returns OfficeResponseDto Returns single office
     * @throws ApiError
     */
    public static createOffice(
        requestBody: CreateOfficeDto,
    ): CancelablePromise<OfficeResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/offices',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List all offices
     * @param sort
     * @param filterBy
     * @param page
     * @param perPage
     * @returns any Returns offices
     * @throws ApiError
     */
    public static listOffices(
        sort: 'name' | '-name' = 'name',
        filterBy?: ListOfficesFiltersDto,
        page: number = 1,
        perPage: number = 10,
    ): CancelablePromise<{
        meta?: PaginationMetaResponseDto;
        items?: Array<OfficeResponseDto>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/offices',
            query: {
                'sort': sort,
                'filterBy': filterBy,
                'page': page,
                'perPage': perPage,
            },
        });
    }
    /**
     * Get single office
     * @param id
     * @returns OfficeResponseDto Returns single office
     * @throws ApiError
     */
    public static getOffice(
        id: string,
    ): CancelablePromise<OfficeResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/offices/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update single office
     * @param id
     * @param requestBody
     * @returns OfficeResponseDto Returns single office
     * @throws ApiError
     */
    public static updateOffice(
        id: string,
        requestBody: UpdateOfficeDto,
    ): CancelablePromise<OfficeResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/offices/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
