import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'app/shared/services/base.service';
import { retry } from 'rxjs-compat/operator/retry';
import { GarbageModel } from '../models/garbage-model';

@Injectable({
    providedIn: 'root'
})
export class GarbageService extends BaseService<GarbageModel> {
    baseUrl: string;

    constructor(protected http: HttpClient) {
        super(http);
        this.baseUrl = 'v1/garbages';
    }

    getGarbages() {
        return this.get(this.baseUrl);
    }

    getGarbage(id: string) {
        return this.getById(`${this.baseUrl}/${id}`)
    }

    createGarbage(garbage: GarbageModel) {
        return this.post(this.baseUrl, garbage);
    }

    updateGarbage(garbage: GarbageModel) {
        return this.put(this.baseUrl, garbage);
    }

    deleteGarbage(id: string) {
        return this.delete(`${this.baseUrl}?id=${id}`)
    }
}
