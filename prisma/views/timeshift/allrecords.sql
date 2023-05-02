SELECT
  `r`.`tRecordID` AS `id`,
  `r`.`tActivityID` AS `activityID`,
  `r`.`date` AS `date`,
  `r`.`workingTime` AS `workingTime`,
  `n`.`text` AS `text`
FROM
  (
    `timeshift`.`trecord` `r`
    LEFT JOIN `timeshift`.`tnote` `n` ON(`n`.`tNoteID` = `r`.`tNoteID`)
  )