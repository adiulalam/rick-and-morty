import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CardSkeleton = ({ array }) => {
	return (
		<div className="flex flex-row flex-wrap items-center justify-evenly p-5 gap-5">
			{array.map((e, i) => (
				<div
					className="flex flex-col md:h-72 justify-around min-w-full md:min-w-min border rounded-lg shadow-md md:flex-row md:max-w-xl bg-[#08C952]"
					key={i}
				>
					<Skeleton className="object-cover p-1 w-full rounded-t-lg h-96 md:h-full md:w-64 md:rounded-none md:rounded-l-lg bg-[#b7e4f9ff]" />
					<div className="flex flex-col justify-between p-4 leading-normal w-full md:w-96">
						<Skeleton className="mb-2 text-3xl font-bold tracking-tight bg-black" />
						<Skeleton className="mb-2 text-lg tracking-tight bg-black" />
						<div>
							<Skeleton className="w-1/2 pb-2 bg-black" />
							<div className="flex flex-row items-center justify-between mb-2 gap-2">
								<h3 className="text-sm tracking-tight text-black">
									<Skeleton className="px-8 w-full rounded-md bg-black" />
								</h3>
								<h3 className="text-sm tracking-tight text-black">
									<Skeleton className="px-8 w-full rounded-md bg-black" />
								</h3>
								<h3 className="text-sm tracking-tight text-black">
									<Skeleton className="px-8 w-full rounded-md bg-black" />
								</h3>
							</div>
						</div>

						<div>
							<Skeleton className="w-1/2 pb-2 bg-black" />
							<div className="flex flex-row items-center justify-between mb-2 gap-2">
								<h3 className="text-sm tracking-tight text-black">
									<Skeleton className="px-8 w-full rounded-md bg-black" />
								</h3>
								<h3 className="text-sm tracking-tight text-black">
									<Skeleton className="px-8 w-full rounded-md bg-black" />
								</h3>
								<h3 className="text-sm tracking-tight text-black">
									<Skeleton className="px-8 w-full rounded-md bg-black" />
								</h3>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
