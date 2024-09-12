export interface Response {
    success: boolean;
    error: boolean;
    data: any;
    message?: string
}

export interface SidebarIcons {
    id: string;
    icon: string;
    name: string;
}