import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full h-20 p-2 bg-white text-gray-600">
			<div className="max-w-7xl m-auto">
				<div className="flex justify-between text-sm">
					<Link href="/">Trabalhe conosco</Link>

					<Link href="/">Termos e condições</Link>

					<Link href="/">Como cuidamos da sua privacidade</Link>
					<Link href="/">Acessibilidade</Link>
					<Link href="/">Contato</Link>
					<Link href="/">Informações sobre seguros</Link>
				</div>
				<p className="text-gray-500 dark:text-gray-400 text-xs">
					Copyright © 1999-2023 Rogues.com.br LTDA.
				</p>
				<p className="text-gray-500 dark:text-gray-400 text-xs">
					CNPJ n.º 123456789-10
				</p>
			</div>
		</footer>
	);
}
