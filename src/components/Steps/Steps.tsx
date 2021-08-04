import { AnimatePresence, motion } from "framer-motion";
import { FC, useMemo } from "react";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import { Step } from "./Step";
import * as S from "./Steps.style";

export interface StepData {
  step: `step ${number}`;
  image: string;
  description: string;
}

const stepsData: StepData[] = [
  {
    step: "step 1",
    image: "/images/step1.svg",
    description: "Start Creating Your Note.",
  },
  {
    step: "step 2",
    image: "/images/step2.svg",
    description: "Save Note & Password to edit",
  },
  {
    step: "step 3",
    image: "/images/step3.svg",
    description: "Share Your Note with unique link",
  },
];

export const Steps = () => {
  const [stepIdx, setStepIdx] = useState(0);

  const nextStep = useCallback(
    () => setStepIdx(prev => (prev + 1) % stepsData.length),
    []
  );

  const stepsArr = useMemo(
    () =>
      stepsData.map(({ step, image, description }) => (
        <Step key={step} step={step} description={description} image={image} />
      )),
    []
  );

  useEffect(() => {
    const intervalId = setInterval(nextStep, 3000 /* 1 sec */);
    return () => clearInterval(intervalId);
  }, [nextStep]);
  return (
    <S.Wrapper>
      <AnimatePresence exitBeforeEnter>{stepsArr[stepIdx]}</AnimatePresence>
    </S.Wrapper>
  );
};
