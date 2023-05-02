SELECT
  `l`.`tLoginID` AS `tLoginID`,
  `p`.`tPemissionID` AS `permissionID`
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