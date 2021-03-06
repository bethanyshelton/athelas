export default function DoseCard() {
	return (
		<div className="mt-2 text-white">
			<h2 className="bg-gray-700 z-10 relative text-lg font-bold uppercase text-center -mb-6 p-1 mx-16 rounded-lg border border-gray-600">
				Morning
			</h2>
			<div className="bg-gray-800 px-6 pt-8 pb-2 mx-6 rounded-lg border border-gray-700">
				<ul className="list-disc list-inside">
					<li>Vitamin Name</li>
					<li>Vitamin Name</li>
					<li>Vitamin Name</li>
					<li>Vitamin Name</li>
				</ul>
				<span className="flex justify-end -mx-8 -my-4">
					<button className="flex justify-end bg-indigo-600 rounded-full px-6 py-2">
						Taken
					</button>
				</span>
			</div>
		</div>
	);
}
