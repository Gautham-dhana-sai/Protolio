export interface Link {
    portal: string;
    link: string;
    text: string;
}

export interface Qr {
    portal: string;
    base64: string;
    text?: string;
    link?: string;
}