import {
    Grid, InputLabel, Checkbox, FormControlLabel, Box, Paper
} from '@material-ui/core';
import PropTypes from "prop-types";
import ClientFooter from './ClientFooter';
import Modules from './Modules';
import StyledCheckbox from './StyledCheckbox';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function AccessPrivilege(props) {
    const {
        backArrowDisabled,
        nextArrowDisabled,
        cancelBtnDisabled,
        saveAndContinueBtnDisabled,
        handleNextArrow,
        handleBackArrow,
        handleSaveAndContinue,
        selectedModules,
        modules,
        classes,
        handleAccessPrivilege
    } = props;

    // const sm = modules.filter(m => {
    //     let smIndex = selectedModules.findIndex(x => x.id == m.id);
    //     if (smIndex != -1) {
    //         return m;
    //     }
    // });
    //alert(JSON.stringify(sm));
    // const arr = sm.reduce((acc, item) => {
    //     let group = acc.pop();
    //     if (group.length == 3) {
    //         acc.push(group);
    //         group = [];
    //     }
    //     group.push(item);
    //     acc.push(group);
    //     return acc;
    // }, [[]]);

    return (
        <div>
            <form>
                <Grid container direction="row" spacing="3" style={{ paddingBottom: '20px' }}>
                    <Grid item>
                        <InputLabel className={classes.formLabel}>Select Modules</InputLabel>
                    </Grid>
                </Grid>
                {
                    // <>
                    //     <Paper className={classes.paper} style={{marginBottom: '20px'}}>
                    //         <Grid container direction="row" spacing="3">
                    //             <Box component="span" m={2}>
                    //                 {'User Management'}
                    //             </Box>
                    //             <Box component="span" m={2}>
                    //                 {'view'}
                    //             </Box>
                    //             <Box component="span" m={2}>
                    //                 {'Edit Theme Configuration'}
                    //             </Box>
                    //             <Box component="span" m={2}>
                    //                 {'Edit Workflow Configuration'}
                    //             </Box>
                    //         </Grid>
                    //     </Paper>
                    //     <Paper className={classes.paper} style={{marginBottom: '20px'}}>
                    //         <Grid container direction="row" spacing="3">
                    //             <Box component="span" m={2}>
                    //                 {'some'}
                    //             </Box>
                    //             <Box component="span" m={2}>
                    //                 {'view'}
                    //             </Box>
                    //         </Grid>
                    //     </Paper>
                    // </>
                    modules && modules.map((module, i) => (
                        module.checked &&
                        <Paper className={classes.paper} style={{ marginBottom: '20px' }}>
                            <Grid container direction="row" spacing="3">
                                <Box component="span" m={2}>
                                    <InputLabel className={classes.accessPrivilegeLabel}>{module.name}</InputLabel>
                                </Box>
                                <StyledCheckbox
                                    boxClass={module && module.checked ? classes.moduleBoxStyleCheck : classes.moduleBoxStyleUncheck}
                                    checkedIconClass={classes.styleCheckedIconStyle}
                                    unCheckedIconClass={classes.styleCheckIconStyle}
                                    formControlLabelClass={module && module.checked ? classes.moduleLabelCheckStyle : classes.moduleLabelUncheckStyle}
                                    key={module.id}
                                    name={module.id}
                                    label={'View'}
                                    state={module}
                                    handleChange={handleAccessPrivilege}
                                />
                                <StyledCheckbox
                                    boxClass={module && module.checked ? classes.moduleBoxStyleCheck : classes.moduleBoxStyleUncheck}
                                    checkedIconClass={classes.styleCheckedIconStyle}
                                    unCheckedIconClass={classes.styleCheckIconStyle}
                                    formControlLabelClass={module && module.checked ? classes.moduleLabelCheckStyle : classes.moduleLabelUncheckStyle}
                                    key={module.id}
                                    name={module.id}
                                    label={'Edit Theme Configuration'}
                                    state={module}
                                    handleChange={handleAccessPrivilege}
                                />
                                <StyledCheckbox
                                    boxClass={module && module.checked ? classes.moduleBoxStyleCheck : classes.moduleBoxStyleUncheck}
                                    checkedIconClass={classes.styleCheckedIconStyle}
                                    unCheckedIconClass={classes.styleCheckIconStyle}
                                    formControlLabelClass={module && module.checked ? classes.moduleLabelCheckStyle : classes.moduleLabelUncheckStyle}
                                    key={module.id}
                                    name={module.id}
                                    label={'Edit Workflow Configuration'}
                                    state={module}
                                    handleChange={handleAccessPrivilege}
                                />
                            </Grid>
                        </Paper>
                    ))
                }
                <ClientFooter backArrowDisabled={backArrowDisabled}
                    nextArrowDisabled={nextArrowDisabled}
                    cancelBtnDisabled={cancelBtnDisabled}
                    saveAndContinueBtnDisabled={saveAndContinueBtnDisabled}
                    handleNextArrow={handleNextArrow}
                    handleBackArrow={handleBackArrow}
                    handleSaveAndContinue={handleSaveAndContinue}
                />
            </form>
        </div>
    );
}

AccessPrivilege.propTypes = {

}

AccessPrivilege.defaultProps = {

};

export default AccessPrivilege;