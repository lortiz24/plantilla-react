import { type ReactNode } from 'react';
import { BackgroundImage, Container } from '@mantine/core';

interface Props {
	children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
	return (
		<BackgroundImage src="./assets/images/Home.png" /* sx={{height: '100vh', maxWidth: '1080px'}} */>
			<Container 
				h={'100vh'} 
				sx={{
					maxWidth: '1080px',
				}}>
				{children}
			</Container>
		</BackgroundImage>
	);
};
