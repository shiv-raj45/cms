

enum adType {
    BANNER_AD = "banner_ad",
    RECT_AD = "rect_ad",
    BOX_AD = 'box_ad',
    BOX_AD_COLLECTION = "box_ad_collection"

}



enum adCollection {
    CATEGORY_AD_COLLECTION,
    BOX_AD_COLLECTION,

}


enum adCollectionOreintation {
    ROW,
    COLUMN
}


interface IAdPosition {

}



export const adPosition = {



    mast: {


        adsTypes: ['banner', 'rect', 'box'],

        allowedDirection: ['row', 'col'],

    }







}