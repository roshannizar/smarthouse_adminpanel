import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'app/shared/services/base.service';
import { WaterBillModel } from '../models/water-bill-model';

@Injectable({
    providedIn: 'root'
})
export class WaterBillService extends BaseService<WaterBillModel> {

    baseUrl: string;

    constructor(protected http: HttpClient) {
        super(http);
        this.baseUrl = 'v1/waterbills';
    }

    createWaterBill(waterbill: WaterBillModel) {
        return this.post(this.baseUrl, waterbill);
    }

    updateWaterBill(waterbill: WaterBillModel) {
        return this.put(this.baseUrl, waterbill);
    }

    deleteWaterBill(id: string) {
        return this.delete(`${this.baseUrl}?id=${id}`);
    }

    getWaterBills() {
        return this.get(this.baseUrl);
    }

    getWaterBill(id: string) {
        return this.getById(`${this.baseUrl}/${id}`);
    }
}
