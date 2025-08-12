"use client";

import { ChangeEvent, useState } from "react";

export function PhoneInput() {
	// Инициализируем состояние только для оставшейся части номера
	const [phoneNumber, setPhoneNumber] = useState("");

	const formatPhoneNumber = (value: string) => {
		// Удаляем все, кроме цифр
		let digitsOnly = value.replace(/\D/g, "");

		// Ограничиваем количество цифр до 10 (3 + 3 + 2 + 2)
		digitsOnly = digitsOnly.substring(0, 10);

		const firstThree = digitsOnly.substring(0, 3);
		const secondThree = digitsOnly.substring(3, 6);
		const firstTwo = digitsOnly.substring(6, 8);
		const lastTwo = digitsOnly.substring(8, 10);

		let formatted = "";

		if (firstThree) {
			formatted += `${firstThree}`;
		}
		if (secondThree) {
			formatted += ` ${secondThree}`;
		}
		if (firstTwo) {
			formatted += `-${firstTwo}`;
		}
		if (lastTwo) {
			formatted += `-${lastTwo}`;
		}

		return formatted;
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		// Форматируем только введенную часть
		const formattedValue = formatPhoneNumber(value);
		setPhoneNumber(formattedValue);
	};

	return (
		<div className="relative w-full">
			<input
				type="tel"
				value={phoneNumber}
				onChange={handleInputChange}
				placeholder="701 111-11-11"
				className="border border-[#e0e0e0] py-2.5 pl-10.75 pr-4 w-full h-11 rounded-sm font-montserrat font-medium text-base leading-[150%] placeholder:opacity-40 placeholder:text-[#272835]"
			/>
			<span className="absolute top-2.5 left-4.25 font-montserrat font-medium text-base leading-[150%]">
				+7
			</span>
		</div>
	);
}
