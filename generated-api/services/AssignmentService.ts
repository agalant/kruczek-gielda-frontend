/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssignmentResponseDto } from '../models/AssignmentResponseDto';
import type { CreateAssignmentDto } from '../models/CreateAssignmentDto';
import type { ListAssignmentsFiltersDto } from '../models/ListAssignmentsFiltersDto';
import type { PaginationMetaResponseDto } from '../models/PaginationMetaResponseDto';
import type { UpdateAssignmentDto } from '../models/UpdateAssignmentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AssignmentService {
    /**
     * Create single assignment
     * @param requestBody
     * @returns AssignmentResponseDto Returns single assignment
     * @throws ApiError
     */
    public static createAssignment(
        requestBody: CreateAssignmentDto,
    ): CancelablePromise<AssignmentResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/assignments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List all assignments
     * @param sort
     * @param filterBy
     * @param page
     * @param perPage
     * @returns any Returns assignments
     * @throws ApiError
     */
    public static listAssignments(
        sort: 'client' | '-client' | 'name' | '-name' | 'minPayment' | '-minPayment' | 'maxPayment' | '-maxPayment' | 'assignmentDeadline' | '-assignmentDeadline' | 'trailDate' | '-trailDate' = 'name',
        filterBy?: ListAssignmentsFiltersDto,
        page: number = 1,
        perPage: number = 10,
    ): CancelablePromise<{
        meta?: PaginationMetaResponseDto;
        items?: Array<AssignmentResponseDto>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assignments',
            query: {
                'sort': sort,
                'filterBy': filterBy,
                'page': page,
                'perPage': perPage,
            },
        });
    }
    /**
     * Get single assignment
     * @param id
     * @returns AssignmentResponseDto Returns single assignment
     * @throws ApiError
     */
    public static getAssignment(
        id: string,
    ): CancelablePromise<AssignmentResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assignments/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update single assignment
     * @param id
     * @param requestBody
     * @returns AssignmentResponseDto Returns single assignment
     * @throws ApiError
     */
    public static updateAssignment(
        id: string,
        requestBody: UpdateAssignmentDto,
    ): CancelablePromise<AssignmentResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/assignments/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
