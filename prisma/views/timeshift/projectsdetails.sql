SELECT
  `u`.`tUserID` AS `userID`,
  `p`.`tProjectID` AS `id`,
  `p`.`name` AS `name`,
  `p`.`budget` AS `budget`,
  `a`.`amount` AS `amount`,
  `p`.`deadline` AS `deadline`,
  `n`.`text` AS `note`,
  `p`.`isFinished` AS `isFinished`
FROM
  (
    (
      (
        `timeshift`.`tproject` `p`
        LEFT JOIN `timeshift`.`tnote` `n` ON(`n`.`tNoteID` = `p`.`tNoteID`)
      )
      LEFT JOIN `timeshift`.`tuser` `u` ON(`u`.`tUserID` = `p`.`tOwnerID`)
    )
    LEFT JOIN `timeshift`.`projectamount` `a` ON(`a`.`tProjectID` = `p`.`tProjectID`)
  )
GROUP BY
  `p`.`tProjectID`