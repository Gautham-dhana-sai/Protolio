import { env } from '../../../assets/env'

export class QrCodeSettings {
    public static API = {
        GET_DEFAULT_QR: env.apiUrl + '/defaultQr',
        GET_QR: env.apiUrl + `/get/qr`
    }
}