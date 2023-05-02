SELECT
  `a`.`tProjectID` AS `tProjectID`,
  sum(`a`.`amount`) AS `amount`
FROM
  `timeshift`.`activityamount` `a`
GROUP BY
  `a`.`tProjectID`