import {
    Stepper, Step, StepLabel
} from '@material-ui/core';
import PropTypes from "prop-types";

function ClientStepper(props) {
    const {
        steps,
        activeStep,
        alternativeLabel
    } = props;
    return (
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
}

ClientStepper.propTypes = {
    steps: PropTypes.array.isRequired,
    activeStep: PropTypes.number.isRequired,
    alternativeLabel: PropTypes.bool
}

ClientStepper.defaultProps = {
    alternativeLabel: false
};

export default ClientStepper;