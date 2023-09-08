import { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
    token: {
        colorPrimary: "black",
        colorPrimaryTextActive: "white",
        colorPrimaryText: "white",
        colorPrimaryActive: "white",
        colorBorder: "black"


    },
    components: {
        Button: {
            colorBgContainer: "black",
            colorPrimaryBg: "black"


        },

        Input: {
        },
        Tag: {
            lineHeightSM: 2.3,
            controlOutlineWidth: 7,


        },
        Menu: {
            itemSelectedBg: "black",
            itemHeight: 50,
            itemSelectedColor: "white",

        },
        Select: {
            colorBgBase: "black",
        },
        Tabs: {

        },


        Table: {
            colorPrimaryActive: "red",
            colorPrimary: "red",

        },


    },
}