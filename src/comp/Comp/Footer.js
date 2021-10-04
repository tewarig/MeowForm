import React from "react";
import { Box, Text, Flex, useMediaQuery } from "@chakra-ui/react";

function Footer(props) {
	const [check] = useMediaQuery("(min-width: 1025px)");
	return (
		<Box backgroundColor='#000'>
			<Box padding='5%'>
				<Box>
					<Text
						align='center'
						fontSize='3xl'
						bgGradient='linear(to-l, #ec9f05 ,#ff4e00)'
						bgClip='text'
						fontWeight='extrabold'>
						Meow Forms <Text color='#fff'> 🐱</Text>
					</Text>
					<Flex
						margin='2%'
						color='#fff'
						align='center'
						ml={check ? "39%" : "12%"}>
						<Box ml='4%'>
							<a
								rel='noreferrer'
								href='https://buymeacoffee.com/tewarig'
								target='_blank'>
								Help me keep Meow Form Free ☕
							</a>
						</Box>
					</Flex>
					<Flex
						flexDirection='column-reverse'
						color='#fff'
						align='center'
						ml={check ? "0%" : "0%"}>
						<a
							rel='noreferrer'
							href='https://icons8.com/'
							target='_blank'>
							<Text>Icons by Icons8</Text>
						</a>
						<Box margin='2%'>
							<a
								rel='noreferrer'
								href='https://twitter.com/oyeTewari'
								target='_blank'>
								🐦 @oyeTewari
							</a>
						</Box>
						<Box margin='2%'>
							All mails are delivered by 🧀 the 🐈
						</Box>
					</Flex>
					<Flex>
						<Box></Box>
					</Flex>

					<Flex></Flex>
				</Box>
			</Box>
		</Box>
	);
}

export default Footer;
