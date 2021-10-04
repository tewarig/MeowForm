import React from "react";
import { Link } from "react-router-dom";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import {
	Text,
	Box,
	useColorModeValue,
	useMediaQuery,
	Image,
	Flex,
	Button,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

function Home(props) {
	const textColor = useColorModeValue("gray.700", "gray.100");
	const [check] = useMediaQuery("(min-width: 1025px)");

	return (
		<>
			<div>
				<Box ml='5%'>
					<Bounce top>
						<Text
							align='center'
							color={textColor}
							fontSize={check ? "5xl" : "3xl"}
							fontWeight='extrabold'
							mt={check ? "0%" : "4%"}>
							Functional Forms Solution for
						</Text>
						<Text
							align='center'
							bgGradient='linear(to-l, #ec9f05 ,#ff4e00)'
							bgClip='text'
							fontSize={check ? "7xl" : "4xl"}
							fontWeight='extrabold'
							mt={check ? "0%" : "4%"}>
							<Typewriter
								options={{
									strings: [
										"React ",
										"Flutter ",
										"Html ",
										"React Native",
										"Vue",
										"Angular",
									],
									autoStart: true,
									loop: true,
								}}
							/>
						</Text>
					</Bounce>
					<Flip top>
						<Box
							bgColor='#333'
							ml={check ? "20%" : "5%"}
							mt={check ? "8%" : "12%"}
							width={check ? "60%" : "90%"}
							borderRadius='25'>
							<Text color='#fff' padding='5%'>
								<Typewriter
									options={{
										strings: [
											`<form action="https://server.meowform.xyz/YourEmail&FormName method="post"`,
										],
										autoStart: true,
										loop: true,
									}}
								/>
							</Text>
						</Box>
						<Flex flexDirection='row' ml={check ? "40%" : "23%"}>
							<Box margin='1%'>
								<a
									rel='noreferrer'
									href='https://docs.meowform.xyz/docs/intro'
									target='_blank'>
									<Button margin='1%'> View docs</Button>
								</a>
							</Box>
							<Box margin='1%'>
								<Link to='/dashboard'>
									<Button colorScheme='orange'>
										{" "}
										Try it
									</Button>
								</Link>
							</Box>
						</Flex>
					</Flip>
					<Image
						lazyLoad={true}
						position={check ? "absolute" : "static"}
						src='https://res.cloudinary.com/dd0mtkqbr/image/upload/v1629015408/kitekat_ezvxgy.png'
						width={check ? "30%" : "40%"}
						height={check ? "13%" : "80%"}
						mt={check ? "-20%" : "5%"}
						ml={check ? "-20%" : "28%"}
						transform={check ? "rotate(60deg)" : ""}
						opacity={check ? "0.9" : "1"}></Image>
				</Box>
				<Box></Box>

				<Box mt='10%'>.</Box>
			</div>

			<div ml='25%' mt='10%'>
				.
			</div>

			<Box ml='10%' mt='5%'>
				<Flex flexDirection={check ? "row" : "column-reverse"}>
					<Image
						src='https://res.cloudinary.com/dd0mtkqbr/image/upload/v1629017773/kitekat-19_1_nsknib.png'
						width='40%'
						height='30%'
						ml={check ? "0%" : "25%"}
					/>
					<Fade right>
						<Text
							align='center'
							color={textColor}
							fontSize={check ? "5xl" : "3xl"}
							fontWeight='extrabold'
							mt={check ? "7%" : "4%"}
							ml={check ? "" : "-5%"}>
							Make backend-less forms with MeowForm and get
							<Text
								bgGradient='linear(to-l, #ec9f05 ,#ff4e00)'
								bgClip='text'>
								Unlimited Responses{" "}
							</Text>{" "}
							in your inbox .
						</Text>
					</Fade>
				</Flex>
				<Flex flexDirection={check ? "row" : "column"} mt='5%'>
					<Fade left>
						<Text
							align='center'
							color={textColor}
							fontSize={check ? "5xl" : "3xl"}
							fontWeight='extrabold'
							mt={check ? "7%" : "4%"}
							ml={check ? "" : "-5%"}>
							Choose your fontend , Use our API to handle things
							for
							<Text
								bgGradient='linear(to-l, #ec9f05 ,#ff4e00)'
								bgClip='text'>
								{" "}
								Free{" "}
							</Text>
						</Text>
					</Fade>
					<Image
						src='https://res.cloudinary.com/dd0mtkqbr/image/upload/v1629029065/kitekat-8_ein5pc.png'
						width='40%'
						height='30%'
						ml={check ? "0%" : "25%"}
					/>
				</Flex>
				<Flex flexDirection={check ? "row-reverse" : "column"} mt='5%'>
					<Fade right>
						<Text
							align='center'
							color={textColor}
							fontSize={check ? "5xl" : "3xl"}
							fontWeight='extrabold'
							mt={check ? "7%" : "4%"}
							ml={check ? "" : "-5%"}>
							Missed a response ? don't worry view all responses
							in out dashboard
							<Text
								bgGradient='linear(to-l, #ec9f05 ,#ff4e00)'
								bgClip='text'>
								{" "}
							</Text>
						</Text>
					</Fade>
					<Image
						src='https://res.cloudinary.com/dd0mtkqbr/image/upload/v1630156150/kitekat-2_kzxgrr.png'
						width='40%'
						height='30%'
						ml={check ? "0%" : "25%"}
					/>
				</Flex>
			</Box>
			<Box margin='10%'></Box>
			<Box
				margin={check ? "5%" : "1%"}
				padding={check ? "5%" : "1%"}
				alignContent='center'
				align='center'>
				<Flip top>
					<iframe
						title='demo video'
						width={check ? "640" : "300"}
						height={check ? "360" : "200"}
						align='center'
						src='https://www.loom.com/embed/c8cdc167f9b0405ca37e0b8a6f7ffe13'
						frameborder='0'
						webkitallowfullscreen
						mozallowfullscreen
						allowfullscreen='true'></iframe>
				</Flip>
				<h1 margin='15%'> Meow Form in action</h1>
			</Box>
		</>
	);
}

export default Home;
