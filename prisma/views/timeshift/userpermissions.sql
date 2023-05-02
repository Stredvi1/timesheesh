SELECT
  `l`.`tLoginID` AS `loginID`,
  `p`.`tPemissionID` AS `permissionID`,
  `u`.`tUserID` AS `userID`,
  concat(`u`.`name`, ' ', `u`.`surname`) AS `fullName`
FROM
  (
    (
      (
        `timeshift`.`tlogin` `l`
        JOIN `timeshift`.`tuser` `u` ON(`l`.`tLoginID` = `u`.`tLoginID`)
      )
      JOIN `timeshift`.`tusertype` `ut` ON(`u`.`tUserTypeID` = `ut`.`tUserTypeID`)
    )
    JOIN `timeshift`.`tpermission` `p` ON(`ut`.`tPemissionID` = `p`.`tPemissionID`)
  )