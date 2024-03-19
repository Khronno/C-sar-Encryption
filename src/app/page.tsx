"use client";
import React, { useState } from "react";

function cifradoCesar(texto: string, clave = 0) {
	const letrasMayusculas = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"Ñ",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];
	const M = texto.toUpperCase();
	const S = M.split("");
	const R = [];
	for (var i = 0; i < S.length; i++) {
		const I = letrasMayusculas.indexOf(S[i]);
		if (I !== -1) {
			let NI;
			if (clave >= 0) {
				NI = (I + clave) % letrasMayusculas.length;
			} else {
				NI =
					(I + clave + letrasMayusculas.length) %
					letrasMayusculas.length;
			}
			R.push(letrasMayusculas[NI]);
		} else {
			R.push(S[i]);
		}
	}
	return R.join("");
}

const HomePage = () => {
	const [texto, setTexto] = useState("");
	const [clave, setClave] = useState(0);
	const [textoc, setTextoc] = useState("");

	const handleClick = () => {
		const textoCifrado = cifradoCesar(texto, clave);
		setTextoc(textoCifrado);
	};

	return (
		<main className="flex flex-col justify-center items-center h-screen">
			<div className="p-8 max-w-lg w-full">
				<h1 className="text-4xl font-bold mb-4 text-center">
					Decodificador
				</h1>
				<h2 className="text-xl mb-8 text-center">
					Creado por Joaquín Fernández
				</h2>
				<div className="bg-white bg-opacity-30 rounded-lg text-center text-gray-800 p-8 mb-8">
					<h1 className="text-xl font-bold mb-4">Resultado</h1>
					<p className="bg-blue-100 bg-opacity-70 hover:bg-opacity-80 focus:bg-opacity-80 rounded-md text-gray-800 text-lg p-2 w-full placeholder-gray-600">
						{textoc !== "" ? textoc : "-"}
					</p>
				</div>
				<div className="bg-white bg-opacity-30 rounded-lg text-center text-gray-800 p-8">
					<h1 className="text-xl font-bold mb-4">Cifrado César</h1>
					<hr className="m-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/20" />
					<input
						id="texto"
						className="bg-blue-100 bg-opacity-70 hover:bg-opacity-80 focus:bg-opacity-80 rounded-md text-gray-800 text-lg p-2 mb-4 w-full placeholder-gray-600"
						placeholder="Texto"
						value={texto}
						onChange={(e) => setTexto(e.target.value)}
					/>

					<input
						type="range"
						className="slider appearance-none bg-gray-200 rounded-full overflow-hidden h-6 w-full cursor-pointer outline-none slider-thumb:text-gray-600"
						min="-27"
						max="27"
						value={clave}
						onChange={(e) => setClave(parseInt(e.target.value))}
					/>

					<p className="text-gray-800 mb-4">Valor actual: {clave}</p>
					<button
						type="button"
						className="bg-blue-100 bg-opacity-70 hover:bg-opacity-80 focus:bg-opacity-80 rounded-md text-lg p-2 w-full text-gray-800 hover:text-white"
						onClick={handleClick}>
						Decodificar
					</button>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
