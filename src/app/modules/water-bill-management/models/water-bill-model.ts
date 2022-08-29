import { UserModel } from 'app/modules/user-management/models/user-model';
import { ResponseUserModel } from 'app/shared/models/response-user-model';

export class WaterBillModel {
    id: string;
    accountNumber: string;
    amount: number;
    arrears: number;
    billDate: Date;
    userId: string;
    user = new ResponseUserModel();
}
