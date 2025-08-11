"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./carousel-button";
import Image from "next/image";

const TWEEN_FACTOR_BASE = 0.272727;

const numberWithinRange = (number: number, min: number, max: number): number =>
	Math.min(Math.max(number, min), max);

type TImage = {
	src: string;
	alt: string;
};

type PropType = {
	slides: TImage[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
	const tweenFactor = useRef(0);
	const tweenNodes = useRef<HTMLElement[]>([]);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
		tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
			return slideNode.querySelector(".embla__slide__number") as HTMLElement;
		});
	}, []);

	const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
		tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
	}, []);

	const tweenScale = useCallback(
		(emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
			const engine = emblaApi.internalEngine();
			const scrollProgress = emblaApi.scrollProgress();
			const slidesInView = emblaApi.slidesInView();
			const isScrollEvent = eventName === "scroll";

			emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
				let diffToTarget = scrollSnap - scrollProgress;
				const slidesInSnap = engine.slideRegistry[snapIndex];

				slidesInSnap.forEach((slideIndex) => {
					if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

					if (engine.options.loop) {
						engine.slideLooper.loopPoints.forEach((loopItem) => {
							const target = loopItem.target();

							if (slideIndex === loopItem.index && target !== 0) {
								const sign = Math.sign(target);

								if (sign === -1) {
									diffToTarget = scrollSnap - (1 + scrollProgress);
								}
								if (sign === 1) {
									diffToTarget = scrollSnap + (1 - scrollProgress);
								}
							}
						});
					}

					const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
					const scale = numberWithinRange(tweenValue, 0, 1).toString();
					const tweenNode = tweenNodes.current[slideIndex];
					tweenNode.style.transform = `scale(${scale})`;
					tweenNode.style.opacity = scale;
				});
			});
		},
		[]
	);

	useEffect(() => {
		if (!emblaApi) return;

		setTweenNodes(emblaApi);
		setTweenFactor(emblaApi);
		tweenScale(emblaApi);

		emblaApi
			.on("reInit", setTweenNodes)
			.on("reInit", setTweenFactor)
			.on("reInit", tweenScale)
			.on("scroll", tweenScale)
			.on("slideFocus", tweenScale);
	}, [emblaApi, tweenScale]);

	return (
		<div className="relative embla mx-auto">
			<div
				className="embla__viewport mx-auto max-w-[375px] md:max-w-[1128px] overflow-hidden"
				ref={emblaRef}
			>
				<div className="embla__container flex">
					{slides.map((img, index) => (
						<div
							className="embla__slide min-w-0 flex-[0_0_220px] md:flex-[0_0_33%]"
							key={`slide${index}`}
						>
							<div className="embla__slide__number max-h-75 md:max-h-150 max-w-55 md:max-w-[432px] size-full">
								<Image
									src={img.src}
									alt={img.alt}
									width={1080}
									height={1500}
									className="max-h-75 md:max-h-150 max-w-55 md:max-w-[432px] size-full rounded-md"
								/>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="absolute hidden lg:flex justify-between left-[50%] top-[50%] translate-[-50%] w-full max-w-[1280px] px-5">
				<PrevButton
					className="touch-manipulation bg-(--primary-color)/40 size-20 flex justify-center items-center rounded-full"
					onClick={onPrevButtonClick}
					disabled={prevBtnDisabled}
				/>
				<NextButton
					className="touch-manipulation bg-(--primary-color)/40 size-20 flex justify-center items-center rounded-full"
					onClick={onNextButtonClick}
					disabled={nextBtnDisabled}
				/>
			</div>
		</div>
	);
};

export default EmblaCarousel;
