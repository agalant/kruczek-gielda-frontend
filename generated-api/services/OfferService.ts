/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOfferDto } from '../models/CreateOfferDto';
import type { ListOffersFiltersDto } from '../models/ListOffersFiltersDto';
import type { OfferResponseDto } from '../models/OfferResponseDto';
import type { PaginationMetaResponseDto } from '../models/PaginationMetaResponseDto';
import type { UpdateOfferDto } from '../models/UpdateOfferDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OfferService {
    /**
     * Create single offer
     * @param requestBody
     * @returns OfferResponseDto Returns single offer
     * @throws ApiError
     */
    public static createOffer(
        requestBody: CreateOfferDto,
    ): CancelablePromise<OfferResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/offers',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List all offers
     * @param sort
     * @param filterBy
     * @param page
     * @param perPage
     * @returns any Returns offers
     * @throws ApiError
     */
    public static listOffers(
        sort: 'createdAt' | '-createdAt' | 'updatedAt' | '-updatedAt' = '-createdAt',
        filterBy?: ListOffersFiltersDto,
        page: number = 1,
        perPage: number = 10,
    ): CancelablePromise<{
        meta?: PaginationMetaResponseDto;
        items?: Array<OfferResponseDto>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/offers',
            query: {
                'sort': sort,
                'filterBy': filterBy,
                'page': page,
                'perPage': perPage,
            },
        });
    }
    /**
     * Get single offer
     * @param id
     * @returns OfferResponseDto Returns single offer
     * @throws ApiError
     */
    public static getOffer(
        id: string,
    ): CancelablePromise<OfferResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/offers/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update single offer
     * @param id
     * @param requestBody
     * @returns OfferResponseDto Returns single offer
     * @throws ApiError
     */
    public static updateOffer(
        id: string,
        requestBody: UpdateOfferDto,
    ): CancelablePromise<OfferResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/offers/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
