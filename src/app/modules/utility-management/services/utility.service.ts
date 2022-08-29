import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'app/shared/services/base.service';
import { UtilityModel } from '../models/utility-model';

@Injectable({
    providedIn: 'root'
})
export class UtilityService extends BaseService<UtilityModel> {
    baseUrl: string;

    constructor(protected http: HttpClient) {
        super(http);
        this.baseUrl = 'v1/utilities';
    }

    createUtility(utility: UtilityModel) {
        return this.post(this.baseUrl, utility);
    }

    updateUtility(utility: UtilityModel) {
        return this.put(this.baseUrl, utility);
    }

    deleteUtility(id: string) {
        return this.delete(`${this.baseUrl}?id=${id}`);
    }

    getUtility(id: string) {
        return this.getById(`${this.baseUrl}/${id}`);
    }

    getUtilities() {
        return this.get(this.baseUrl);
    }
}
