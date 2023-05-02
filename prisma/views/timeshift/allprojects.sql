SELECT
  DISTINCT `p`.`tProjectID` AS `tProjectID`,
  `p`.`name` AS `name`,
  `p`.`deadline` AS `deadline`,
  `p`.`budget` AS `budget`,
  `u`.`tUserID` AS `assignedToUser`
FROM
  (
    (
      `timeshift`.`tuser` `u`
      LEFT JOIN `timeshift`.`tactivity` `a` ON(`a`.`tUserID` = `u`.`tUserID`)
    )
    LEFT JOIN `timeshift`.`tproject` `p` ON(`p`.`tProjectID` = `a`.`tProjectID`)
  )
WHERE
  `p`.`tProjectID` IS NOT NULL