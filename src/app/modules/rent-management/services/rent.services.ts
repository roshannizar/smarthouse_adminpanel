import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'app/shared/services/base.service';
import { RentModel } from '../models/rent-model';

@Injectable({
    providedIn: 'root'
})
export class RentService extends BaseService<RentModel> {

    baseUrl: string;

    constructor(protected http: HttpClient) {
        super(http);
        this.baseUrl = 'v1/rents';
    }

    getRents() {
        return this.get(this.baseUrl);
    }

    getRent(id: string) {
        return this.getById(`${this.baseUrl}/${id}`);
    }

    createRent(rent: RentModel) {
        return this.post(this.baseUrl, rent);
    }

    updateRent(rent: RentModel) {
        return this.put(this.baseUrl, rent);
    }

    deleteRent(id: string) {
        return this.delete(`${this.baseUrl}?id=${id}`);
    }
}
