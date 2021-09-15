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
        submitBtnDisabled,
        setSubmitBtnDisable,
        handleNextArrow,
        handleBackArrow,
        handleSaveAndContinue,
        selectedModules,
        modules,
        classes,
        handleAccessPrivilegeChange,
        handleSubmit,
        setCancelBtnDisabled
    } = props;

    let smIndex = modules.findIndex(x => (x.checked == true && (x.view == true || x.editTheme == true || x.editWorkFlow == true)));
    if (smIndex != -1) {
        setSubmitBtnDisable(false);
        setCancelBtnDisabled(false);
    } else {
        setSubmitBtnDisable(true);
        setCancelBtnDisabled(true);
    }

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
                                    boxClass={module && module.view ? classes.accessPrivilegeBoxStyleCheck_View : classes.accessPrivilegeBoxStyleUnCheck_View}
                                    checkedIconClass={classes.styleCheckedIconStyle}
                                    unCheckedIconClass={classes.styleCheckIconStyle}
                                    formControlLabelClass={module && module.view ? classes.moduleLabelCheckStyle : classes.moduleLabelUncheckStyle}
                                    key={module.id}
                                    name={module.id}
                                    label={'View'}
                                    state={module.view}
                                    handleChange={(e) => handleAccessPrivilegeChange(e, 'view')}
                                />
                                <StyledCheckbox
                                    boxClass={module && module.editTheme ? classes.accessPrivilegeBoxStyleCheck_Theme : classes.accessPrivilegeBoxStyleUncheck_Theme}
                                    checkedIconClass={classes.styleCheckedIconStyle}
                                    unCheckedIconClass={classes.styleCheckIconStyle}
                                    formControlLabelClass={module && module.editTheme ? classes.moduleLabelCheckStyle : classes.moduleLabelUncheckStyle}
                                    key={module.id}
                                    name={module.id}
                                    label={'Edit Theme Configuration'}
                                    state={module.editTheme}
                                    handleChange={(e) => handleAccessPrivilegeChange(e, 'editTheme')}
                                />
                                <StyledCheckbox
                                    boxClass={module && module.editWorkFlow ? classes.accessPrivilegeBoxStyleCheck_Workflow : classes.accessPrivilegeBoxStyleUncheck_Workflow}
                                    checkedIconClass={classes.styleCheckedIconStyle}
                                    unCheckedIconClass={classes.styleCheckIconStyle}
                                    formControlLabelClass={module && module.editWorkFlow ? classes.moduleLabelCheckStyle : classes.moduleLabelUncheckStyle}
                                    key={module.id}
                                    name={module.id}
                                    label={'Edit Workflow Configuration'}
                                    state={module.editWorkFlow}
                                    handleChange={(e) => handleAccessPrivilegeChange(e, 'editWorkFlow')}
                                />
                            </Grid>
                        </Paper>
                    ))
                }
                <ClientFooter
                    isAccessPrivilege={true}
                    backArrowDisabled={backArrowDisabled}
                    nextArrowDisabled={nextArrowDisabled}
                    cancelBtnDisabled={cancelBtnDisabled}
                    saveAndContinueBtnDisabled={submitBtnDisabled}
                    handleNextArrow={handleNextArrow}
                    handleBackArrow={handleBackArrow}
                    handleSaveAndContinue={handleSaveAndContinue}
                    handleSubmit={handleSubmit}
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