/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateAssignmentDto = {
    client?: string;
    name?: string;
    description?: string;
    branch?: UpdateAssignmentDto.branch;
    minPayment?: number;
    maxPayment?: number;
    status?: UpdateAssignmentDto.status;
    assignmentDeadline?: string;
    trailDate?: string;
};
export namespace UpdateAssignmentDto {
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

