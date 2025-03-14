/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AssignmentResponseDto = {
    owner: Record<string, any>;
    client: string;
    name: string;
    description?: string;
    branch: AssignmentResponseDto.branch;
    minPayment?: number;
    maxPayment?: number;
    status: AssignmentResponseDto.status;
    assignmentDeadline: string;
    trailDate?: string;
    officeGiven: Record<string, any>;
    id: string;
    createdAt?: string;
    updatedAt?: string;
};
export namespace AssignmentResponseDto {
    export enum branch {
        PRAWO_PRACY = 'Prawo pracy',
        PRAWO_GOSPODARCZE = 'Prawo gospodarcze',
        ESG = 'ESG',
        PRAWO_W_ASNO_CI_INTELEKTUALNEJ = 'Prawo własności intelektualnej',
        PRAWO_ADMINISTRACYJNE = 'Prawo administracyjne',
        NIERUCHOMO_CI = 'Nieruchomości',
        PRAWO_KORPORACYJNE = 'Prawo korporacyjne',
        INNE = 'Inne',
    }
    export enum status {
        OFERTA_ZAAKCEPTOWANA = 'OFERTA ZAAKCEPTOWANA',
        OFERTA_ROZPATRYWANA = 'OFERTA ROZPATRYWANA',
        OFERTA_ODRZUCONA = 'OFERTA ODRZUCONA',
        W_TRAKCIE_PROWADZENIA = 'W TRAKCIE PROWADZENIA',
        ZAKO_CZONA = 'ZAKOŃCZONA',
    }
}

