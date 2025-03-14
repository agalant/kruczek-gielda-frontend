/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListAssignmentsFiltersDto } from './ListAssignmentsFiltersDto';
export type ListAssignmentsDto = {
    sort: ListAssignmentsDto.sort;
    filterBy?: ListAssignmentsFiltersDto;
    page: number;
    perPage: number;
};
export namespace ListAssignmentsDto {
    export enum sort {
        CLIENT = 'client',
        _CLIENT = '-client',
        NAME = 'name',
        _NAME = '-name',
        MIN_PAYMENT = 'minPayment',
        _MIN_PAYMENT = '-minPayment',
        MAX_PAYMENT = 'maxPayment',
        _MAX_PAYMENT = '-maxPayment',
        ASSIGNMENT_DEADLINE = 'assignmentDeadline',
        _ASSIGNMENT_DEADLINE = '-assignmentDeadline',
        TRAIL_DATE = 'trailDate',
        _TRAIL_DATE = '-trailDate',
    }
}

