import {
    Grid, InputLabel, Checkbox, FormControlLabel, Box
} from '@material-ui/core';
import PropTypes from "prop-types";
import ClientFooter from './ClientFooter';
import StyledCheckbox from './StyledCheckbox';
import SampleCheckboxLabels from './sampleCheckbox';

function RenderColumn(props) {
    const {
        module,
        classes,
        handleSelectedModules,
        selectedModules,
        handleModules
    } = props;
    // const smIndex = selectedModules.findIndex(x => x.id == module.id);
    // let checked = false;
    // if (smIndex != -1) {
    //     checked = true;
    // }
    //alert(module.checked ? true : false);
    //console.log(checked);
    // return <Box key={module.id} component="span" m={2}
    //     className={checked ? classes.moduleBoxStyleCheck : classes.moduleBoxStyleUncheck}>
    return <StyledCheckbox
        boxClass={module && module.checked ? classes.moduleBoxStyleCheck : classes.moduleBoxStyleUncheck}
        checkedIconClass={classes.styleCheckedIconStyle}
        unCheckedIconClass={classes.styleCheckIconStyle}
        formControlLabelClass={module && module.checked ? classes.moduleLabelCheckStyle : classes.moduleLabelUncheckStyle}
        key={module.id}
        name={module.id}
        label={module.name}
        state={module.checked}
        handleChange={handleModules}
    />
    // </Box>

    // return <SampleCheckboxLabels
    //     classes={classes}
    //     boxClass={module && module.checked ? classes.moduleBoxStyleCheck : classes.moduleBoxStyleUncheck}
    //     checkedIconClass={classes.styleCheckedIconStyle}
    //     unCheckedIconClass={classes.styleCheckIconStyle}
    //     formControlLabelClass={module && module.checked ? classes.moduleLabelCheckStyle : classes.moduleLabelUncheckStyle}
    //     key={module.id}
    //     name={module.id}
    //     label={module.name}
    //     state={module}
    //     handleChange={handleModules} />
}

function Modules(props) {
    const {
        modules,
        columns,
        backArrowDisabled,
        nextArrowDisabled,
        cancelBtnDisabled,
        saveAndContinueBtnDisabled,
        handleNextArrow,
        handleBackArrow,
        handleSaveAndContinue,
        classes,
        checked,
        handleSelectedModules,
        selectedModules,
        handleModules
    } = props;

    const arr = modules.reduce((acc, item) => {
        let group = acc.pop();
        if (group.length == 3) {
            acc.push(group);
            group = [];
        }
        group.push(item);
        acc.push(group);
        return acc;
    }, [[]]);

    return (
        <div>
            <form>
                <Grid container direction="row" spacing="3" style={{ paddingBottom: '20px' }}>
                    <Grid item>
                        <InputLabel className={classes.formLabel}>Select Modules</InputLabel>
                    </Grid>
                </Grid>
                {/* {
                    modules && modules.map((m, i) => (
                        <Grid key={module.id} container direction="row" spacing="3" style={{ paddingBottom: '20px' }}>
                            <RenderAsColumns module={m} columns={columns}
                                classes={classes} />
                        </Grid>
                    ))
                } */}
                {
                    arr.map((group, i) => {
                        return (
                            <Grid key={i} container direction="row" spacing="3" style={{ paddingBottom: '20px' }}>
                                {group.map(m => <RenderColumn key={m.id} module={m} columns={columns}
                                    classes={classes}
                                    handleSelectedModules={handleSelectedModules}
                                    selectedModules={selectedModules}
                                    handleModules={handleModules} />)}
                            </Grid>
                        );
                    })
                }

                <ClientFooter
                    isAccessPrivilege={false}
                    backArrowDisabled={backArrowDisabled}
                    nextArrowDisabled={nextArrowDisabled}
                    cancelBtnDisabled={cancelBtnDisabled}
                    saveAndContinueBtnDisabled={saveAndContinueBtnDisabled}
                    handleNextArrow={handleNextArrow}
                    handleBackArrow={handleBackArrow}
                    handleSaveAndContinue={(e) => handleSaveAndContinue(e, 'MODULES')}
                />
            </form>
        </div>
    );
}

Modules.propTypes = {

}

Modules.defaultProps = {

};

export default Modules;