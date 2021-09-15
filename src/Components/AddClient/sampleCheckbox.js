import React from 'react';
import {
    Box
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function SampleCheckboxLabels(props) {
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
    //console.log(JSON.stringify(state));
    return (
        // <FormGroup row>
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
                        checked={state && state.checked ? true : false}
                    />
                }
                className={formControlLabelClass}
                label={label}
                key={key}
            />
        </Box>
        // </FormGroup>
    );
}