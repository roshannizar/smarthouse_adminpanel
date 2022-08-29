import { ResponseUserModel } from 'app/shared/models/response-user-model';

export class UtilityModel {
    id: string;
    accountNumber: string;
    amount: string;
    type: string;
    userId: string;
    user = new ResponseUserModel();
}
