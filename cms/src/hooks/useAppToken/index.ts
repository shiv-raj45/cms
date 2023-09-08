import { GlobalToken, theme } from "antd"

export const useAppToken = () => {
    const { token: t } = theme.useToken();
    return { t }
}