import {
    Checkbox, FormControlLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from "prop-types";
import checkIcon from './../../assets/img/Check.svg';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function StyledCheckbox(props) {
    const {
        label,
        key,
        classes,
        handleSelectedModules,
        handleModules,
        checkState,
        name
    } = props;

    return (
        <FormControlLabel
            control={
                <Checkbox
                    key={key}
                    //className={classes.root}
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
                    onChange={handleSelectedModules}
                    defaultChecked={checkState}
                />
            }
            label={label}
            key={key}
        />

    );
}

StyledCheckbox.propTypes = {
    label: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
}

StyledCheckbox.defaultProps = {

};

export default StyledCheckbox;