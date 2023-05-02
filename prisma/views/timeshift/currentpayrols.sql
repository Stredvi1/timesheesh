SELECT
  `u`.`tUserID` AS `tUserID`,
  concat(`u`.`name`, ' ', `u`.`surname`) AS `fullName`,
  `p`.`amount` AS `amount`,
  concat(`u`.`bankAccount`, '/', `b`.`bankCode`) AS `bankAccount`
FROM
  (
    (
      `timeshift`.`tuser` `u`
      LEFT JOIN `timeshift`.`tpayroll` `p` ON(`p`.`tUserID` = `u`.`tUserID`)
    )
    LEFT JOIN `timeshift`.`tbankid` `b` ON(`b`.`tBankIDID` = `u`.`tBankIDID`)
  )
WHERE
  1 + 1
  AND MONTH(`p`.`date`) = MONTH(curdate())