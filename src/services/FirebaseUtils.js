import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
	updateDoc
} from "firebase/firestore";

const addSeries = async (series) => {
  try {
    const docRef = await addDoc(collection(db, "MiLista"), series);
    console.log("Series añadidas con el ID: ", docRef.id);
  } catch (e) {
    console.error("Error al añadir las series ", e);
  }
};

const getSeries = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "MiLista"));
    let seriesList = [];
    querySnapshot.forEach((doc) => {
      seriesList.push({ id: doc.id, ...doc.data() });
    });
    return seriesList;
  } catch (e) {
    console.error("Error al obtener las series: ", e);
    return [];
  }
};

const deleteSeries = async (id) => {
	try {
		await deleteDoc(doc(db, 'MiLista', id));
		console.log('Serie Borrada con el ID: ', id);
	} catch (e) {
		console.error('Error al eliminar la serie: ', e);
	}
};

const updateSeries = async (id, updatedSeries) => {
	try {
		const docRef = doc(db, 'MiLista', id);
		await updateDoc(docRef, updatedSeries);
		console.log('La serie se ha actualizado: ', id);
	} catch (e) {
		console.error('No se ha podido actualizar: ', e);
	}
};

export { addSeries, getSeries, deleteSeries, updateSeries };
