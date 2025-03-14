/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SignInDto } from '../models/SignInDto';
import type { SignInResponseDto } from '../models/SignInResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * Sign in with email and password
     * @param requestBody
     * @returns SignInResponseDto Returns access token
     * @throws ApiError
     */
    public static signInWithEmailAndPassword(
        requestBody: SignInDto,
    ): CancelablePromise<SignInResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
