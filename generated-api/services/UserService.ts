/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserDto } from '../models/CreateUserDto';
import type { ListUsersFiltersDto } from '../models/ListUsersFiltersDto';
import type { PaginationMetaResponseDto } from '../models/PaginationMetaResponseDto';
import type { UpdateUserDto } from '../models/UpdateUserDto';
import type { UserResponseDto } from '../models/UserResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * Create single user
     * @param requestBody
     * @returns UserResponseDto Returns single user
     * @throws ApiError
     */
    public static createUser(
        requestBody: CreateUserDto,
    ): CancelablePromise<UserResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List all users
     * @param sort
     * @param filterBy
     * @param page
     * @param perPage
     * @returns any Returns users
     * @throws ApiError
     */
    public static listUsers(
        sort: 'email' | '-email' | 'firstName' | '-firstName' | 'lastName' | '-lastName' = 'email',
        filterBy?: ListUsersFiltersDto,
        page: number = 1,
        perPage: number = 10,
    ): CancelablePromise<{
        meta?: PaginationMetaResponseDto;
        items?: Array<UserResponseDto>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
            query: {
                'sort': sort,
                'filterBy': filterBy,
                'page': page,
                'perPage': perPage,
            },
        });
    }
    /**
     * Get single user
     * @param id
     * @returns UserResponseDto Returns single user
     * @throws ApiError
     */
    public static getUser(
        id: string,
    ): CancelablePromise<UserResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update single user
     * @param id
     * @param requestBody
     * @returns UserResponseDto Returns single user
     * @throws ApiError
     */
    public static updateUser(
        id: string,
        requestBody: UpdateUserDto,
    ): CancelablePromise<UserResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
