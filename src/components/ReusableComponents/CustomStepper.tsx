import { Box, Step, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
interface IProps {
    number: number;
}

export function CustomStepper({number}: IProps) {
    const  t = useTranslations();
  const steps = [
    { title: t('onboarding.asanImza') },
    { title: t('onboarding.customer_info') },
    { title: t('onboarding.personal_info') },
  ];


    return(
        <Stepper bg="#fff" px="32px" py="12px" width="100%" index={number}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator bg="#E2F0FD" color="#2389EF">
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
    )
}