SELECT
  `a`.`tActivityID` AS `id`,
  `a`.`name` AS `name`,
  `n`.`text` AS `note`,
  concat(`u`.`name`, ' ', `u`.`surname`) AS `fullName`,
  `a`.`timefund` AS `timefund`,
  `a`.`workingTime` AS `workingTime`,
  `h`.`amount` AS `hourRate`,
  `p`.`name` AS `projectName`
FROM
  (
    (
      (
        (
          `timeshift`.`tactivity` `a`
          LEFT JOIN `timeshift`.`tnote` `n` ON(`n`.`tNoteID` = `a`.`tNoteID`)
        )
        LEFT JOIN `timeshift`.`tuser` `u` ON(`u`.`tUserID` = `a`.`tUserID`)
      )
      LEFT JOIN `timeshift`.`tproject` `p` ON(`p`.`tProjectID` = `a`.`tProjectID`)
    )
    LEFT JOIN `timeshift`.`thourrate` `h` ON(`h`.`tHourRateID` = `a`.`tHourRateID`)
  )