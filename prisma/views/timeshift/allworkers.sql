SELECT
  `u`.`tUserID` AS `id`,
  concat(`u`.`name`, ' ', `u`.`surname`) AS `fullName`
FROM
  (
    `timeshift`.`tuser` `u`
    LEFT JOIN `timeshift`.`tusertype` `t` ON(`t`.`tUserTypeID` = `u`.`tUserTypeID`)
  )
WHERE
  !(
    `u`.`tUserTypeID` IN (
      SELECT
        `t`.`tUserTypeID`
      FROM
        DUAL
      WHERE
        `t`.`name` LIKE 'Klient'
    )
  )