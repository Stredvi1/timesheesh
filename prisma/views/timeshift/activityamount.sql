SELECT
  `w`.`tActivityID` AS `tActivityID`,
  `w`.`tProjectID` AS `tProjectID`,
  `w`.`amount` * `h`.`amount` AS `amount`
FROM
  (
    (
      `timeshift`.`activityworkingtime` `w`
      LEFT JOIN `timeshift`.`tactivity` `a` ON(`a`.`tActivityID` = `w`.`tActivityID`)
    )
    LEFT JOIN `timeshift`.`thourrate` `h` ON(`h`.`tHourRateID` = `a`.`tHourRateID`)
  )