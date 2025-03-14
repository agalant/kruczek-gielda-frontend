/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LawsuitResponseDto = {
    title: string;
    lawyer: Record<string, any>;
    officeTaken: Record<string, any>;
    officeGiven?: Record<string, any>;
    client: string;
    status?: LawsuitResponseDto.status;
    payment: number;
    assignment?: Record<string, any>;
    offer?: Record<string, any>;
    id: string;
    createdAt?: string;
    updatedAt?: string;
};
export namespace LawsuitResponseDto {
    export enum status {
        OFERTA_ZAAKCEPTOWANA = 'OFERTA ZAAKCEPTOWANA',
        OFERTA_ROZPATRYWANA = 'OFERTA ROZPATRYWANA',
        OFERTA_ODRZUCONA = 'OFERTA ODRZUCONA',
        W_TRAKCIE_PROWADZENIA = 'W TRAKCIE PROWADZENIA',
        ZAKO_CZONA = 'ZAKOŃCZONA',
    }
}

