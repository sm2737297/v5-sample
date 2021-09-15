import {
    Checkbox, FormControlLabel, Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from "prop-types";
import checkIcon from './../../assets/img/Check.svg';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function StyledCheckbox(props) {
    const {
        boxClass,
        checkedIconClass,
        unCheckedIconClass,
        formControlLabelClass,
        key,
        name,
        label,
        state,
        handleChange
    } = props;
    console.log(JSON.stringify(module));
    return (
        <Box key={key} component="span" m={2}
            className={boxClass}>
            <FormControlLabel
                control={
                    <Checkbox
                        key={key}
                        name={name}
                        color="primary"
                        checkedIcon={<CheckCircleIcon
                            className={checkedIconClass}
                        />}
                        icon={<RadioButtonUncheckedIcon
                            className={unCheckedIconClass}
                        />}
                        inputProps={{ 'aria-label': 'decorative checkbox' }}
                        onChange={handleChange}
                        checked={state}
                    />
                }
                className={formControlLabelClass}
                label={label}
                key={key}
            />
        </Box>
    );
}

StyledCheckbox.propTypes = {
    label: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
}

StyledCheckbox.defaultProps = {

};

export default StyledCheckbox;