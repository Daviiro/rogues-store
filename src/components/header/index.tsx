export default function Header() {
	return (
		<header className="w-full h-24 p-2 bg-white flex flex-col">
			<div className="w-7/12 flex justify-between m-1">
				<div className="w-36 h-10 bg-red-700">LOGO</div>
				<div className="w-96 h-10 bg-white border-2 border-black text-black">
					Barra de Pesquisa
				</div>
			</div>
			<div className="w-7/12 h-auto flex justify-between m-1">
				<div className="w-36 h-6 bg-yellow-400 ">Categorias</div>
			</div>
		</header>
	);
}
