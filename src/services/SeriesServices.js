
import { get, ref } from "firebase/database";
import { database } from "../firebase";

const seriesRef = ref(database, "/series");

const getAllSeries = () => {
    return get(seriesRef);
}

export default {getAllSeries};
