import { env } from '../../../assets/env'

export class SupportSettings {
    public static API = {
        GET_FIRST_RAZORPAY: env.pgApiUrl + '/pay/first/razorpay',
        GET_FIRST_PHONEPE_TEST: env.pgApiUrl + '/pay/first/phonepe'
    }
}