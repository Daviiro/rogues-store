import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
	return (
		<header className="w-full h-28 p-2 bg-white flex flex-col">
			<div className="w-7/12 flex justify-between m-1">
				<div className="w-36 h-10 bg-red-700">LOGO</div>
				<form className="w-96 mx-5">
					<label
						htmlFor="default-search"
						className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
					>
						Search
					</label>
					<div className="relative">
						<input
							type="text"
							id="default-search"
							className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Buscar produtos, marcas e muito mais..."
							required
						/>
						<div className="absolute inset-y-0 -right-1 flex items-center pl-3 ">
							<button
								type="submit"
								className="text-white 
								h-fit absolute right-2.5 bottom-2.5  font-medium rounded-lg text-sm px-2 py-2"
							>
								<svg
									aria-hidden="true"
									className="w-5 h-5 text-gray-500 dark:text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									></path>
								</svg>
							</button>
						</div>
					</div>
				</form>
			</div>
			<div className="w-full h-auto flex justify-between m-1">
				<div className="w-36 h-6 bg-yellow-400 ">Categorias</div>

				<div className="text-black cursor-pointer">
					<Link href="/cart">
						<AiOutlineShoppingCart size={25} />
					</Link>
				</div>
			</div>
		</header>
	);
}
