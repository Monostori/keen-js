function _applyPostProcessing(){
  this
    //.call(_runOrderBy)
    .call(_runLabelMapping)
    .call(_runLabelReplacement)
    .call(_runColorMapping)
    .call(_runSortGroups)
    .call(_runSortIntervals);
}
