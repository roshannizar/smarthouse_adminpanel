import { ResponseUserModel } from 'app/shared/models/response-user-model';

export class RentModel {
    id: string;
    name: string;
    amount: string;
    paidDate: Date;
    userId: string;
    user = new ResponseUserModel();
}
