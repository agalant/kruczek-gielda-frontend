/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateLawsuitDto } from '../models/CreateLawsuitDto';
import type { LawsuitResponseDto } from '../models/LawsuitResponseDto';
import type { ListLawsuitsFiltersDto } from '../models/ListLawsuitsFiltersDto';
import type { PaginationMetaResponseDto } from '../models/PaginationMetaResponseDto';
import type { UpdateLawsuitDto } from '../models/UpdateLawsuitDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LawsuitService {
    /**
     * Create single lawsuit
     * @param requestBody
     * @returns LawsuitResponseDto Returns single lawsuit
     * @throws ApiError
     */
    public static createLawsuit(
        requestBody: CreateLawsuitDto,
    ): CancelablePromise<LawsuitResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lawsuits',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List all lawsuits
     * @param sort
     * @param filterBy
     * @param page
     * @param perPage
     * @returns any Returns lawsuits
     * @throws ApiError
     */
    public static listLawsuits(
        sort: 'createdAt' | '-createdAt' | 'updatedAt' | '-updatedAt' | 'title' | '-title' = '-createdAt',
        filterBy?: ListLawsuitsFiltersDto,
        page: number = 1,
        perPage: number = 10,
    ): CancelablePromise<{
        meta?: PaginationMetaResponseDto;
        items?: Array<LawsuitResponseDto>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lawsuits',
            query: {
                'sort': sort,
                'filterBy': filterBy,
                'page': page,
                'perPage': perPage,
            },
        });
    }
    /**
     * Get single lawsuit
     * @param id
     * @returns LawsuitResponseDto Returns single lawsuit
     * @throws ApiError
     */
    public static getLawsuit(
        id: string,
    ): CancelablePromise<LawsuitResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lawsuits/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update single lawsuit
     * @param id
     * @param requestBody
     * @returns LawsuitResponseDto Returns single lawsuit
     * @throws ApiError
     */
    public static updateLawsuit(
        id: string,
        requestBody: UpdateLawsuitDto,
    ): CancelablePromise<LawsuitResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/lawsuits/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
