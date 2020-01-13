# Replace columns in the SSIS Data Flow

To replace an existing source column with a new, derived column from an SSIS Expression, use a combination of `SqlSourceExpression`, `ColumnAlias` and `SsisDataFlowExpression`.

As an example, consider the need to apply an operation to a source column in a load process. In this case, replace part of an email address with another value.

The following approach will select the source column as an alternative name and replace it's value in the Data Flow with the SSIS expression in a Derived Column transformation. The replaced values will be sent to the target using the original column name:

|Column                   |Expression                                    |
|---                      |---                                           |
|ColumnName               |`EmailAddress`                                |
|SqlSourceExpression      |`EmailAddress`                                |
|SsisDataFlowExpression   |`REPLACE(ALT_@@this,"value","other value")`   |
|ColumnAlias              |`ALT_@@this`                                  |

Add this to the columns page or sheet, for the `EmailAddress` source column to change the select statement for it to `EmailAddres AS ALT_EmailAddress` and derive the `EmailAddress` column with a Derived Column transformation using the defined Expression that refers to the source column using the defined column alias.
