import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link
					href='https://fonts.cdnfonts.com/css/segoe-ui-4'
					rel='stylesheet'
				/>
				<meta name='description' content='Express yourself' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link
					rel='icon'
					href='https://static.cdninstagram.com/rsrc.php/v3/yt/r/30PrGfR3xhB.png'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
