SELECT
  `p`.`tProjectID` AS `id`,
  `p`.`name` AS `name`,
  `p`.`budget` AS `budget`,
  sum(`a`.`amount`) AS `workingTime`,
  `p`.`deadline` AS `deadline`,
  `n`.`text` AS `note`,
  `p`.`isFinished` AS `isFinished`
FROM
  (
    (
      `timeshift`.`tproject` `p`
      LEFT JOIN `timeshift`.`tnote` `n` ON(`n`.`tNoteID` = `p`.`tNoteID`)
    )
    LEFT JOIN `timeshift`.`activityworkingtime` `a` ON(`a`.`tProjectID` = `p`.`tProjectID`)
  )
GROUP BY
  `p`.`tProjectID`