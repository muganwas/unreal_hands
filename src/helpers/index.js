
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const formatVids = async (items, code, orientation, keywords = [], currentVids = []) => {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const name = item.name.split('.')[0];
        const vidURL = await getDownloadURL(ref(storage, item.fullPath));
        const thumbnailURL = await getDownloadURL(ref(storage, `${code}/preview/horizontal/` + name + '.jpg'));
        currentVids.push({
            url: vidURL,
            thumbnail: thumbnailURL,
            code,//"samsung-galaxy-a15",
            title: name,
            orientation,
            keywords, /** get keywords from csv */
            resolution: [{
                id: "hd",
                type: "HD (1920x1080px)",
                price: "$39"
            },
            {
                id: "4k",
                type: "4K (3840x2160px)",
                price: "$99"
            }],
            framerate: "24FPS",
            codec: "MOV ProRes 422"
        });
        //const csv = await getDownloadURL(ref(storage, `${code}/csv/${name}.csv`));
    }
    return currentVids;
}