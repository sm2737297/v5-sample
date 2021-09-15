import {
    Checkbox, FormControlLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from "prop-types";
import checkIcon from './../../assets/img/Check.svg';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function CustomStyledCheckbox(props) {
    const {
        label,
        key,
        classes,
        handleCheckboxChange,        
        defaultCheckState,
        name
    } = props;

    return (
        <FormControlLabel
            control={
                <Checkbox
                    key={key}
                    name={name}
                    disableRipple
                    color="primary"
                    checkedIcon={<CheckCircleIcon
                        className={classes.styleCheckedIconStyle}
                    />}
                    icon={<RadioButtonUncheckedIcon
                        className={classes.styleCheckIconStyle}
                    />}
                    inputProps={{ 'aria-label': 'decorative checkbox' }}
                    onChange={handleCheckboxChange}
                    defaultChecked={defaultCheckState}
                />
            }
            label={label}
            key={key}
        />

    );
}

CustomStyledCheckbox.propTypes = {
    label: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
}

CustomStyledCheckbox.defaultProps = {

};

export default CustomStyledCheckbox;