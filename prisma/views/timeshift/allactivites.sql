SELECT
  `a`.`tActivityID` AS `id`,
  `a`.`tProjectID` AS `projectID`,
  `a`.`name` AS `name`,
  `a`.`timefund` AS `timefund`,
  `a`.`workingTime` AS `workingTime`,
  concat(`u`.`name`, ' ', `u`.`surname`) AS `fullName`
FROM
  (
    `timeshift`.`tactivity` `a`
    LEFT JOIN `timeshift`.`tuser` `u` ON(`u`.`tUserID` = `a`.`tUserID`)
  )