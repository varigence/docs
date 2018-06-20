# Replace columns in the SSIS Data Flow

To replace an existing source column with a new, derived column from an SSIS Expression, use a combination of `SqlExpression`, `ColumnAlias` and `SsisExpression`.

As an example, consider the need to apply an operation to a source column in a load process.

In this case the following approach will select the source column as an alternative name and replace it with the SSIS expression in a Derived Column transformation:

|Column           |Expression                                    |
|---              |---                                           |
|ColumnName       |`EmailAddress`                                |
|SqlExpression    |`EmailAddress`                                |
|SsisExpression   |`REPLACE(ALT_@@this,"value","other value")`   |
|ColumnAlias      |`ALT_@@this`                                  |

Add this to the columns sheet, for the `EmailAddress` source column to select it as `ALT_EmailAddress` and derive the `EmailAddress` column with a Derived Column transformation with the defined `SsisExpression`

## Video

TODO: Add address to video in link

![Replace columns in the SSIS Data Flow](https://www.youtube.com/watch?v=<TBA>?rel=0&autoplay=0)
