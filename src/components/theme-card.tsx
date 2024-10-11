import { getThemeAuthorLink, ZenTheme } from "@/lib/themes";
import styled from "styled-components";


import { ny } from "@/lib/utils";

const ThemeCardWrapper = styled.div``;

export default function ThemeCard({
	theme,
	className,
}: {
	theme: ZenTheme;
	className?: string;
}) {
	const maxNameLen = 50;
	const maxDescLen = 100;

	return (
		<ThemeCardWrapper
			onClick={(event) => {
				if (event.target instanceof HTMLAnchorElement) return;
				window.open(`/themes/${theme.id}`, "_self");
			}}
			className={ny(
				"flex w-full cursor-pointer select-none flex-col justify-start bg-surface rounded-xl border-2 border-[transparent] hover:shadow-lg hover:border-[rgba(0,0,0,.5)] dark:bg-[#121212] dark:hover:border-[#333] dark:hover:border-[#333] transition-shadow transition-all duration-200",
				className,
			)}
		>
			<div className="w-full p-5">
				<h2 className="mt-4 overflow-ellipsis text-start text-xl font-bold">
					{theme.name.substring(0, maxNameLen).trim() +
						(theme.name.length > maxNameLen ? "..." : "")}
				</h2>
				<div className="mt-2 flex">
					{theme.homepage && (
						<>
							<a
								href={theme.homepage}
								className="text-md text-blue-500"
								target="_blank"
								rel="noopener noreferrer"
							>
								Homepage
							</a>
							<span className="text-md mx-2 text-muted-foreground">{"·"}</span>
						</>
					)}
					<a
						href={getThemeAuthorLink(theme)}
						className="text-md text-blue-500"
						target="_blank"
						rel="noopener noreferrer"
					>
						Author
					</a>
					<span className="text-md mx-2 text-muted-foreground">{"·"}</span>
					<p className="text-muted-foreground">
						{theme.isColorTheme ? "Color Scheme" : "Utility"}
					</p>
				</div>
				<p className="text-md mt-2 overflow-ellipsis text-start text-muted-foreground">
					{theme.description.substring(0, maxDescLen).trim() +
						(theme.description.length > maxDescLen ? "..." : "")}
				</p>
			</div>
		</ThemeCardWrapper>
	);
}
