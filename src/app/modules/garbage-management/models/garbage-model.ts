import { ResponseUserModel } from 'app/shared/models/response-user-model';

export class GarbageModel {
    id: string;
    collectingDate: Date;
    userId: string;
    user = new ResponseUserModel();
    garbageType: GarbageType;
    weight: string;
}

export enum GarbageType {
    plastic,
    organic,
    glass,
    others
}
