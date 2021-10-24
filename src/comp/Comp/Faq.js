import React,{useState} from 'react'
import { FAQ_Data } from '../../data/faq'
import '../../styles/faq.css'

import {
	Text,
	Box,
	useColorModeValue,
	useMediaQuery,
	Image,
	Flex,
	Button,
} from "@chakra-ui/react";

function Faq() {

    const textColor = useColorModeValue("gray.700", "gray.100");
	const [check] = useMediaQuery("(min-width: 1025px)");

    return (
        <div className="faq-div">
            <div className="faq-main">
                <div className="heading">
                    <Text
                        align='center'
                        color={textColor}
                        fontSize={check ? "5xl" : "3xl"}
                        fontWeight='extrabold'
                        mt={check ? "0%" : "4%"}>
                        Frequently Asked Questions (FAQ)
                    </Text>
                </div>
                <div className="faq-data">
                    {
                        FAQ_Data.map((data) => (
                            <div className="singleFaq" key={data.id}>
                                <div className="faq-question">
                                    <p><span>Q . </span>{data.question}</p>
                                </div>
                                <div className="faq-answer">
                                    <p><span>A . </span>{data.answer}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Faq
