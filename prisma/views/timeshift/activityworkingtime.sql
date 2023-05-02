SELECT
  `a`.`tActivityID` AS `tActivityID`,
  `a`.`tProjectID` AS `tProjectID`,
  sum(`r`.`workingTime`) AS `amount`
FROM
  (
    `timeshift`.`tactivity` `a`
    LEFT JOIN `timeshift`.`trecord` `r` ON(`r`.`tActivityID` = `a`.`tActivityID`)
  )
GROUP BY
  `a`.`tActivityID`