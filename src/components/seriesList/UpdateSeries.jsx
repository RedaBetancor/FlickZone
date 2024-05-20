import { useState } from "react";
import { updateSeries } from "../../services/FirebaseUtils";

const UpdateSeries = ({ serie, onClose, onUpdate }) => {
	const [name, setName] = useState(serie.name);
	const [img, setImg] = useState(serie.img);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await updateSeries(serie.id, { name, img });
		onUpdate();
		onClose();
	};

	return (
		<div className="update-series-modal">
			<form onSubmit={handleSubmit}>
				<label>
					Nombre:
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label>
					Imgen:
					<input 
						type="text"
						value={img}
						onChange={(e) => setImg(e.target.value)}
					/>
				</label>
				<button type="submit">Actualizar</button>
				<button type="button" onClick={onClose}>Cancelar</button>
			</form>
		</div>
	);
};

export default UpdateSeries;
